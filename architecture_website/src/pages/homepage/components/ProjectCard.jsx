import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <Link to={`/projects-gallery/${project.id}`} className="block">
        <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
          <Image
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-heading font-semibold text-primary group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-dark-gray text-sm">{project.type}</span>
            <span className="mx-2 text-medium-gray">•</span>
            <div className="flex items-center text-dark-gray text-sm">
              <Icon name="MapPin" size={14} className="mr-1" />
              {project.location}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;