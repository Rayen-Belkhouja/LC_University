"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingPartners } from "../components/ui/infinite-moving-partners";
import { Partner } from "@/constants";

export function InfiniteMovingPartnersDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingPartners
        items={Partner}
        direction="right"
        speed="slow"
      />
    </div>
  );
}



