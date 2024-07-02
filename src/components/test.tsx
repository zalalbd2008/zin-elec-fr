'use client';
import {
  useAnimate,
  useInView,
  motion,
} from 'framer-motion';
import { useEffect } from 'react';

export function Test() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    animate(scope.current, {
      opacity: 0,
      transition: { duration: 1 },
      delay: 9000,
    });
    if (isInView) {
      animate(scope.current, {
        opacity: 1,
        delay: 90000,
        transition: {
          duration: 7,
        },
      });
    }
  }, [isInView]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <ul ref={scope}>
      <li >work</li>
      <li>work</li>
      <li>work</li>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <h3>work</h3>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={item}  />
        <motion.li variants={item}  />
      </motion.ul>
    </ul>
  );
}
