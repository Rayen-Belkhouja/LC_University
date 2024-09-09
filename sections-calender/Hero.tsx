"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemoTestimonialsCalender() {
  const images = [
    "/testimonials/hero/31.gif",
    "/testimonials/hero/30.gif",
    "/testimonials/hero/29.gif",
    "/testimonials/hero/28.gif",
    "/testimonials/hero/27.gif",
    "/testimonials/hero/26.gif",
    "/testimonials/hero/25.gif",
    "/testimonials/hero/24.gif",
    "/testimonials/hero/23.gif",
    "/testimonials/hero/22.gif",
    "/testimonials/hero/21.gif",
    "/testimonials/hero/20.gif",
    "/testimonials/hero/19.gif",
    "/testimonials/hero/18.gif",
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
        Here Were <span className="text-university-yellow">Memories </span> Were Created
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
