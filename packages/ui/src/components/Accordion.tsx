"use client";

import { KeyboardNav, createKeyboardNavHook } from "accessible-navigation";
import { ChevronDown } from "lucide-react";
import {
  type KeyboardEvent,
  type ReactNode,
  createContext,
  useContext,
  useId,
  useState,
} from "react";
import { cn } from "../utils/cn";

namespace Accordion {
  export interface Props {
    children: ReactNode;
    className?: string;
  }
  export interface PanelProps {
    children: ReactNode;
    title: ReactNode;
    label: string;
    controlledElement?: string;
    defaultIsOpen?: boolean;
  }
  export interface Context {
    keyboardControls?: KeyboardNav;
    useKeyboardNav?: ReturnType<typeof createKeyboardNavHook>;
  }
}

const AccordionContext = createContext<Accordion.Context>({});

export function Accordion({ children, className }: Accordion.Props) {
  const [keyboardControls] = useState(() => new KeyboardNav("vertical"));

  const [useKeyboardNav] = useState(() =>
    createKeyboardNavHook(keyboardControls),
  );

  const accordionId = useId();

  return (
    <AccordionContext.Provider value={{ keyboardControls, useKeyboardNav }}>
      <div
        id={`accordionGroup-${accordionId}`}
        className={cn("bg-white dark:bg-black rounded-sm", className)}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function Panel({
  children,
  title,
  label,
  controlledElement,
  defaultIsOpen = false,
}: Accordion.PanelProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const { keyboardControls, useKeyboardNav } = useContext(AccordionContext);

  if (
    typeof useKeyboardNav === "undefined" ||
    typeof keyboardControls === "undefined"
  ) {
    throw new Error(
      "`useKeyboardNav` and `keyboardControls` props must be defined.",
    );
  }

  const ref = useKeyboardNav(label) as (
    instance: HTMLButtonElement | null,
  ) => void;

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (keyboardControls) {
      keyboardControls.update(event.nativeEvent, label);
    }
  }

  return (
    <div className="border-b border-gray-400 dark:border-gray-600 p-2">
      <h3>
        <button
          type="button"
          // lets us know if the panel is expanded
          aria-expanded={isOpen}
          // Points to the ID of the panel which the header controls.
          aria-controls={controlledElement}
          id={label}
          onClick={handleToggle}
          className="px-4 py-2 w-full text-left flex gap-2 items-center"
          ref={ref}
          onKeyDown={onKeyDown}
        >
          {title}
          <ChevronDown
            className={cn("ml-auto w-4 h-4 text-gray-500", {
              "rotate-180": isOpen,
            })}
            aria-label={`${title} content is ${isOpen ? "expanded" : "collapsed"}`}
          />
        </button>
      </h3>
      {isOpen && (
        <section
          id={controlledElement}
          // Defines the accessible name for the region element.
          aria-labelledby={label}
          className="p-4"
        >
          {children}
        </section>
      )}
    </div>
  );
}
