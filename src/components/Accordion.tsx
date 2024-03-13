'use client';

import {
  AccordionProvider,
  useAccordion,
} from '@/contexts/components/Accordion';
import React, { HTMLAttributes, ReactNode, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

type AccordionProps = { opened?: string; children: ReactNode };

export const Accordion = (props: AccordionProps) => {
  const { opened, children } = props;

  return <AccordionProvider opened={opened}>{children}</AccordionProvider>;
};

// type AccordionListProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
//   children: (isActive: (item: string) => boolean) => ReactNode | ReactNode;
// };

// export const AccordionList = (props: AccordionListProps) => {
//   const { className, children, ...rest } = props;
//   const { accordions } = useAccordion();

//   const isActive = (item: string) => accordions.includes(item);

//   return (
//     <div
//       className={twMerge('w-full block', className)}
//       {...rest}
//     >
//       {typeof children === 'function' ? children(isActive) : children}
//     </div>
//   );
// };

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
