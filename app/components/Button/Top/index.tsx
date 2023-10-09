import {
  useAnimationControls,
  useScroll,
  motion,
  Variants,
} from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScroolTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0 },
};

export const ButtonToTop = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else return;
  }

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.2) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
  });

  return (
    <motion.button
      className="fixed bottom-12 lg:bottom-0 right-2 p-2 lg:p-4 text-primaryText lg:text-lg"
      variants={ScroolTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={() => scrollToTop()}
    >
      <FaArrowUp />
    </motion.button>
  );
};
