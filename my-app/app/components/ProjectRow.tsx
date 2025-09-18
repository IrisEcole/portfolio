import React from "react";
import Image, { StaticImageData } from "next/image";


type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  demo?: string;
  github?: string;
};

type ProjectRowProps = {
  project: Project;
};

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => (
<div
  className={`
    flex flex-col md:flex-row justify-center items-center
    gap-20 mb-20 mx-auto  p-8 py-20 w-full
    ${project.id % 2 !== 0 ? " bg-white/30 w-full" : ""}
  `}
>
    <div className="md:w-1/2">
      <div className="relative w-full aspect-video rounded-lg shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-4xl"
          unoptimized
        />
      </div>
    </div>

    <div className="md:w-1/2">
      {project.demo ? (
        <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className=" sm:text-6xl md:text-7xl font-bold mb-2 inline-block underline hover:text-white/50"
        >
        {project.title}
        </a>

      ) : (
        <h3 className=" sm:text-6xl md:text-7xl font-bold mb-2">{project.title}</h3>
      )}

      <p className="text-gray-200 text-4xl mb-4 whitespace-pre-line">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 px-3 py-1 my-6 rounded-full sm:text-lg md:text-2xl font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            aria-label="GitHub Repository"
          >
                <svg
                className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.934.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.482A10.01 10.01 0 0022 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            <span className="sr-only">GitHub Repository</span>
          </a>
        )}
      </div>
    </div>
  </div>
);


export default ProjectRow;
