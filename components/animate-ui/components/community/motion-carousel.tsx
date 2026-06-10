'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type PropType<T = number> = {
  slides: T[];
  options?: EmblaOptionsType;
  renderSlide?: (slide: T, index: number, isActive: boolean) => React.ReactNode;
  slideClassName?: string;
  containerClassName?: string;
};

type EmblaControls = {
  selectedIndex: number;
  scrollSnaps: number[];
  prevDisabled: boolean;
  nextDisabled: boolean;
  onDotClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

type DotButtonProps = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (
  emblaApi: EmblaCarouselType | undefined,
): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, []);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel<T = number>(props: PropType<T>) {
  const { slides, options, renderSlide, slideClassName, containerClassName } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  React.useEffect(() => {
    if (!emblaApi) return;

    let autoplayId: ReturnType<typeof setInterval>;

    const startAutoplay = () => {
      stopAutoplay();
      autoplayId = setInterval(() => {
        emblaApi.scrollNext();
      }, 2000);
    };

    const stopAutoplay = () => {
      if (autoplayId) clearInterval(autoplayId);
    };

    startAutoplay();

    emblaApi
      .on('pointerDown', stopAutoplay)
      .on('pointerUp', startAutoplay)
      .on('select', startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi
        .off('pointerDown', stopAutoplay)
        .off('pointerUp', startAutoplay)
        .off('select', startAutoplay);
    };
  }, [emblaApi]);

  return (
    <div
      className={cn(
        "w-full mx-auto space-y-4 [--slide-height:9rem] sm:[--slide-height:13rem] md:[--slide-height:18rem] [--slide-spacing:1.5rem] [--slide-size:55%]",
        containerClassName
      )}
      style={{ maxWidth: 'var(--viewport-width, 100%)' }}
    >
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {slides.map((slide, index) => {
              const isActive = index === selectedIndex;

              return (
                <motion.div
                  key={index}
                  className={cn(
                    "mr-[var(--slide-spacing)] basis-[var(--slide-size)] w-[var(--slide-size)] flex-none flex min-w-0",
                    slideClassName ? slideClassName : "h-[var(--slide-height)]"
                  )}
                >
                  {renderSlide ? (
                    <motion.div
                      className="size-full"
                      initial={false}
                      animate={{
                        scale: 1,
                      }}
                      transition={transition}
                    >
                      {renderSlide(slide, index, isActive)}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="size-full flex items-center justify-center text-3xl md:text-5xl font-semibold select-none border-4 rounded-xl"
                      initial={false}
                      animate={{
                        scale: 1,
                      }}
                      transition={transition}
                    >
                      {Number(slide) + 1}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Left & Right fading overlays */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 lg:w-24 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 lg:w-24 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none z-20" />
      </div>

      <div className="flex justify-between items-center px-4">
        <Button size="icon" variant="outline" onClick={onPrev} disabled={prevDisabled}>
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap justify-end items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={`${index + 1}`}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button size="icon" variant="outline" onClick={onNext} disabled={nextDisabled}>
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-full border border-border bg-background hover:bg-muted text-foreground text-sm"
      animate={{
        width: selected ? 68 : 12,
        height: selected ? 28 : 12,
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? 'blur(0)' : 'blur(4px)',
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

export { MotionCarousel };

