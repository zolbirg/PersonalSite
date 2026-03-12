import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useReducedMotion, animate } from 'framer-motion';

export default function AnimatedCounter({ target, suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduce) {
      if (ref.current) ref.current.textContent = target + suffix;
      return;
    }

    const controls = animate(motionValue, target, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.round(value) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, target, suffix, duration, shouldReduce, motionValue]);

  return <span ref={ref}>0{suffix}</span>;
}
