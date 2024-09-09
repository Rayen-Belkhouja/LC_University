"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Eb } from "@/constants";


export function DirectionAwareHoverDemo() {
    const PresidentImage = '/eb/haninedited.gif'
    return (
        
        <div className="flex flex-col gap-16 py-16 items-center justify-center">
            <DirectionAwareHover imageUrl={PresidentImage}>
                <p className="text-xl font-semibold">Hanin Nsiri</p>
                <p className="semiheader text-university-yellow">LCP</p>
                <p className="parag text-gray-200">hanin.nsiri@aiesec.net</p>
            </DirectionAwareHover>

            <div className="gap-10 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 ">
                {Eb.map((eb) => (
                    <DirectionAwareHover imageUrl={eb.image}>
                        <div className="text-xl font-semibold">{eb.name}</div>
                        <p className="semiheader text-university-yellow">{eb.position}</p>
                        <p className="parag text-gray-200">{eb.email}</p>
                    </DirectionAwareHover>
                ))}

            </div>
        </div>

    );
}
