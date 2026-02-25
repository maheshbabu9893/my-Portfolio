import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.4) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function useCardReveal(threshold = 0.4) {
  const refs = useRef([]);
  const [visibleSet, setVisibleSet] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target);
            if (idx !== -1) {
              setVisibleSet((prev) => new Set([...prev, idx]));
              obs.unobserve(entry.target);
            }
          }
        });
      },
      { threshold },
    );

    refs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [threshold]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return { setRef, isVisible: (index) => visibleSet.has(index) };
}
