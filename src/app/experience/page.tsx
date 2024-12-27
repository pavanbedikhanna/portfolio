export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      year: "Aug 2024 – current",
      company: "Kaleida Health(Co-op) - Buffalo, New York",
      details: [
        "Analyzed, designed, and developed a responsive Distributed web application leveraging React, Tailwind CSS, Spring Boot, and MySQL.",
        "Maintained role-specific views with patient-focused translation and chat functionality, enhancing communication and increasing engagement by 20%.",
        "Built and optimized more than 20+ RESTful APIs and implemented end-to-end system improvements.",
      ],
    },
    {
      title: "Software Engineer",
      year: "Aug 2021 – July 2023",
      company: "Tata Consultancy Services - Hyderabad, Telangana",
      details: [
        "Spearheaded development of a web application using Angular, Express.js, Node.js, MySQL and PHP.",
        "Streamlined the development process by 10% using Azure DevOps for CI/CD pipelines.",
        "Spearheaded visual data tools, improving data accessibility and analysis efficiency, reducing manual labeling by 25%.",
        " Architected and implemented CI/CD pipelines on Azure, leading to a 20% reduction in deployment costs and significantly optimizing large-scale cross-functional ADAS data processing efficiency."
      ],
    },
    {
      title: "AIP Research Intern",
      year: "May 2021 – July 2021",
      company: "Tata Consultancy Services - Hyderabad, Telangana",
      details: [
        "Architected a web application using React, Spring Boot, and SQL for course management.",
        "Improved responsiveness across devices, increasing user engagement by 15%.",
      ],
    },
  ];

  return (
    <div className="container mx-auto mb-6 pb-10">
      <h1 className="text-4xl font-bold text-[#146b51] text-center">
        Experience
      </h1>
      <div className="border-t border-zinc-500 mt-2"></div>
      
      <div className="relative mt-8">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-zinc-500 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map(({ title, year, company, details }, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="h-4 w-4 bg-[#146b51] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>

                {/* Content */}
                <div className={`flex ${isEven ? 'justify-end' : 'justify-start'} w-1/2 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className={`max-w-md transition-transform duration-300 hover:scale-105 ${isEven ? 'text-right' : 'text-left'}`} >
                    <h3 className="text-xl font-semibold text-[#0feeb7]">{title}</h3>
                    <span className="text-sm text-zinc-400 block mt-1">{year}</span>
                    <h4 className="text-lg mt-2">{company}</h4>
                    <div className={`relative mt-4`}>
                      <ul className={`space-y-2 transition-all duration-300 ${isEven ? 'absolute right-0 text-left w-[400px]' : 'text-left w-[400px]'}`} >
                        {details.map((detail, i) => (
                          <li key={i} className="list-disc ml-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}