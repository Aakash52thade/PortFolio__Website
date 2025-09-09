"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
// Also install this npm i --save-dev @types/react-lottie
import Lottie from 'lottie-react';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../ui/MagicButton";

// ... rest of your BentoGrid code


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const Frontend = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React.js", "Next.js"];
  const Backend = ["Express.js", "Node.js", "Java", "MongoDB", "SQL", "Redis"];
  const Tools = ["Postman", "Git", "Docker", "AWS", "Figma"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "akashbawanthade02@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Tech stack organized layout */}
          {id === 3 && (
            <div className="flex flex-col h-full w-full">
              {/* Header */}
              <div className="mb-4">
                <div className="font-sans font-extralight text-sm text-[#C1C2D3] mb-2">
                  {description}
                </div>
                <div className="font-sans text-lg lg:text-2xl font-bold text-white">
                  {title}
                </div>
              </div>
              
              {/* Tech Stack Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {/* Frontend Section */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                    Frontend
                  </h3>
                  <div className="space-y-2">
                    {Frontend.map((item, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 text-xs lg:text-sm rounded-lg text-center bg-[#10132E] text-[#C1C2D3] border border-white/[0.1] hover:border-white/[0.3] transition-colors duration-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Section */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                    Backend
                  </h3>
                  <div className="space-y-2">
                    {Backend.map((item, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 text-xs lg:text-sm rounded-lg text-center bg-[#10132E] text-[#C1C2D3] border border-white/[0.1] hover:border-white/[0.3] transition-colors duration-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Section */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                    Tools
                  </h3>
                  <div className="space-y-2">
                    {Tools.map((item, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 text-xs lg:text-sm rounded-lg text-center bg-[#10132E] text-[#C1C2D3] border border-white/[0.1] hover:border-white/[0.3] transition-colors duration-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* For the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Default layout for other cards */}
          {id !== 3 && (
            <>
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
              </div>

              <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                {title}
              </div>
            </>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes subtle-glow {
          0% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.1); }
          100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.2), 0 0 40px rgba(6, 182, 212, 0.1); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};