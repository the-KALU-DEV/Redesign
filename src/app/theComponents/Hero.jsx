"use client"

import { Button } from "../../components/ui/button";
import Image from "next/image";

export default function Hero ()  {
    const images = [
        { src: "/empowerment.png", text: "Empowerment" },
        { src: "/opportunity.png", text: "Opportunity" },
        { src: "/community.png", text: "Community" },
      ];

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <div className="flex gap-4 flex-col max-w-3xl">
                    <h1 className="text-5xl md:text-7xl tracking-tighter text-center font-regular">
                        Land Your Dream Tech Job Fast, EVEN In A Highly Competitive Job Market.
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                        Join Codetivite And Become The Employer’s  Favourite Techie
                    </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
                        {images.map((item, index) => (
                        <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                            <Image
                            src={item.src}
                            alt={item.text}
                            fill
                            className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-4 left-0 right-0 bg-opacity-50 text-white text-center py-2">
                            {item.text}
                        </div>
                    </div>
                    ))}
                    </div>
                    <div className="flex flex-row gap-3">
                    <Button size="lg" className="gap-4">
                        Get our Free Resources
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}