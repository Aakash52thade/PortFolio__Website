"use client";

import React from "react";
import Image from "next/image";

interface EducationProps {
  id: number;
  img: string;
  school: string;
  date: string;
  desc: string;
  degree: string;
}

interface EducationCardProps {
  education: EducationProps;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="group w-full max-w-2xl bg-black-200 border border-white/10 rounded-xl p-6 transition-all duration-300 ease-in-out hover:border-purple/50 hover:shadow-xl hover:shadow-purple/20 hover:-translate-y-1">
      {/* Top Section - Image and Basic Info */}
      <div className="flex gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-black-300">
            {education.img ? (
              <Image
                src={education.img}
                alt={education.school}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 48px, 56px"
                unoptimized // works for external URLs & base64 data
              />
            ) : (
              // Default fallback when no image
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple/20 to-purple/40 rounded-lg">
                <span className="text-purple text-xl font-bold">
                  {education.school.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg md:text-xl leading-tight mb-1">
            {education.school}
          </h3>
          <p className="text-white-200 font-medium text-sm md:text-base mb-1">
            {education.degree}
          </p>
          <p className="text-white-100 text-xs md:text-sm">{education.date}</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-white-100 text-sm md:text-base leading-relaxed">
        <p className="line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {education.desc}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
