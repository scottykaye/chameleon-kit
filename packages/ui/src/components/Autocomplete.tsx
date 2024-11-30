import { KeyboardNav, createKeyboardNavHook } from "accessible-navigation";
import {
  type ChangeEvent,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "../utils/cn";
import { mergeRefs } from "../utils/mergeRefs";

namespace Autocomplete {
  export interface Props {
    data?: Array<string>;
    children?: ReactNode;
    className?: string;
  }
  export interface ItemProps {
    label: string;
    ref: (instance: HTMLButtonElement | null) => void;
    setInput: (value: string) => void;
  }
  export interface Context {
    keyboardControls?: KeyboardNav;
    useKeyboardNav?: ReturnType<typeof createKeyboardNavHook>;
  }
}

const AutocompleteContext = createContext<Autocomplete.Context>({});

export function Autocomplete({
  children,
  data,
  className,
}: Autocomplete.Props): ReactElement {
  const [input, setInput] = useState("");
  const [_, setActiveIndex] = useState(-1);
  const listElements = useRef([]);

  const [keyboardControls] = useState(() => new KeyboardNav("vertical"));
  const [useKeyboardNav] = useState(() =>
    createKeyboardNavHook(keyboardControls),
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    setActiveIndex(-1);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(0);
      if (listElements.current[0]) {
        (listElements.current[0] as HTMLInputElement).focus();
      }
    }
  }

  return (
    <AutocompleteContext.Provider value={{ keyboardControls, useKeyboardNav }}>
      <section className={cn("relative", className)}>
        <input
          type="search"
          onChange={handleChange}
          value={input}
          className="bg-[rgb(var(--background-start-rgb))] text-current h-12 w-full rounded border border-gray-500 px-3.5 py-2 transition-colors file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-400"
          onKeyDown={handleKeyDown}
          // biome-ignore lint: lint/a11y/noAutofocus - autoFocus is fine for our modal
          autoFocus
        />

        <menu
          className={cn(
            "max-h-[50vh] overflow-y-auto scrollbar absolute top-full w-full rounded",
            data && data.length > 0 && input.length > 0
              ? "animate-slide-in"
              : "animate-slide-out delay-500 max-h-0",
          )}
        >
          {data
            ?.filter((item) => item.includes(input))
            .map((item, index) => (
              <AutocompleteItem
                ref={(el) =>
                  ((listElements.current[index] as HTMLButtonElement | null) =
                    el)
                }
                key={item}
                label={item}
                setInput={setInput}
              />
            ))}
          {children}
        </menu>
      </section>
    </AutocompleteContext.Provider>
  );
}

export function AutocompleteItem({
  label,
  ref,
  setInput,
}: Autocomplete.ItemProps): ReactElement {
  const { keyboardControls, useKeyboardNav } = useContext(AutocompleteContext);

  if (
    typeof useKeyboardNav === "undefined" ||
    typeof keyboardControls === "undefined"
  ) {
    throw new Error(
      "`useKeyboardNav` and `keyboardControls` props must be defined.",
    );
  }

  const keyboardRef = useKeyboardNav(label) as (
    instance: HTMLButtonElement | null,
  ) => void;

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "Enter":
        setInput(label);
        break;
      default:
        if (keyboardControls) {
          keyboardControls.update(event.nativeEvent, label);
        }
        break;
    }
  }
  return (
    <li className="AutoComplete-dropdownItem">
      <button
        onKeyDown={handleKeyDown}
        ref={mergeRefs(ref, keyboardRef)}
        type="button"
        className="AutoComplete-button"
      >
        {label}
      </button>
    </li>
  );
}
