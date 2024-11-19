import React, { ReactNode } from "react";

// Define prop types for Accordion component
interface AccordionProps {
  title: string;
  children: ReactNode; // ReactNode allows any valid React child (string, number, elements, etc.)
  isActive: boolean;
  onShow: () => void; // Function type for onShow
}

export default function Accordion({
  title,
  children,
  isActive,
  onShow,
}: AccordionProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
