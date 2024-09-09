"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemoTestimonials() {
  const images = [
    "/testimonials/hero/32.gif",
    "/testimonials/hero/17.gif",
    "/testimonials/hero/3.gif",
    "/testimonials/hero/4.gif",
    "/testimonials/hero/5.gif",
    "/testimonials/hero/6.gif",
    "/testimonials/hero/7.gif",
    "/testimonials/hero/8.gif",
    "/testimonials/hero/9.gif",
    "/testimonials/hero/11.gif",
    "/testimonials/hero/12.gif",
    "/testimonials/hero/13.gif",
    "/testimonials/hero/14.gif",
    "/testimonials/hero/15.gif",
    "/testimonials/hero/16.gif",
  
  ];
  return (
    <ImagesSlider className="h-[91vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="text-white header mb-6 capitalize text-center">
          Let our <span className="text-university-yellow">Impact</span> speaks for itself
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
