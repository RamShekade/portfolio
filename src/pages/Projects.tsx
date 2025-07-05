
import Navbar from '@/components/Navbar';

const Projects = () => {
  const projects = [
    {
      title: "Raksha – Women Safety & Surveillance System",
      description: "Built a real-time CCTV surveillance system for women's safety by analyzing CCTV frames and video footage using YOLO and CNN models, achieving 95% accuracy in detecting weapons, suspicious gestures, and gender.",
      highlights: [
        "Integrated an SOS alert feature into a women's safety app, using SMS to notify emergency contacts and WebSockets to send real-time alerts with live location to police dashboards, resulting in a 40% improvement in incident response time."
      ],
      technologies: ["Flutter", "Dart", "MERN Stack", "AI/ML", "YOLO", "CNN", "WebSockets"],
      category: "AI/ML & Mobile"
    },
    {
      title: "Vyom Assist – Smart Query Assistant for Banks",
      description: "Engineered a secure assistant for banking and financial planning, incorporating facial recognition for user authentication and processing text, voice, and video queries using Gemini and LangChain.",
      highlights: [
        "Streamlined service ticket generation and routing to bank staff dashboards for call and appointment scheduling, cutting manual workload by 60% and accelerating customer support."
      ],
      technologies: ["Gemini", "NLP", "LangChain", "MERN", "Flutter", "Facial Recognition"],
      category: "AI/ML & Finance"
    },
    {
      title: "InfluencerHub – Influencer Analytics & Brand Matching Platform",
      description: "Created a unified platform for influencers to manage multiple media accounts, collaborate with brands, and connect with freelancers for campaign execution.", 
      highlights: [
        "Integrated YouTube Data API with OAuth 2.0 for secure, real-time analytics, and constructed a MERN stack dashboard, increasing campaign targeting precision by 30%."
      ],
      technologies: ["React", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "YouTube API", "OAuth 2.0"],
      category: "Full Stack Web"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML & Mobile":
        return "text-purple-400 border-purple-500/30";
      case "AI/ML & Finance":
        return "text-green-400 border-green-500/30"; 
      case "Full Stack Web":
        return "text-cyan-400 border-cyan-500/30";
      default:
        return "text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-400">
              Innovative solutions combining AI/ML, full-stack development, and real-world impact
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0 flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm border ${getCategoryColor(project.category)} mb-4`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-green-400 font-semibold">Impact:</span> {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
              <p className="text-gray-400 mb-6">
                I'm constantly working on new innovative projects. Check back regularly or connect with me on GitHub to see my latest work.
              </p>
              <a
                href="https://github.com/ramshekade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>View GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
