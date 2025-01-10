import { cn } from "@/lib/utils";
import { KeyboardNav, createKeyboardNavHook } from "accessible-navigation";
import {
  Children,
  type ComponentPropsWithRef,
  type Dispatch,
  type ElementType,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { NavLink, useLocation } from "react-router-dom";

// Recommended approach by Matt Pocock for passing components as props: https://www.totaltypescript.com/pass-component-as-prop-react#passing-any-component-as-a-prop-and-inferring-its-props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

namespace Nav {
  export interface Props {
    children: ReactNode;
    className?: string;
    onActive?: (
      child: PropsWithChildren<ComponentPropsWithRef<ElementType>>,
      pathname: string | null,
    ) => boolean;
    ref?: RefObject<HTMLUListElement>;
    balancedItems?: boolean;
  }
  export interface Context {
    widths: Array<{ id: string; width: number }>;
    setWidths: Dispatch<SetStateAction<Array<{ id: string; width: number }>>>;
    navLinks?: KeyboardNav;
    useKeyboardNav?: ReturnType<typeof createKeyboardNavHook>;
  }

  export type ItemProps<TAs extends ElementType> = {
    is?: TAs;
    subMenu?: ReactNode;
    listItemClassName?: string;
    subMenuClassName?: string;
    icon?: ReactNode;
    id?: string;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? typeof NavLink : TAs>,
    "is"
  >;
}

const NavContext = createContext<Nav.Context>({
  widths: [],
  setWidths: () => [] satisfies Array<{ id: string; width: number }>,
  navLinks: undefined,
  useKeyboardNav: undefined,
});

export function Nav({
  children,
  ref,
  className,
  onActive = (child, pathname) => child.props.to === pathname,
  balancedItems = false,
}: Nav.Props) {
  const [navLinks] = useState(() => new KeyboardNav("horizontal"));
  const [useKeyboardNav] = useState(() => createKeyboardNavHook(navLinks));
  const [widths, setWidths] = useState<Array<{ id: string; width: number }>>(
    [],
  );
  const location = useLocation();
  const pathname = location.pathname;

  const navItemChildren = Children.toArray(children).filter(Boolean);
  const numberOfItems = navItemChildren.length;
  const activeNumber = navItemChildren.findIndex(
    (child: PropsWithChildren<ComponentPropsWithRef<ElementType>>) => {
      return onActive(child, pathname);
    },
  );
  const activeWidth = widths[activeNumber]?.width;

  const activeOffset = widths.reduce((acc, curr, index) => {
    if (index < activeNumber) {
      return acc + curr.width;
    }

    return acc;
  }, 0);

  return (
    <NavContext.Provider
      value={{ widths, setWidths, navLinks, useKeyboardNav }}
    >
      <nav
        style={
          {
            "--counter": numberOfItems,
            "--active": activeNumber,
            "--width": activeWidth,
            "--activeOffset": activeOffset,
          } as React.CSSProperties
        }
      >
        <ul
          ref={ref}
          className={cn(
            "relative grid grid-flow-col border-b-2 border-surface-100",
            "after:absolute after:top-full after:left-0 after:h-[2px] after:bg-foreground after:transition-[transform]",
            {
              "auto-cols-[15rem]": !balancedItems,
              "auto-cols-fr": balancedItems,
              "after:w-[calc(var(--width,0)*1px)] after:translate-x-[calc(var(--activeOffset,1)*1px)]":
                !balancedItems,
              "after:w-[calc(100%/var(--counter,1))] after:translate-x-[calc(var(--active,0)*100%)]":
                balancedItems &&
                typeof activeNumber === "number" &&
                activeNumber !== -1,
            },

            className,
          )}
        >
          {children}
        </ul>
      </nav>
    </NavContext.Provider>
  );
}

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      timeout = null; // Reset timeout after execution
    }, wait);
  };
}

export const NavItem = <TAs extends ElementType>(props: Nav.ItemProps<TAs>) => {
  const {
    is: Comp = NavLink,
    listItemClassName,
    className,
    id,
    icon,
    children,
    subMenu,
    ...rest
  } = props;

  const ref = useRef<HTMLLIElement>(null);

  const { setWidths, navLinks, useKeyboardNav } = useContext(NavContext);

  if (
    typeof useKeyboardNav === "undefined" ||
    typeof navLinks === "undefined"
  ) {
    throw new Error("`useKeyboardNav` and `navLinks` props must be defined.");
  }

  const href = "href" in rest ? rest.href : rest.to;
  const uniqueId = id ? (id as string) : (href as string & URL);

  function handleKeyDown(event: KeyboardEvent) {
    if (navLinks) {
      navLinks.update(event, uniqueId.toString());
    }
  }

  const refs = useKeyboardNav(uniqueId.toString());
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = pathname === href;

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const updateWidth = debounce(() => {
      const width = element.getBoundingClientRect().width;
      setWidths((prevState) => {
        const found = prevState.find((item) => item.id === uniqueId);

        if (found) {
          return prevState.map((item) =>
            item.id === uniqueId ? { id: uniqueId, width } : item,
          );
        }

        return [...prevState, { id: uniqueId, width }];
      });
    }, 50); // Debounce by 50ms

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    updateWidth();

    return () => {
      observer.disconnect();
      setWidths((prevState) =>
        prevState.filter((item) => item.id !== uniqueId),
      );
    };
  }, [setWidths, uniqueId]);

  return (
    <li id={id} className={listItemClassName} ref={ref}>
      <Comp
        {...rest}
        className={cn(
          "transition-colors pb-5 block",
          {
            "text-muted-foreground [&:is(:hover,:focus)]:text-primary":
              !isActive,
          },
          className,
        )}
        aria-current={isActive ? "page" : undefined}
        ref={refs}
        tabIndex={subMenu ? 0 : undefined}
        onKeyDown={handleKeyDown}
      >
        {children} {icon}
      </Comp>
    </li>
  );
};
