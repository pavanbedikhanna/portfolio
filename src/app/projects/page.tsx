"use client";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Historical document translation and restoration",
      description:
        "Built a document translation platform using Tesseract OCR, GPT-based translation, and image inpainting to maintain 95% visual accuracy of historical documents, deployed with Flask and React, improving handling documents with word count of 150 words.",
      image: "/images/historical_translate.png",
    },
    {
      title: "Contextual Text Generation using Transformers",
      description:
        "Designed a text generation LLM using LangChain achieving a BLEU score of 0.85 and a perplexity of 15.3, and built a React-Flask app generating 500,000+ words, boosting user engagement by 40%.",
      image: "/images/contextual.jpg",
    },
    {
      title: "Optimized Credit Score Classification",
      description:
        "Developed an ensemble model for(KNN, XG-Boost, Isolation Forest, and Random Forest)  using scikit-learn,matplotlib,Pandas achieving 86.59\% accuracy in credit score classification by integrating web-scraped financial data, and applied A/B testing to optimize performance and decision-making.",
      image: "/images/credit-score.jpg",
    },
    {
      title: "Optimizing Reading using Text Summarization",
      description:
        "Designed and implemented a text summarization app using React, Node.js, and Hugging Face Transformers. Created a custom model with 20% accuracy improvement, integrated REST API, and deployed on AWS EC2 with Docker.",
      image: "/images/text-summarization.jpg",
    },
    {
      title: "Smart FinTech Dashboard",
      description:
        "Developed a real-time FinTech trading platform with Chart.js, React, and REST APIs, handling up to 5,000 daily requests. Built a scalable backend with Node.js, RabbitMQ, and MongoDB, achieving 99% uptime.",
      image: "/images/fintech-dashboard.png",
    },
    {
      title: "Caffe Manager",
      description:
        "Developed a web application using Node.js, MySQL, React, and JavaScript to streamline café operations, featuring a responsive front-end that boosted user engagement by 15%.",
      image: "/images/caffe-manager.jpg",
    },
    {
      title: "Performance Analysis of GA, PSO & ABC Algo in DWT-SVD Watermarking",
      description:
        "Proposed an optimized digital watermarking method, with GA reducing computing time by 12% compared to PSO and 80% to ABC. Published and presented a paper on this at ICCR 2021, Mysore, India.",
      image: "/images/publication.jpg",
    },
  ];

  return (
    <div className="space-y-8 text">
      <h1 className="text-4xl font-bold mb-6 text-[#146b51]">Projects</h1>
      <div className="border-t border-zinc-500 mt-0 bg-[var(--background)]"></div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="group [perspective:1000px]">
      <div
        className={`relative h-96 w-full [transform-style:preserve-3d] transition-transform duration-500 ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute h-full w-full bg-[#26262b] shadow-md rounded-lg [backface-visibility:hidden] flex flex-col p-4">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-center text-[#0feeb7] mb-4">
            {title}
          </h3>
          <div className="flex-grow"></div>
          <button
            onClick={handleFlip}
            className="w-full bg-[#146b51] hover:text-[#26262b] px-4 py-2 rounded-lg hover:bg-[#0feeb7] transition-colors"
          >
            Know More
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute h-full w-full bg-[#26262b] shadow-md rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center p-6">
          <div className="flex-grow flex items-center">
            <p className="opacity-90 text-center">{description}</p>
          </div>
          <button
            onClick={handleFlip}
            className="w-full bg-[#146b51] hover:text-[#26262b] px-4 py-2 rounded-lg hover:bg-[#0feeb7] transition-colors mt-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}