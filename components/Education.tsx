"use client";

import React from 'react';
import { education } from '@/data';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className="py-20" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-white-200 max-w-2xl mx-auto text-lg">
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {education.map((edu) => (
              <div key={edu.id} className="relative mb-8 md:mb-12 w-full flex justify-center">
                {/* Education Card Container */}
                <div className="w-full max-w-2xl">
                  <EducationCard education={edu} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;