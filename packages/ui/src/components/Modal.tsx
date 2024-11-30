"use client";

import { XIcon } from "lucide-react";
import {
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { cn } from "../utils/cn";

const SIZES = {
  xl: "max-w-xl",
  lg: "max-w-lg",
  md: "max-w-md",
  sm: "max-w-sm",
  xs: "max-w-xs",
} as const;

namespace Modal {
  export type Props = {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    footer?: ReactNode | string;
    header?: ReactNode | string;
    size?: keyof typeof SIZES;
    // Will have to find a way to determine if labels and descriptions are required even though they are required for accessibility
    label?: string;
    description?: string;
    unstyled?: boolean;
    fullscreen?: boolean;
    className?: string;
  };
}

export function Modal({
  children,
  isOpen,
  onClose,
  footer,
  header,
  description,
  label,
  unstyled = false,
  fullscreen = false,
  size = "md",
  className,
}: Modal.Props): ReactElement {
  const ref = useRef<null | HTMLDialogElement>(null);

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  }

  const handleBackdropClick = useCallback(
    (event: Event) => {
      const target = event.target as HTMLDialogElement;
      if (target.nodeName === "DIALOG" && target instanceof HTMLDialogElement) {
        handleCloseModal();
      }
    },
    [handleCloseModal],
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("click", handleBackdropClick);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [handleBackdropClick]);

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      onKeyDown={handleKeyDown}
      className={cn(
        "backdrop:cursor-pointer transition-opacity backdrop:transition-[backdrop-filter] backdrop:backdrop-blur grid grid-cols-1 place-items-center [&:not([open])]:pointer-events-none [&:not([open])]:opacity-0 fixed inset-0 backdrop:bg-black/50 p-4 bg-transparent z-100 m-auto text-black dark:text-white",
        SIZES[size as keyof typeof SIZES],
        {
          "w-full h-full": fullscreen,
          "bg-surface-100": !unstyled,
        },
        className,
      )}
      aria-labelledby={label}
      aria-describedby={description}
    >
      <form action="dialog">
        <header className="flex justify-between mb-5 gap-2 text-pretty">
          {header}
          <button
            type="button"
            onClick={handleCloseModal}
            className="ml-auto w-8 h-8 grid place-items-center"
          >
            <XIcon className="w-4 h-4" arial-label="Close Modal" />
          </button>
        </header>
        <article>{children}</article>
        <footer className="mt-5">{footer}</footer>
      </form>
    </dialog>
  );
}
