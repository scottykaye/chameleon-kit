"use client";

import { Accordion, Panel } from "@chameleon-kit/ui/Accordion";
import { Alert } from "@chameleon-kit/ui/Alert";
import { Button } from "@chameleon-kit/ui/Button";
import { Card } from "@chameleon-kit/ui/Card";
import { Heading } from "@chameleon-kit/ui/Heading";
import { Input } from "@chameleon-kit/ui/Input";
import { Modal } from "@chameleon-kit/ui/Modal";
import { Text } from "@chameleon-kit/ui/Text";
import { useState } from "react";

const alertVariants = [
  "default",
  "info",
  "destructive",
  "warning",
  "success",
] as const;

export function Sandbox() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
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
  );
}
