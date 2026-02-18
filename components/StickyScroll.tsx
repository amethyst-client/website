"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StickyScroll() {
    const stickyRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": () => {
                    const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]");

                    if (scenes.length > 0) {
                        gsap.set(scenes, { autoAlpha: 0, y: 18 });
                        gsap.set(scenes[0], { autoAlpha: 1, y: 0 });
                    }

                    if (stickyRef.current && scenes.length > 1) {
                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: stickyRef.current,
                                start: "top top",
                                end: `+=${scenes.length * 340}`,
                                scrub: 0.6,
                                pin: true,
                            },
                        });

                        const step = 1.1;
                        scenes.forEach((el, index) => {
                            if (index === 0) return;
                            tl.to(scenes[index - 1], { autoAlpha: 0, y: -12, duration: 0.5 }, index * step);
                            tl.to(el, { autoAlpha: 1, y: 0, duration: 0.5 }, index * step);
                        });
                    }
                },
                "(max-width: 1023px)": () => {
                    const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]");
                    gsap.set(scenes, { autoAlpha: 1, y: 0 });
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={stickyRef} className="relative -mt-12" id="features">
            <div className="mx-auto w-[min(92vw,1400px)] px-2 pb-32 pt-20 sm:px-6">
                <div className="relative min-h-[70vh] lg:min-h-[80vh]">
                    <div className="space-y-6 lg:absolute lg:left-0 lg:top-[18%] lg:max-w-xl" data-scene>
                        <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Scene 1</p>
                        <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                            Performance first.
                        </h2>
                        <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                            Optimized rendering and lightweight mods.
                        </p>
                    </div>
                    <div className="space-y-6 lg:absolute lg:left-0 lg:top-[18%] lg:max-w-xl" data-scene>
                        <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Scene 2</p>
                        <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                            Clean interface.
                        </h2>
                        <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                            Simple HUD and menus that stay out of the way.
                        </p>
                    </div>
                    <div className="space-y-6 lg:absolute lg:left-0 lg:top-[18%] lg:max-w-xl" data-scene>
                        <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Scene 3</p>
                        <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                            Actively developed.
                        </h2>
                        <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                            More features and modules coming soon.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute right-[8%] top-[20%] hidden lg:block">
                <div className="flex flex-col gap-6 text-right">
                    <div className="text-[clamp(3rem,6vw,5.125rem)] font-heading uppercase tracking-[-0.03em] text-white/10">
                        AMETHYST
                    </div>
                    <div className="h-px w-48 bg-white/10" />
                    <div className="text-[clamp(2.4rem,5vw,4rem)] font-heading uppercase tracking-[-0.03em] text-white/8">
                        CLIENT
                    </div>
                </div>
            </div>
        </section>
    );
}
