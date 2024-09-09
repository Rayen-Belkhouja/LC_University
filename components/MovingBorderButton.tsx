"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-white dark:bg-slate-900 text-black text-md border-university-yellow   dark:border-slate-800"
      >
        Contact Us
      </Button>
    </div>
  );
}
