"use client";

import { Autocomplete } from "@chameleon-kit/ui/Autocomplete";
import { Button } from "@chameleon-kit/ui/Button";
import { Modal } from "@chameleon-kit/ui/Modal";
import {
  Sidebar,
  SidebarPage,
  SidebarWrapper,
} from "@chameleon-kit/ui/Sidebar";
import { KeyboardNav, createKeyboardNavHook } from "accessible-navigation";
import {
  Accessibility,
  ArrowLeft,
  CookingPot,
  Github,
  Home,
  Menu,
  MonitorCog,
  PackageOpen,
  Palette,
  Puzzle,
  Settings,
  SunMoon,
  SwatchBook,
} from "lucide-react";
import NextLink from "next/link";
import {
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Logo } from "~/components/Logo";
import { cn } from "~/utils/cn";

const words = [
  "apple",
  "balloon",
  "cactus",
  "dragon",
  "elephant",
  "forest",
  "galaxy",
  "horizon",
  "igloo",
  "jungle",
  "kite",
  "lantern",
  "moonlight",
  "nectar",
  "ocean",
  "panda",
  "quartz",
  "rainbow",
  "sunshine",
  "tulip",
  "umbrella",
  "violin",
  "waterfall",
  "xylophone",
  "zebra",
  "adventure",
  "blossom",
  "canyon",
  "daisy",
  "emerald",
  "feather",
  "glacier",
  "harmony",
  "island",
  "journey",
  "kaleidoscope",
  "labyrinth",
  "melody",
  "nostalgia",
  "oasis",
  "paradise",
  "quokka",
  "riverbank",
  "starlight",
  "twilight",
  "universe",
  "voyage",
  "wanderlust",
  "xerox",
  "yarn",
  "zephyr",
  "amber",
  "blueprint",
  "compass",
  "dusk",
  "enchantment",
  "flourish",
  "gem",
  "hillside",
  "inspiration",
  "jewel",
  "keyhole",
  "lighthouse",
  "meadow",
  "nebula",
  "orchid",
  "panorama",
  "quiver",
  "ripple",
  "symphony",
  "topaz",
  "undertow",
  "velvet",
  "whisper",
  "xylitol",
  "yonder",
  "zest",
  "amethyst",
  "birch",
  "cascade",
  "destiny",
  "eclipse",
  "foliage",
  "grove",
  "haven",
  "infinity",
  "jasper",
  "kindness",
  "lagoon",
  "mirage",
  "nebulae",
  "opal",
  "pebble",
  "quagmire",
  "radiance",
  "sanctuary",
  "tranquility",
  "utopia",
  "vista",
];

const COLLAPSED_SIZE = "90px";
const EXPANDED_SIZE = "300px";

namespace Layout {
  export interface Context {
    keyboardControls?: KeyboardNav;
    useKeyboardNav?: ReturnType<typeof createKeyboardNavHook>;
  }
  export interface CommandKProps {
    children: ReactNode;
  }
}

const LayoutContext = createContext<Layout.Context>({});

function CommandK() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((prevState) => !prevState);
      }
    }

    // Wrapping the callback to make it explicit
    const keydownHandler: EventListener = (event: Event) => {
      handleKeyDown(event as unknown as KeyboardEvent<HTMLButtonElement>);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", keydownHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", keydownHandler);
      }
    };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={toggleOpen}
      unstyled
      fullscreen
      className="items-start"
      header="Search"
    >
      <Autocomplete data={words} />
    </Modal>
  );
}

const MenuItem = ({
  href,
  icon,
  label,
  isExpanded,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  isExpanded: boolean;
}) => {
  const { keyboardControls, useKeyboardNav } = useContext(LayoutContext);

  if (
    typeof useKeyboardNav === "undefined" ||
    typeof keyboardControls === "undefined"
  ) {
    throw new Error(
      "`useKeyboardNav` and `keyboardControls` props must be defined.",
    );
  }

  const ref = useKeyboardNav(label) as (
    instance: HTMLAnchorElement | null,
  ) => void;

  function onKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (keyboardControls) {
      keyboardControls.update(event.nativeEvent, label);
    }
  }

  return (
    <li>
      <NextLink
        ref={ref}
        href={href}
        className={cn(
          "flex items-center [&:is(:hover,:focus)]:bg-primary-300 [&:is(:hover,:focus)]:dark:bg-primary-700 rounded transition-[backgound-color,border-color,color,transform] active:translate-y-1",
        )}
        onKeyDown={onKeyDown}
      >
        <span className="m-6">{icon}</span>
        <span className={cn({ "sr-only": !isExpanded })}>{label}</span>
      </NextLink>
    </li>
  );
};

const SubMenuItem = ({
  href,
  children,
  label,
}: {
  href: string;
  children: ReactNode;
  label: string;
}) => {
  const { keyboardControls, useKeyboardNav } = useContext(LayoutContext);

  if (
    typeof useKeyboardNav === "undefined" ||
    typeof keyboardControls === "undefined"
  ) {
    throw new Error(
      "`useKeyboardNav` and `keyboardControls` props must be defined.",
    );
  }

  const ref = useKeyboardNav(label) as (
    instance: HTMLAnchorElement | null,
  ) => void;

  function onKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (keyboardControls) {
      keyboardControls.update(event.nativeEvent, label);
    }
  }

  return (
    <li>
      <NextLink
        ref={ref}
        href={href}
        className={cn(
          "flex items-center [&:is(:hover,:focus)]:bg-primary-300 [&:is(:hover,:focus)]:dark:bg-primary-700 rounded transition-[backgound-color,border-color,color,transform] active:translate-y-1",
          "px-5 py-2",
        )}
        onKeyDown={onKeyDown}
      >
        {children}
      </NextLink>
    </li>
  );
};

const SubMenuParent = ({
  icon,
  label,
  isExpanded,
  children,
}: {
  icon: ReactNode;
  label: string;
  isExpanded: boolean;
  children?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { keyboardControls, useKeyboardNav } = useContext(LayoutContext);

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

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (keyboardControls) {
      keyboardControls.update(event.nativeEvent, label);
    }
  }

  const stringLabel = label.replace(" ", "-").toLowerCase();

  return (
    <li className="relative">
      <h3>
        <Button
          ref={ref}
          onKeyDown={onKeyDown}
          variant="ghost"
          isFullWidth
          onClick={isExpanded ? () => setIsOpen((prev) => !prev) : undefined}
          popoverTarget={!isExpanded ? stringLabel : undefined}
          className={cn("flex items-center h-auto p-0")}
          style={
            !isExpanded
              ? ({
                  anchorName: `--${stringLabel}`,
                } as CSSProperties)
              : undefined
          }
        >
          <span className="m-6">{icon}</span>
          <span className={cn({ "sr-only": !isExpanded })}>{label}</span>
        </Button>
      </h3>
      <div
        style={
          !isExpanded
            ? ({
                positionAnchor: `--${stringLabel}`,
              } as CSSProperties)
            : undefined
        }
        className={
          !isExpanded
            ? `bg-surface-200 text-current rounded m-0 p-0 top-[anchor(top)] left-[calc(anchor(right)+1rem)] min-w-[${EXPANDED_SIZE}]`
            : undefined
        }
        popover={!isExpanded ? "auto" : undefined}
        id={!isExpanded ? stringLabel : undefined}
      >
        {isOpen || !isExpanded ? children : null}
      </div>
    </li>
  );
};

const SubMenu = ({ children }: { children: ReactNode }) => {
  const [keyboardControls] = useState(() => new KeyboardNav("vertical"));

  const [useKeyboardNav] = useState(() =>
    createKeyboardNavHook(keyboardControls),
  );

  return (
    <LayoutContext.Provider value={{ keyboardControls, useKeyboardNav }}>
      <menu className="grow overflow-x-clip overflow-y-auto scroll-smooth max-w-full scrollbar p-2">
        {children}
      </menu>
    </LayoutContext.Provider>
  );
};

function MenuContainer({ children }: { children: ReactNode }) {
  const [keyboardControls] = useState(() => new KeyboardNav("vertical"));

  const [useKeyboardNav] = useState(() =>
    createKeyboardNavHook(keyboardControls),
  );

  return (
    <LayoutContext.Provider value={{ keyboardControls, useKeyboardNav }}>
      <menu className="grow overflow-x-clip overflow-y-auto scroll-smooth max-w-full scrollbar p-2">
        {children}
      </menu>
    </LayoutContext.Provider>
  );
}

export function Layout({
  sidebarSize,
  setCookieAction,
  children,
}: {
  children: ReactNode;
  sidebarSize?: string;
  setCookieAction: ({
    key,
    value,
  }: Record<"key" | "value", string>) => Promise<
    Partial<Record<"success", boolean>>
  >;
}) {
  const [size, setResize] = useState<string | null | (() => string)>(
    sidebarSize || COLLAPSED_SIZE,
  );

  const isExpanded = size === EXPANDED_SIZE;

  function handleToggle() {
    setResize((prevState) =>
      prevState === EXPANDED_SIZE ? COLLAPSED_SIZE : EXPANDED_SIZE,
    );

    setCookieAction({
      key: "sidebarSize",
      value: isExpanded ? COLLAPSED_SIZE : (EXPANDED_SIZE as string),
    });
  }

  return (
    <>
      <SidebarWrapper size={size as string}>
        <Sidebar
          label="Top Level Navigation"
          className="bg-surface-200 border-r border-primary-500 flex flex-col"
        >
          <header className="p-2">
            <NextLink href="/">
              <Logo
                width={50}
                height={50}
                className="block m-3"
                role="graphics-symbol"
                aria-label="Chameleon Kit Home"
              />
            </NextLink>
            <Button
              type="button"
              variant="outline"
              onClick={handleToggle}
              className="block m-2"
              aria-expanded={isExpanded ? "true" : "false"}
            >
              {isExpanded ? (
                <ArrowLeft
                  role="graphics-symbol"
                  aria-label="Collapse Sidebar"
                />
              ) : (
                <Menu role="graphics-symbol" aria-label="Expand Sidebar" />
              )}
            </Button>
          </header>
          <MenuContainer>
            <MenuItem
              href="/"
              isExpanded={isExpanded}
              label="Introduction"
              icon={<Home aria-hidden="true" />}
            />
            <MenuItem
              href="/theming"
              isExpanded={isExpanded}
              label="Theming"
              icon={<SwatchBook aria-hidden="true" />}
            />
            <MenuItem
              href="/colors"
              isExpanded={isExpanded}
              label="Colors"
              icon={<Palette aria-hidden="true" />}
            />
            <MenuItem
              href="/recipes"
              isExpanded={isExpanded}
              label="Recipes"
              icon={<CookingPot aria-hidden="true" />}
            />

            <SubMenuParent
              label="Packages"
              icon={<PackageOpen aria-hidden="true" />}
              isExpanded={isExpanded}
            >
              <menu className={isExpanded ? "hidden" : "hidden"}>
                <MenuItem
                  href="/"
                  isExpanded={isExpanded}
                  label="Chameleon Kit"
                  icon={<Logo width={24} height={24} />}
                />
                <MenuItem
                  href="https://theme-handler-docs.vercel.app"
                  isExpanded={isExpanded}
                  label="Theme Handler"
                  icon={<SunMoon />}
                />
                <MenuItem
                  href="https://github.com/scottykaye/accessible-navigation"
                  isExpanded={isExpanded}
                  label="Accessible Navigation"
                  icon={<Accessibility />}
                />
              </menu>
            </SubMenuParent>
            <SubMenuParent
              label="Installations"
              icon={<MonitorCog aria-hidden="true" />}
              isExpanded={isExpanded}
            >
              <menu className={isExpanded ? "hidden" : "hidden"}>
                <li>
                  <NextLink href="/">Next.js</NextLink>
                </li>
                <li>
                  <NextLink href="/">Vite</NextLink>
                </li>
                <li>
                  <NextLink href="/">Remix</NextLink>
                </li>
                <li>
                  <NextLink href="/">Astro</NextLink>
                </li>
              </menu>
            </SubMenuParent>
            <SubMenuParent
              label="Components"
              icon={<Puzzle aria-hidden="true" />}
              isExpanded={isExpanded}
            >
              <SubMenu>
                <SubMenuItem label="Accordion" href="/components/accordion">
                  Accordion
                </SubMenuItem>
                <SubMenuItem label="Alert" href="/components/alert">
                  Alert
                </SubMenuItem>
                <SubMenuItem label="Button" href="/components/button">
                  Button
                </SubMenuItem>
                <SubMenuItem label="Card" href="/components/card">
                  Card
                </SubMenuItem>
                <SubMenuItem label="Heading" href="/components/heading">
                  Heading
                </SubMenuItem>
                <SubMenuItem label="Input" href="/components/input">
                  Input
                </SubMenuItem>
                <SubMenuItem label="Modal" href="/components/modal">
                  Modal
                </SubMenuItem>
                <SubMenuItem label="Sidebar" href="/components/sidebar">
                  Sidebar
                </SubMenuItem>
                <SubMenuItem label="Text" href="/components/text">
                  Text
                </SubMenuItem>
              </SubMenu>
            </SubMenuParent>
            <MenuItem
              href="https://github.com/scottykaye/chameleon-kit"
              isExpanded={isExpanded}
              label="Github"
              icon={<Github aria-hidden="true" />}
            />
          </MenuContainer>
          <Button type="button" variant="ghost" className="m-4 self-start">
            <Settings />
          </Button>
        </Sidebar>
        <SidebarPage>{children}</SidebarPage>
      </SidebarWrapper>
      <CommandK />
    </>
  );
}
