"use client";

import { Accordion, Panel } from "@chameleon-kit/ui/Accordion";
import { Button } from "@chameleon-kit/ui/Button";
import { Card } from "@chameleon-kit/ui/Card";
import { Heading } from "@chameleon-kit/ui/Heading";
import { Input } from "@chameleon-kit/ui/Input";
import { Modal } from "@chameleon-kit/ui/Modal";
import { Text } from "@chameleon-kit/ui/Text";
import { useState } from "react";

function AccordionContainer({
  defaultIsOpen = [],
  defaultIsOpenSingle = null,
  toggleMode = "all",
}: {
  defaultIsOpen?: Array<string>;
  toggleMode?: "all" | "single";
  defaultIsOpenSingle?: string | null;
}) {
  const [isOpenSingle, setIsOpenSingle] = useState(defaultIsOpenSingle);
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  function handleClick(value: string) {
    if (toggleMode === "all") {
      setIsOpen((prevState) => {
        if (prevState.includes(value)) {
          return prevState.filter((item) => item !== value);
        }

        return [...prevState, value];
      });
    }
    if (toggleMode === "single") {
      setIsOpenSingle((prevState) => {
        return prevState === value ? null : value;
      });
    }
  }

  return (
    <Accordion>
      <Panel
        title="Title of panel"
        label="panel1"
        isOpen={isOpen.includes("panel1") || isOpenSingle === "panel1"}
        onClick={() => handleClick("panel1")}
      >
        One panel
      </Panel>
      <Panel
        title="Two Title of panel"
        label="panel2"
        isOpen={isOpen.includes("panel2") || isOpenSingle === "panel2"}
        onClick={() => handleClick("panel2")}
      >
        test
      </Panel>
      <Panel
        title="Three Title of panel"
        label="panel3"
        isOpen={isOpen.includes("panel3") || isOpenSingle === "panel3"}
        onClick={() => handleClick("panel3")}
      >
        test
      </Panel>
      <Panel
        title="Four Title of panel"
        label="panel4"
        isOpen={isOpen.includes("panel4") || isOpenSingle === "panel4"}
        onClick={() => handleClick("panel4")}
      >
        test
      </Panel>
    </Accordion>
  );
}

export function Homepage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ul className="grow grid grid-cols-1 sm:grid-cols-2 place-content-center max-w-3xl mx-auto gap-10 p-4 min-h-full">
      <Card is="li" className="flex flex-col gap-2">
        <Button>Button!</Button>
        <Button disabled>Button!</Button>
        <Button variant="outline">Button!</Button>
        <Button variant="outline" disabled>
          Button!
        </Button>
      </Card>
      <li>
        <AccordionContainer />
      </li>
      <li className="flex flex-col gap-4">
        <Input label="Form Label" placeholder="Give me text" />
        <Input label="Form Label" disabled placeholder="Give me text" />
        <Input label="Form Label" readOnly placeholder="Give me text" />
      </li>
      <li className="flex flex-col gap-5">
        <Heading is="h1">This is for component and layout headings.</Heading>
        <Heading>This is for component and layout headings.</Heading>
        <Text>
          This is for short paragraphs with no more than four lines. Use in
          expressive components, such as stand alone links and transitional
          messages
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
            This is a short question or description of what the user needs to
            do. Your copy should not be very long and it should be actionable.
          </Text>
        </Modal>
      </li>
    </ul>
  );
}
