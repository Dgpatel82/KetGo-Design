import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import FilterTabs from "./components/FilterTabs";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import ProjectsSkeletonLoader from "./components/ProjectsSkeletonLoader";

const ProjectsGallery = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Mock categories for filter tabs
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "interior", name: "Interior Design" },
    { id: "landscape", name: "Landscape" },
  ];

  // Mock projects data
  const mockProjects = [
    {
      id: 1,
      title: "Modern Lakeside Villa",
      category: "residential",
      year: 2023,
      location: "Lake Tahoe, California",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "A stunning modern villa with panoramic lake views, featuring floor-to-ceiling windows, sustainable materials, and seamless indoor-outdoor living spaces. The design prioritizes energy efficiency with solar panels and smart home technology.",
      client: "Private Client",
      architect: "Sarah Johnson",
      area: "4,500 sq ft",
      status: "Completed"
    },
    {
      id: 2,
      title: "Urban Office Tower",
      category: "commercial",
      year: 2022,
      location: "Downtown Seattle, Washington",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "A 32-story commercial tower with a distinctive glass facade that maximizes natural light while minimizing heat gain. The building features flexible office spaces, collaborative zones, and a rooftop garden. LEED Platinum certified with rainwater harvesting and energy-efficient systems.",
      client: "Horizon Development Group",
      architect: "Michael Chen & Associates",
      area: "245,000 sq ft",
      status: "Completed"
    },
    {
      id: 3,
      title: "Minimalist Apartment Renovation",
      category: "interior",
      year: 2023,
      location: "Brooklyn, New York",
      thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Complete renovation of a pre-war apartment featuring custom built-ins, restored original hardwood floors, and a modernized open floor plan. The design emphasizes clean lines, natural materials, and thoughtful storage solutions to maximize the compact urban space.",
      client: "Private Client",
      architect: "Emma Rodriguez Interior Design",
      area: "1,200 sq ft",
      status: "Completed"
    },
    {
      id: 4,
      title: "Coastal Community Center",
      category: "commercial",
      year: 2022,
      location: "Santa Barbara, California",
      thumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      description: "A multi-purpose community center designed to withstand coastal conditions while providing flexible spaces for local events, classes, and gatherings. The building incorporates natural ventilation, durable materials, and a design inspired by local maritime heritage.",
      client: "City of Santa Barbara",
      architect: "Coastal Architecture Partners",
      area: "18,500 sq ft",
      status: "Completed"
    },
    {
      id: 5,
      title: "Hillside Eco Retreat",
      category: "residential",
      year: 2021,
      location: "Aspen, Colorado",
      thumbnail: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      description: "A sustainable mountain home that blends into its natural surroundings with a green roof, rammed earth walls, and passive solar design. The residence features geothermal heating, triple-glazed windows, and locally sourced materials throughout.",
      client: "Private Client",
      architect: "Green Mountain Architects",
      area: "3,800 sq ft",
      status: "Completed"
    },
    {
      id: 6,
      title: "Urban Park Redesign",
      category: "landscape",
      year: 2023,
      location: "Chicago, Illinois",
      thumbnail: "https://images.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_1280.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_1280.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pixabay.com/photo/2020/01/31/07/26/architect-4807435_1280.jpg?auto=compress&cs=tinysrgb&w=1200"
      ],
      description: "Revitalization of a 5-acre urban park featuring native plantings, sustainable stormwater management, accessible pathways, and flexible community spaces. The design incorporates public art installations and preserves mature trees while adding new recreational amenities.",
      client: "Chicago Park District",
      architect: "Urban Landscape Collaborative",
      area: "5 acres",
      status: "Completed"
    }
  ];

  // Simulate API fetch with loading state
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Set projects from mock data
        setProjects(mockProjects);
        setFilteredProjects(mockProjects);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory, projects]);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Handle project click to open modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  // Handle retry on error
  const handleRetry = () => {
    // Re-fetch projects
    setProjects([]);
    setFilteredProjects([]);
    setIsLoading(true);
    setError(null);
    
    // Simulate API fetch again
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(activeCategory === "all" 
        ? mockProjects 
        : mockProjects.filter(project => project.category === activeCategory));
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Projects Gallery | Architecture Website</title>
        <meta name="description" content="Explore our portfolio of architectural projects including residential, commercial, interior design, and landscape architecture." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header/>
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Our Projects
              </h1>
              <p className="text-dark-gray max-w-2xl mx-auto">
                Explore our diverse portfolio of architectural projects, showcasing innovation, 
                sustainability, and thoughtful design across various scales and typologies.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="mb-10">
              <FilterTabs 
                categories={categories} 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange} 
              />
            </div>
            
            {/* Projects Grid */}
            {isLoading ? (
              <ProjectsSkeletonLoader />
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="text-error mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{error}</h3>
                <p className="text-dark-gray mb-6">We couldn't load the projects. Please try again.</p>
                <button 
                  onClick={handleRetry}
                  className="btn btn-primary px-6 py-2"
                >
                  Retry
                </button>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-primary mb-2">No projects found</h3>
                <p className="text-dark-gray">
                  No projects match the selected category. Try selecting a different category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => handleProjectClick(project)} 
                  />
                ))}
              </div>
            )}
          </div>
        </main>
        
        <Footer />
        
        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
          />
        )}
      </div>
    </>
  );
};

export default ProjectsGallery;