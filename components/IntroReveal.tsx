"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroReveal() {
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          window.dispatchEvent(new Event("introFinished"));
        }
      });

      gsap.set(lineRef.current, { scaleY: 0, opacity: 0, transformOrigin: "center center" });
      gsap.set(textRef.current, { opacity: 0, scale: 0.9 });
      gsap.set([leftPanelRef.current, rightPanelRef.current], { xPercent: 0 });

      tl.to(lineRef.current, {
        scaleY: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
        delay: 0.3
      })
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "expo.out"
      }, "-=0.4")
      .to(textRef.current, {
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
        duration: 0.7,
        ease: "expo.in",
        delay: 0.4
      })
      .to(lineRef.current, {
        scaleY: 0,
        opacity: 0,
        duration: 0.6,
        ease: "expo.in"
      }, "-=0.4")
      .to(leftPanelRef.current, {
        xPercent: -100,
        duration: 1.3,
        ease: "expo.inOut"
      }, "-=0.2")
      .to(rightPanelRef.current, {
        xPercent: 100,
        duration: 1.3,
        ease: "expo.inOut"
      }, "<");
    });

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-10000 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 flex">
        <div ref={leftPanelRef} className="w-1/2 h-full bg-[#0b0613] border-r border-[#3e2a63]" />
        <div ref={rightPanelRef} className="w-1/2 h-full bg-[#0b0613] border-l border-[#3e2a63]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={lineRef} className="absolute h-62.5 w-px bg-linear-to-b from-transparent via-[#8b5cf6] to-transparent" />
        <div ref={textRef} className="flex items-center justify-center border border-[#3e2a63] bg-[#120a1f] px-6 py-4 shadow-[5px_5px_0_0_rgba(42,20,83,0.9)]">
          <h1 className="font-heading text-4xl md:text-6xl text-[#e9e7ff] uppercase tracking-[0.2em] text-center">
            AMETHYST
          </h1>
        </div>
      </div>
    </div>
  );
}
