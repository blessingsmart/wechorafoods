import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const useSplideSlider = (selector) => {
  useEffect(() => {
    const splide = new Splide(selector, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount({ AutoScroll });

    // Clean up function
    return () => {
      splide.destroy();
    };
  }, []);
};

export default useSplideSlider;
