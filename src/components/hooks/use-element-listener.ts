import { RefObject, useEffect } from 'react';

export function useElementListener<
   K extends keyof HTMLElementEventMap,
   T extends HTMLElement,
>
(
  eventName: K,
  element: RefObject<T>,
  listener: (evt: HTMLElementEventMap[K]) => void
) {
  useEffect(() => {
    const domElement = element.current;
    if (! domElement) {
      return;
    }

    domElement.addEventListener(eventName, listener);

    return () => {
      domElement.removeEventListener(eventName, listener);
    };
  }, [element, eventName, listener]);
}
