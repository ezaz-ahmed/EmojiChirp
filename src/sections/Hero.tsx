import { useEffect, useMemo, useState } from 'react';
import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '@components/Button';

const Hero = () => {
  const texts = useMemo(
    () => [
      'Team Collaboration',
      'Screen Recording',
      'Feedback',
      'Transcription',
    ],
    []
  );

  const [captionText, setCaptionText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptionText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3 animate-text animate-text">
              {captionText}
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Incredibly easy
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Xorik simplifies collaboration with screen recordings, feedback,
              and transcriptions.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button aria-label="Try it now" icon="/images/zap.svg">
                Try it now
              </Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
