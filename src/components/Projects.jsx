
const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Gym CRM System",
      category: "Full Stack Development",
      description: "Cloud-hosted CRM system with role-based access control and real-time data synchronization across multiple locations.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "AWS"],
      features: ["Multi-location sync", "Role-based access", "Real-time updates", "Cloud deployment"],
      link: "#",
      github: "#"
    },
    {
      title: "Smart India Hackathon Winner - Women Safety Analytics",
      category: "AI/ML Solution",
      description: "AI-driven safety analytics platform that won the national Smart India Hackathon 2024 competition.",
      technologies: ["Python", "AI/ML", "NLP", "Data Analytics", "React"],
      features: ["Real-time analytics", "AI predictions", "Safety alerts", "Data visualization"],
      link: "#",
      github: "#"
    },
    {
      title: "Gaming Cafe Platform",
      category: "Mobile Development",
      description: "React Native application connecting gamers with cafes for tournament registration and discovery.",
      technologies: ["React Native", "Node.js", "Real-time APIs", "Mobile UI"],
      features: ["Tournament registration", "Cafe discovery", "Real-time updates", "Multi-device support"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="text-cyan-400">Projects</span>
        </h1>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Showcasing innovative solutions that combine cutting-edge technology with real-world impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30 mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={project.link}
                className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-center transition-all duration-300 text-sm font-medium"
              >
                View Project
              </a>
              <a
                href={project.github}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-center transition-all duration-300 text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
