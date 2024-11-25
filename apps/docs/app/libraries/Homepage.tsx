"use client";

import { Accordion, Panel } from "@chameleon-kit/ui/Accordion";
import { Alert } from "@chameleon-kit/ui/Alert";
import { Button } from "@chameleon-kit/ui/Button";
import { Card } from "@chameleon-kit/ui/Card";
import { Heading } from "@chameleon-kit/ui/Heading";
import { Input } from "@chameleon-kit/ui/Input";
import { Modal } from "@chameleon-kit/ui/Modal";
import {
  Sidebar,
  SidebarPage,
  SidebarWrapper,
} from "@chameleon-kit/ui/Sidebar";
import { Text } from "@chameleon-kit/ui/Text";
import {
  Accessibility,
  ArrowLeft,
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
import Link from "next/link";
import { useState } from "react";
import { Logo } from "~/components/Logo";
import { cn } from "~/utils/cn";

const alertVariants = [
  "default",
  "info",
  "destructive",
  "warning",
  "success",
] as const;

const COLLAPSED_SIZE = "90px";
const EXPANDED_SIZE = "300px";

export function Homepage({
  sidebarSize,
  setCookieAction,
}: {
  sidebarSize?: string;
  setCookieAction: ({
    key,
    value,
  }: Record<"key" | "value", string>) => Promise<{ success: boolean }>;
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [size, setResize] = useState<string | null | (() => string)>(
    sidebarSize || EXPANDED_SIZE,
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
    <SidebarWrapper size={size as string}>
      <Sidebar
        label="Top Level Navigation"
        className="bg-surface-200 border-r border-primary-500 flex flex-col"
      >
        <header className="p-2">
          <Logo width={50} height={50} className="block m-3" />
          <Button
            type="button"
            variant="outline"
            onClick={handleToggle}
            className="block m-2"
          >
            {isExpanded ? <ArrowLeft /> : <Menu />}
          </Button>
        </header>
        <menu className="grow overflow-y-auto scroll-smooth max-w-full scrollbar p-2">
          <li>
            <Link
              href="/"
              className={cn("flex items-center justify-center", {
                "aspect-square ": !isExpanded,
              })}
            >
              <Home />
              {isExpanded ? "Introduction" : null}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn("flex items-center justify-center", {
                "aspect-square ": !isExpanded,
              })}
            >
              <SwatchBook />
              {isExpanded ? "Theming" : null}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn("flex items-center justify-center", {
                "aspect-square ": !isExpanded,
              })}
            >
              <Palette />
              {isExpanded ? "Palette" : null}
            </Link>
          </li>
          <li>
            <h3
              className={cn("flex items-center justify-center", {
                "aspect-square ": !isExpanded,
              })}
            >
              <PackageOpen />
              {isExpanded ? "Packages" : null}
            </h3>

            <menu>
              <li>
                <Link
                  href="/"
                  className={cn("flex items-center justify-center", {
                    "aspect-square ": !isExpanded,
                  })}
                >
                  <Logo width={24} height={24} />
                  {isExpanded ? "Chameleon Kit" : null}
                </Link>
              </li>
              <li>
                <Link
                  href="https://theme-handler-docs.vercel.app/"
                  className={cn("flex items-center justify-center", {
                    "aspect-square ": !isExpanded,
                  })}
                >
                  <SunMoon />
                  {isExpanded ? "Theme Handler" : null}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/scottykaye/accessible-navigation"
                  className={cn("flex items-center justify-center", {
                    "aspect-square ": !isExpanded,
                  })}
                >
                  <Accessibility />
                  {isExpanded ? "Accessible Navigation" : null}
                </Link>
              </li>
            </menu>
          </li>
          <li>
            <h3
              className={cn("flex items-center justify-center", {
                "aspect-square ": !isExpanded,
              })}
            >
              <MonitorCog />
              {isExpanded ? "Installations" : null}
            </h3>
            <menu className={isExpanded ? "block" : "hidden"}>
              <li>
                <Link href="/">Next.js</Link>
              </li>
              <li>
                <Link href="/">Vite</Link>
              </li>
              <li>
                <Link href="/">Remix</Link>
              </li>
              <li>
                <Link href="/">Astro</Link>
              </li>
            </menu>
          </li>
          <li>
            <h3
              className={cn("flex items-center justify-center", {
                "aspect-square ": !isExpanded,
              })}
            >
              <Puzzle />
              {isExpanded ? "Components" : null}
            </h3>
            <menu className={isExpanded ? "block" : "hidden"}>
              <li>
                <Link href="/">Accordion</Link>
              </li>
              <li>
                <Link href="/">Alert</Link>
              </li>
              <li>
                <Link href="/">Button</Link>
              </li>
              <li>
                <Link href="/">Card</Link>
              </li>
              <li>
                <Link href="/">Heading</Link>
              </li>
              <li>
                <Link href="/">Input</Link>
              </li>
              <li>
                <Link href="/">Modal</Link>
              </li>
              <li>
                <Link href="/">Sidebar</Link>
              </li>
              <li>
                <Link href="/">Text</Link>
              </li>
            </menu>
          </li>
          <li>
            <Link href="https://github.com/chameleon-kit">
              {isExpanded ? "Github" : null}
            </Link>
          </li>
        </menu>
        <Button type="button" variant="ghost" className="m-4 self-start">
          <Settings />
        </Button>
      </Sidebar>
      <SidebarPage>
        <header className="flex items-center gap-4 justify-center sticky top-0 mt-[calc(50vh-200px)] bg-surface-100/40 backdrop-blur after:h-0.5 after:absolute after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-primary-500 after:to-transparent">
          <h1 className="font-bold text-[clamp(2rem,3vw,5rem)] text-balance">
            Chameleon Kit
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 512 512"
            width="100"
            height="100"
          >
            <title>Chameleon Kit Logo</title>
            <desc>A playful chameleon</desc>
            <defs>
              {/* Define a linear gradient */}
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff0017" stopOpacity="1" />
                <stop offset="20%" stopColor="#ff8900" stopOpacity="1" />
                <stop offset="40%" stopColor="#ffb200" stopOpacity="1" />
                <stop offset="80%" stopColor="#94ff00" stopOpacity="1" />
                <stop offset="100%" stopColor="#6b9ae4" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffff00" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient1)"
              d="M95.221 150.452a10.79 10.79 0 0 0-10.802 10.802c0 5.963 4.829 10.802 10.802 10.802 5.963 0 10.802-4.839 10.802-10.802 0-5.973-4.839-10.802-10.802-10.802"
            />
            <path
              fill="url(#gradient1)"
              d="M95.221 120.098c-22.695 0-41.156 18.461-41.156 41.156s18.461 41.156 41.156 41.156 41.156-18.461 41.156-41.156-18.461-41.156-41.156-41.156m0 62.869c-11.98 0-21.712-9.744-21.712-21.712 0-11.98 9.733-21.712 21.712-21.712 11.969 0 21.712 9.733 21.712 21.712 0 11.968-9.743 21.712-21.712 21.712M400.651 149.221c-25.688-26.012-59.909-40.335-96.366-40.335H277.41c-5.974 0-10.802 4.839-10.802 10.802s4.829 10.802 10.802 10.802h26.876c30.635 0 59.401 12.044 80.995 33.919a10.74 10.74 0 0 0 7.68 3.208c2.744 0 5.487-1.037 7.594-3.111 4.244-4.191 4.288-11.04.096-15.285"
            />
            <path
              fill="url(#gradient1)"
              d="M501.198 233.488h-27.286c-5.628-88.686-79.547-159.116-169.626-159.116h-43.371c-20.114 0-39.611 3.424-58.159 10.197V61.518c0-13.038-10.608-23.646-23.646-23.646a24 24 0 0 0-3.122.216c-34.383 3.921-65.601 20.351-88.394 46.406C44.926 90.792 0 142.264 0 186.51c0 20.362 9.095 35.885 23.333 46.979h-5.315c-5.963 0-10.802 4.829-10.802 10.802v50.997c0 5.963 4.839 10.802 10.802 10.802h112.828l-24.769 24.769c-22.857-3.964-46.546 3.392-63.106 19.952-13.611 13.61-21.021 32.049-21.021 50.888 0 6.168.799 12.379 2.43 18.482a10.78 10.78 0 0 0 7.648 7.648 71.4 71.4 0 0 0 18.461 2.42c18.839 0 37.278-7.399 50.9-21.021 16.549-16.549 23.905-40.238 19.962-63.095l40.044-40.044h238.23c-2.863 17.888-8.631 35.183-17.251 51.634-13.719 26.195-34.07 48.394-58.861 64.186-24.046 15.328-51.818 24.424-80.292 26.282-5.369.356-9.646 4.591-10.068 9.949s3.165 10.197 8.404 11.375a190 190 0 0 0 41.588 4.612c69.847 0 135.837-38.574 169.28-102.426a191.9 191.9 0 0 0 20.427-65.612h28.345c5.963 0 10.802-4.839 10.802-10.802V244.29c.001-5.973-4.838-10.802-10.801-10.802M86.115 393.954c-11.094 11.094-26.768 16.29-42.128 14.27-2.031-15.361 3.165-31.045 14.259-42.139s26.779-16.279 42.128-14.259c2.019 15.36-3.176 31.034-14.259 42.128m85.272-109.469H28.82v-29.393l144.468.065-2.625 9.322c-1.879 6.676-1.599 13.611.724 20.006m134.13 0h-72.601c.27-.734 8.372-29.328 8.372-29.328h66.131l-2.625 9.322c-1.891 6.676-1.61 13.611.723 20.006m61.518 0c.27-.734 8.383-29.328 8.383-29.328h20.773a5.41 5.41 0 0 1 5.401 5.401s.076 23.354.054 23.927zm85.629-3.262c0 .086-.011.162-.011.248.292 27.729-6.406 55.458-19.368 80.206-23.473 44.807-65.007 75.583-112.007 86.482a188 188 0 0 0 13.848-8.026c27.967-17.824 50.921-42.852 66.39-72.385 14.14-27.016 21.485-56.042 21.82-86.277.011-.605-.14-20.913-.14-20.913 0-14.896-12.12-27.005-27.005-27.005h-14.669l1.545-5.487a32.665 32.665 0 0 0-19.314-39.255c-.627-.248-15.847-6.146-15.847-6.146-5.531-2.225-11.828.464-14.043 6.006-2.225 5.531.464 11.818 6.006 14.043 0 0 16.344 6.503 16.862 6.622a11.1 11.1 0 0 1 5.542 12.865l-15.296 54.184c-1.339 4.775-5.736 8.102-10.683 8.102-1.015 0-2.031-.14-3.035-.421a11.06 11.06 0 0 1-6.676-5.271 11.04 11.04 0 0 1-.994-8.447l9.938-35.226c1.62-5.736-1.718-11.71-7.464-13.319-5.747-1.62-11.709 1.718-13.33 7.453l-1.21 4.299h-66.131l1.545-5.487a32.66 32.66 0 0 0-19.303-39.255l-15.857-6.146c-5.531-2.225-11.818.464-14.043 6.006-2.214 5.531.464 11.818 6.006 14.043 0 0 16.354 6.503 16.873 6.622a11.09 11.09 0 0 1 5.531 12.865l-15.285 54.184c-1.35 4.775-5.736 8.102-10.683 8.102-1.015 0-2.031-.14-3.035-.421a11.03 11.03 0 0 1-6.676-5.271 11.04 11.04 0 0 1-1.005-8.447l9.938-35.226c1.62-5.736-1.718-11.71-7.464-13.319-5.747-1.62-11.71 1.718-13.33 7.453l-1.21 4.299-85.855-.065c-56.636-1.48-71.931-29.965-71.931-46.978 0-16.171 8.89-35.82 23.776-52.574 14.885-16.733 32.979-27.351 48.404-28.399a10.8 10.8 0 0 0 7.615-3.921c19.444-23.7 46.827-38.639 77.117-42.074.076-.011.14-.022.205-.022.227-.032 2.43.875 2.43 1.998v39.331c0 3.716 1.912 7.173 5.055 9.149a10.78 10.78 0 0 0 10.435.583c20.124-9.69 41.75-14.604 64.273-14.604h43.371c81.815 0 148.378 66.563 148.378 148.378v36.864zm37.732 3.262h-16.16c.011-.951.032-29.393.032-29.393h16.128z"
            />
            <path
              fill="url(#gradient1)"
              d="M95.221 150.452a10.79 10.79 0 0 0-10.802 10.802c0 5.963 4.829 10.802 10.802 10.802 5.963 0 10.802-4.839 10.802-10.802 0-5.973-4.839-10.802-10.802-10.802"
            />
            <path
              fill="url(#gradient1)"
              d="M95.221 120.098c-22.695 0-41.156 18.461-41.156 41.156s18.461 41.156 41.156 41.156 41.156-18.461 41.156-41.156-18.461-41.156-41.156-41.156m0 62.869c-11.98 0-21.712-9.744-21.712-21.712 0-11.98 9.733-21.712 21.712-21.712 11.969 0 21.712 9.733 21.712 21.712 0 11.968-9.743 21.712-21.712 21.712M400.651 149.221c-25.688-26.012-59.909-40.335-96.366-40.335H277.41c-5.974 0-10.802 4.839-10.802 10.802s4.829 10.802 10.802 10.802h26.876c30.635 0 59.401 12.044 80.995 33.919a10.74 10.74 0 0 0 7.68 3.208c2.744 0 5.487-1.037 7.594-3.111 4.244-4.191 4.288-11.04.096-15.285"
            />
            <path
              fill="url(#gradient1)"
              d="M400.651 149.221c-25.688-26.012-59.909-40.335-96.366-40.335H277.41c-5.974 0-10.802 4.839-10.802 10.802s4.829 10.802 10.802 10.802h26.876c30.635 0 59.401 12.044 80.995 33.919a10.74 10.74 0 0 0 7.68 3.208c2.744 0 5.487-1.037 7.594-3.111 4.244-4.191 4.288-11.04.096-15.285M95.221 150.452a10.79 10.79 0 0 0-10.802 10.802c0 5.963 4.829 10.802 10.802 10.802 5.963 0 10.802-4.839 10.802-10.802 0-5.973-4.839-10.802-10.802-10.802"
            />
            <path
              fill="url(#gradient1)"
              d="M95.221 150.452a10.79 10.79 0 0 0-10.802 10.802c0 5.963 4.829 10.802 10.802 10.802 5.963 0 10.802-4.839 10.802-10.802 0-5.973-4.839-10.802-10.802-10.802"
            />
            <path
              fill="url(#gradient1)"
              d="M95.221 120.098c-22.695 0-41.156 18.461-41.156 41.156s18.461 41.156 41.156 41.156 41.156-18.461 41.156-41.156-18.461-41.156-41.156-41.156m0 62.869c-11.98 0-21.712-9.744-21.712-21.712 0-11.98 9.733-21.712 21.712-21.712 11.969 0 21.712 9.733 21.712 21.712 0 11.968-9.743 21.712-21.712 21.712"
            />
            <path
              fill="url(#gradient1)"
              d="M95.221 150.452a10.79 10.79 0 0 0-10.802 10.802c0 5.963 4.829 10.802 10.802 10.802 5.963 0 10.802-4.839 10.802-10.802 0-5.973-4.839-10.802-10.802-10.802"
            />
          </svg>
        </header>
        <h3 className="mx-auto text-center max-w-screen-xl mt-5 font-bold tracking-tight text-[clamp(1rem,5vw,5rem)] text-pretty leading-tight px-2">
          A <span className="text-[#acfa70]">component UI library</span> for{" "}
          <span className="text-[#00a3a4]">React</span> &{" "}
          <span className="text-[#00d493]">Next.js</span> applications.
        </h3>
        <div className="h-[200svh]">
          <ul className="grow grid grid-cols-1  place-content-center max-w-3xl mx-auto gap-10 p-4 min-h-full">
            <Card is="li" className="flex flex-col gap-2">
              <Button>Button!</Button>
              <Button disabled>Button!</Button>
              <Button variant="outline">Button!</Button>
              <Button variant="outline" disabled>
                Button!
              </Button>
            </Card>
            <li>
              <Accordion>
                <Panel title="Title of panel" label="panel1">
                  One panel
                </Panel>
                <Panel title="Two Title of panel" label="panel2">
                  test
                </Panel>
                <Panel title="Three Title of panel" label="panel3">
                  test
                </Panel>
              </Accordion>
            </li>
            <li className="flex flex-col gap-4">
              <Input label="Form Label" placeholder="Give me text" />
              <Input label="Form Label" disabled placeholder="Give me text" />
              <Input label="Form Label" readOnly placeholder="Give me text" />
            </li>
            <li className="flex flex-col gap-5">
              <Heading is="h1">
                This is for component and layout headings.
              </Heading>
              <Heading>This is for component and layout headings.</Heading>
              <Text>
                This is for short paragraphs with no more than four lines. Use
                in expressive components, such as stand alone links and
                transitional messages
              </Text>
            </li>
            <li className="mb-5">
              <Button onClick={() => setModalOpen((prevState) => !prevState)}>
                Open modal
              </Button>

              <Modal
                header={<Heading>Modal Title</Heading>}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                footer={
                  <footer className="flex flex-col gap-2">
                    <Button>Button</Button>
                    <Button autoFocus variant="outline">
                      Button
                    </Button>
                  </footer>
                }
              >
                <Text className="mb-5">
                  This is a short question or description of what the user needs
                  to do. Your copy should not be very long and it should be
                  actionable.
                </Text>
              </Modal>
            </li>
            <li className="mb-5">
              {alertVariants.map((variant) => (
                <Alert
                  key={variant}
                  variant={variant as (typeof alertVariants)[number]}
                  title="Alert Title"
                  className="mb-4"
                >
                  <p>Alert Description</p>
                </Alert>
              ))}
            </li>
          </ul>
        </div>
      </SidebarPage>
    </SidebarWrapper>
  );
}
