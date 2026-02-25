import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Triggers a reveal animation when the element scrolls into view.
 * Returns a ref to attach to the container and a boolean for visibility.
 */
export function useScrollReveal(
  threshold: number = 0.15,
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/**
 * Observes individual cards so each one animates in
 * independently as it enters the viewport.
 * Returns a ref callback — attach it to each card element.
 */
export function useStaggerReveal(): (element: HTMLElement | null) => void {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const attachRef = useCallback((element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  return attachRef;
}
