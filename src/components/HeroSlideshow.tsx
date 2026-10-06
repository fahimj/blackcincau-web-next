"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 5000;

// Fading background slideshow. Only the first image is in the initial HTML;
// the others are added just before they are first needed.
export function HeroSlideshow({ images }: { images: StaticImageData[] }) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const preload = setTimeout(() => setStarted(true), INTERVAL_MS / 2);
    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % images.length),
      INTERVAL_MS,
    );
    return () => {
      clearTimeout(preload);
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="hero-slides" aria-hidden="true">
      {images.map((image, index) =>
        index === 0 || started ? (
          <Image
            key={image.src}
            src={image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            placeholder="blur"
            className={`hero-slide${index === current ? " is-active" : ""}`}
          />
        ) : null,
      )}
    </div>
  );
}
