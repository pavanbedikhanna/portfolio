"use client";

import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: "M.S., Computer Science",
      school: "University at Buffalo, The State University of New York",
      graduation: "Expected Graduation: December 2024",
      coursework: [
        "Analysis of Algorithms",
        "OS",
        "Databases", 
        "Deep Learning",
        "Machine Learning",
        "Computer Vision"
      ]
    },
    {
      degree: "B.Tech in Electronics and Communication",
      school: "Jawaharlal Nehru Technological University Hyderabad",
      graduation: "Graduated: 2021",
      coursework: [
        "Data Structures",
        "Computer Networks",
        "Software Engineering",
        "Image Processing"
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-8">
      <h1 className="text-4xl font-bold text-[#146b51] mb-6">
        Education
      </h1>
      <div className="border-t border-zinc-500 mb-6"></div>
      
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-zinc-500"></div>

        {/* Education Items */}
        <div className="space-y-20">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-7px] top-[30px] h-4 w-4 bg-[#146b51] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Education Content */}
              <div className="bg-zinc-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#0feeb7] mb-3">
                  {edu.degree}
                </h2>
                <h3 className="text-lg text-gray-300 mb-2">
                  {edu.school}
                </h3>
                <p className="text-gray-400 mb-4">
                  {edu.graduation}
                </p>
                
                {/* Coursework Section */}
                <div className="mt-4">
                  <h4 className="text-[#0feeb7] font-medium mb-3">Coursework</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.coursework.map((course, idx) => (
                      <div 
                        key={idx}
                        className="bg-zinc-600 text-gray-300 px-3 py-2 rounded text-sm"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}