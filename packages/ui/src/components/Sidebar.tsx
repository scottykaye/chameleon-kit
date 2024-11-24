"use client";
import cx from "clsx";
import {
  type CSSProperties,
  type ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";
import { cn } from "../utils/cn";

type Anchor = "left" | "right";

namespace Sidebar {
  export interface Context {
    /** The size of the Sidebar */
    // probably can rely on just css
    size?: string;
    /** The side the Sidebar is anchored to */
    anchor?: Anchor;
    /** Whether the Sidebar is anchored to it's parent or if false anchored to the window */
    isAnchoredToParent?: boolean;
  }
  export interface WrapperProps extends Context {
    /** The children rendered in the Sidebar.Wrapper component */
    children: ReactNode;
  }
  export interface PageProps extends Context {
    /** The children rendered in the Sidebar.Page component */
    children?: ReactNode;
  }
  interface Props {
    /** The children rendered in Sidebar component */
    children: ReactNode;
    /** The top numeric position the Sidebar will stick at */
    top?: CSSProperties["top"];
    /** The top numeric position the Sidebar will stick at */
    bottom?: CSSProperties["bottom"];
    /** Background color of Sidebar */
    backgroundColor?: CSSProperties["backgroundColor"];
    props?: { [key: string]: unknown };
    /** Classes provided to the Sidebar component */
    className?: string;
  }
  // Create two interfaces, both in which setting that the other should never happen.
  interface PropsWithLabel extends Props {
    /** Label of whats contained in the Sidebar */
    label: string;
    /** Identifier to the label thats in the Sidebar */
    labelledBy?: never;
  }
  interface PropsWithHeading extends Props {
    /** Label of whats contained in the Sidebar */
    label?: never;
    /** Identifier to the label thats in the Sidebar */
    labelledBy: string;
  }
  // Create a union that makes clear one or the other should be used, not both.
  export type AccessibleProps = PropsWithLabel | PropsWithHeading;
}

const SidebarContext = createContext<Sidebar.Context>({});

function SidebarWrapper({
  children,
  size = "250px",
  anchor = "left",
  isAnchoredToParent = false,
}: Sidebar.WrapperProps) {
  // do we really need useMemo?
  // unlike to reanchor but all these things are possible idk yet
  //  const sharedContext = useMemo(
  //    () => ({
  //      size,
  //      isAnchoredToParent,
  //      anchor,
  //    }),
  //    [size, isAnchoredToParent, anchor],
  //  );

  const sharedContext = {
    size,
    isAnchoredToParent,
    anchor,
  };

  return (
    <SidebarContext.Provider value={sharedContext}>
      <div
        className="flex min-h-full "
        style={
          {
            "--sidebar-size": size,
            "--animation-duration": "200ms",
            "--animation-timing-curve": "ease-in-out",
          } as CSSProperties
        }
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function SidebarPage({ children }: Sidebar.PageProps) {
  const { anchor } = useContext(SidebarContext);

  return (
    <div
      className={cn(
        "grow h-full transition-[var(--animation-duration),var(--animation-timing-curve)]",
        {
          "ms-[var(--sidebar-size)]": anchor === "left",
          "me-[var(--sidebar-size)]": anchor === "right",
        },
      )}
    >
      {children}
    </div>
  );
}

function Sidebar({
  children,
  labelledBy,
  label,
  top = "0",
  bottom = "0",
  className,
  ...props
}: Sidebar.AccessibleProps) {
  const { isAnchoredToParent } = useContext(SidebarContext);

  return (
    <nav
      {...props}
      aria-label={label}
      aria-labelledby={labelledBy}
      className={cx(
        "w-[var(--sidebar-size)] grow h-full scroll-smooth transition-[var(--animation-duration),var(--animation-timing-curve)]",
        {
          sticky: isAnchoredToParent,
          fixed: !isAnchoredToParent,
        },
        className,
      )}
    >
      {children}
    </nav>
  );
}

export { Sidebar, SidebarWrapper, SidebarPage };
