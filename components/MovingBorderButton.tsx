"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-white  text-black text-md border-university-yellow "
      >
        Contact Us
      </Button>
    </div>
  );
}
