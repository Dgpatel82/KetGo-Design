import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Button from "../../components/ui/Button";
import Homeimg from "../../assets/images/homeimg.jpg";
import Image from "../../components/AppImage";
import ProjectCard from "./components/ProjectCard";

const Homepage = () => {
  // Mock data for featured projects
  const featuredProjects = [
    {
      id: 1,
      name: "Modern Minimalist Villa",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "Los Angeles, CA"
    },
    {
      id: 2,
      name: "Urban Office Complex",
      type: "Commercial",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "New York, NY"
    },
    {
      id: 3,
      name: "Sustainable Community Center",
      type: "Public",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "Portland, OR"
    },
    {
      id: 4,
      name: "Luxury Waterfront Residence",
      type: "Residential",
      image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Miami, FL"
    },
    {
      id: 5,
      name: "Contemporary Art Museum",
      type: "Cultural",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      location: "Chicago, IL"
    },
    {
      id: 6,
      name: "Eco-Friendly Office Tower",
      type: "Commercial",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Seattle, WA"
    }
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "Architectural Design",
      description: "Innovative and functional designs tailored to your vision and requirements.",
      icon: "PenTool"
    },
    {
      id: 2,
      title: "Interior Design",
      description: "Creating beautiful, functional spaces that reflect your style and needs.",
      icon: "Layers"
    },
    {
      id: 3,
      title: "Urban Planning",
      description: "Comprehensive planning solutions for sustainable community development.",
      icon: "Map"
    },
    {
      id: 4,
      title: "Construction Management",
      description: "Expert oversight of your project from concept to completion.",
      icon: "HardHat"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header variant="transparent" />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src={"https://image.lexica.art/full_jpg/45cc0ae0-efd5-4305-9e65-6b38b5536d24"}
            alt="Modern architecture building"
            className="w-screen h-full object-cover object-right"
          />
          <div className="bg-black opacity-65 absolute z-0 inset-0 "></div>
        </div>

        <div className="relative z-10 container mx-10 px-4 h-full mt-7 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-teal-400 mb-4 animate-fade-in">
              Transforming Visions Into Architectural Reality
            </h1>
            <p className="text-xl text-white mb-8 animate-fade-in">
              Award-winning architectural firm specializing in innovative, sustainable design solutions for residential and commercial projects.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link to="/estimation-page">
                <Button variant="primary" size="lg">
                  Request Estimation
                </Button>
              </Link>
              <Link to="/projects-gallery">
                <Button variant="secondary" className="bg-gray-300 hover:bg-gray-400 hover:text-black" size="lg">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary">Featured Projects</h2>
              <p className="text-dark-gray mt-2">Explore our latest architectural achievements</p>
            </div>
            <Link to="/projects-gallery" className="hidden md:block">
              <Button variant="tertiary" icon="ArrowRight" iconPosition="right">
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projects-gallery">
              <Button variant="tertiary" icon="ArrowRight" iconPosition="right">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Our Services</h2>
            <p className="text-dark-gray mt-2 max-w-2xl mx-auto">
              Comprehensive architectural and design services tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-accent">
                    <Image
                      src={`/icons/${service.icon.toLowerCase()}.svg`}
                      alt={service.title}
                      className="w-6 h-6"
                    />
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-dark-gray">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/estimation-page">
              <Button variant="primary" size="lg">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-white text-opacity-90">
                Get a personalized estimation for your architectural needs
              </p>
            </div>
            <Link to="/estimation-page">
              <Button variant="primary" size="lg">
                Request Estimation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="full" />
    </div>
  );
};

export default Homepage;