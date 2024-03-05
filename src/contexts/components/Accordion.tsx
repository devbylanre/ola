'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type AccordionContext = {
  accordions: string[];
  setAccordions: Dispatch<SetStateAction<string[]>>;
};

type AccordionProviderProps = {
  opened?: string;
  children: ReactNode;
};

const accordionContext = createContext<AccordionContext | null>(null);

export const AccordionProvider = ({
  children,
  opened,
}: AccordionProviderProps) => {
  const [accordions, setAccordions] = useState<string[]>([''] || [opened]);

  return (
    <accordionContext.Provider
      value={{
        accordions,
        setAccordions,
      }}
    >
      {children}
    </accordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(accordionContext);

  if (!context) throw Error('Accordion Provider is not available');

  return context;
};
