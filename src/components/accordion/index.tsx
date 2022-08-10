import React, { useRef } from 'react';
import { AccordionPropsType } from './accordion.types';
import './accordion.scss';

const Accordion = (props: AccordionPropsType) => {
  const { accordionHeader, children } = props;

  const divRef = useRef<HTMLDivElement>(null);

  const toggleContent = (item: Element) => {
    const accordionDetail = item.querySelector('.accordion-content');

    if (item.classList.contains('accordion-active')) {
      item.classList.remove('accordion-active');

      accordionDetail?.removeAttribute('style');
    } else {
      accordionDetail?.setAttribute('style', `height: ${accordionDetail.scrollHeight}px`);
      item.classList.add('accordion-active');
    }
  };

  const toggleCollapse = () => {
    const accordionOpen = document.querySelector('.accordion-active');

    if (divRef.current) toggleContent(divRef.current);

    if (accordionOpen && accordionOpen !== divRef.current) {
      toggleContent(accordionOpen);
    }
  };

  return (
    <div className="accordion-container" ref={divRef}>
      <div className="accordion-header" onClick={toggleCollapse}>
        {accordionHeader}
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
