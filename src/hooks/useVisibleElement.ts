import { MutableRefObject, useEffect, useRef, useState } from 'react';

type ElementType = HTMLElement | null;

const useVisibleComponent = <T extends ElementType>() => {
  const ref = useRef<T>(null) as MutableRefObject<T>;
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const isVisible = entries[0].isIntersecting;

      if (isVisible && !animationStarted) {
        setIsVisible(true);
        setAnimationStarted(true);
      }
    };

    const observer = new IntersectionObserver(handleVisibility, { threshold: 0.1 });
    const { current: currentRef } = ref;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
};

export default useVisibleComponent;
