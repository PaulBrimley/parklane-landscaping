import { useEffect, useState, RefObject } from 'react';

export default function useParallaxEffect({ scrollRef, strength = 0 }: { scrollRef?: RefObject<HTMLElement>; strength: number }) {
  strength = Math.min(Math.max(strength, -1), 1);
  const [offset, setOffset] = useState({
    x: 0,
    y: 0
  });
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    function handleElementScroll() {
      const scrollX = scrollRef?.current?.scrollLeft ?? 0;
      const scrollY = scrollRef?.current?.scrollTop ?? 0;
      setLeft(scrollX);
      setTop(scrollY);
    }
    function handleWindowScroll() {
      const scrollX = window?.scrollX ?? 0;
      const scrollY = window?.scrollY ?? 0;
      setLeft(scrollX);
      setTop(scrollY);
    }
    const listenTo = scrollRef?.current;
    if (scrollRef?.current) {
      listenTo?.addEventListener('scroll', handleElementScroll);
      return () => {
        listenTo?.removeEventListener('scroll', handleElementScroll);
      };
    } else {
      window?.addEventListener('scroll', handleWindowScroll);
      return () => {
        window?.removeEventListener('scroll', handleWindowScroll);
      };
    }
  }, [scrollRef]);
  useEffect(() => {
    setOffset({
      x: left * strength,
      y: offset.y
    });
  }, [left, offset.y, strength]);
  useEffect(() => {
    setOffset({
      x: offset.x,
      y: top * strength
    });
  }, [top, offset.x, strength]);

  return { offset };
}
