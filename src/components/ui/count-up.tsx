'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Robust parsing for "Prefix123Suffix"
  const stringValue = value.toString();
  const numberMatch = stringValue.match(/(\d+)/);
  const number = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  
  // Find where the number starts in the string
  const index = stringValue.indexOf(number.toString());
  const prefix = index > -1 ? stringValue.substring(0, index) : '';
  const suffix = index > -1 ? stringValue.substring(index + number.toString().length) : '';

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toFixed(0) + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix + "0" + suffix}</span>;
}
