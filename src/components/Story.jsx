import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Rounded from "./Rounded";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);
  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,

      ease: "power1.inOut",
    });
  };
  const handleMousemove = (e) => {
    const element = frameRef.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col size-full items-center py-10 pb-24">
        <p className="font-general  text-sm uppercase md:text-[10px]">
          The Multiversal IP World
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of  <br/>a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none relative z-10 mix-blend-difference "
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMousemove}
                />
              </div>
            </div>
            <Rounded />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:justify-end md:-mt-64 md:me-44">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-violet-50 text-center font-circular-web md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
                id={"realm-button"}
                title={"Discover prologue"}
                containerClass={"mt-5"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
