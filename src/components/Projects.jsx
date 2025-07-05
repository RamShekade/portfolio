
const Projects = () => {
  const projects = [
    {
      title: "VoxGenie",
      year: "2025",
      description: "Enterprise-grade conversational AI platform for India's P2P lending sector, enabling human-like multilingual voice interactions. Built to streamline user education, automate onboarding, and improve customer experience in financial services.",
      technologies: ["Python", "Flutter", "Qdrant", "AWS", "RAG", "Socket.IO", "Langchain"],
      video: "/assets/videos/Raksha.mp4", // Using the uploaded image as placeholder
      category: "AI/ML & Mobile"
    },
    {
      title: "VyomAssist",
      year: "2025", 
      description: "Banking assistance application with AI-powered chatbot functionality and facial recognition authentication. Reduced customer support response time by 50%.",
      technologies: ["MERN Stack", "Flutter", "BERT", "Langchain", "Socket.io", "AI/ML","Deepface"],
      video: "/assets/videos/VyomAssist.mp4", // Using the uploaded image as placeholder
      category: "Financial Product"
    },
    {
      title: "Raksha – Women Safety & Surveillance System",
      year: "2024",
      description: "Built a real-time CCTV surveillance system for women's safety by analyzing CCTV frames and video footage using YOLO and CNN models, achieving 95% accuracy in detecting weapons, suspicious gestures, and gender.",
      technologies: ["Flutter", "Dart", "MERN Stack", "AI/ML", "YOLO", "CNN", "WebSockets"],
      video: "/assets/videos/Raksha.mp4", // Using the uploaded image as placeholder
      category: "AI/ML & Mobile"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Check out my latest work
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group">
            {/* Project Image */}
           <div className="aspect-video bg-slate-700/50 overflow-hidden">
  <video
    src={project.video}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

            
            {/* Project Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-400 font-medium">{project.year}</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 text-base">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600 hover:border-cyan-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Category Badge */}
              <div className="flex justify-between items-center">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  {project.category}
                </span>
                
                <div className="flex space-x-3">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Section */}
      <div className="text-center">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            I'm constantly working on new innovative projects. Check back regularly or connect with me on GitHub to see my latest work.
          </p>
          <a
            href="https://github.com/ramshekade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span>View GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
