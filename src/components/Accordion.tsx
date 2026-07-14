import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../types';

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const triggerId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div className={`accordion-item${isOpen ? ' open' : ''}`} key={item.q}>
            <h3 className="accordion-heading">
              <button
                type="button"
                id={triggerId}
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <ChevronDown className="accordion-chevron" size={18} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={triggerId} className="accordion-panel">
              <div className="accordion-panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
