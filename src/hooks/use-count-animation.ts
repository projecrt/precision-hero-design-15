import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
}

export const useCountAnimation = ({ 
  end, 
  duration = 1000, 
  start = 0,
  suffix = '',
  prefix = ''
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const progress = Math.min((currentTime - startTimeRef.current) / duration, 1);
      
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start]);

  return `${prefix}${count}${suffix}`;
};
