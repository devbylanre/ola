'use client';

import {
  AccordionProvider,
  useAccordion,
} from '@/contexts/components/Accordion';
import React, { HTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

type AccordionProps = HTMLAttributes<HTMLDivElement> & { opened?: string };

export const Accordion = (props: AccordionProps) => {
  const { opened, className, ...rest } = props;

  return (
    <AccordionProvider opened={opened}>
      <div
        className={twMerge('checked:w-full', className)}
        {...rest}
      />
    </AccordionProvider>
  );
};

type AccordionItemProps = HTMLAttributes<HTMLDivElement>;

export const AccordionItem = (props: AccordionItemProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
};

type AccordionTriggerProps = HTMLAttributes<HTMLDivElement> & {
  item: string;
};

export const AccordionTrigger = (props: AccordionTriggerProps) => {
  const { className, item, ...rest } = props;
  const { accordions, setAccordions } = useAccordion();

  const handleToggle = () => {
    const hasItem = accordions.includes(item);

    if (hasItem) {
      return;
    }

    setAccordions([item]);
  };

  return (
    <div
      className={twMerge('w-full cursor-pointer', className)}
      onClick={() => handleToggle()}
      {...rest}
    />
  );
};

type AccordionContentProps = HTMLAttributes<HTMLDivElement> & {
  item: string;
};

export const AccordionContent = (props: AccordionContentProps) => {
  const { className, item, ...rest } = props;
  const { accordions } = useAccordion();

  if (!accordions.includes(item)) {
    return null;
  }

  return (
    <div
      className={className}
      {...rest}
    />
  );
};
