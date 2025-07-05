
import Navbar from '@/components/Navbar';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "cyan",
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend", 
      color: "green",
      skills: ["Node.js", "Express.js", "Python", "Flask", "Hono", "RESTful APIs"]
    },
    {
      title: "Database",
      color: "purple", 
      skills: ["MongoDB", "MySQL", "DBMS", "Database Design", "Query Optimization"]
    },
    {
      title: "DevOps & Cloud",
      color: "yellow",
      skills: ["AWS", "Cloudflare Workers", "D1 SQL", "R2 Storage", "OAuth 2.0", "Scalable Architecture"]
    },
    {
      title: "Mobile Development",
      color: "blue",
      skills: ["React Native", "Flutter", "Dart", "Cross-platform Development"]
    },
    {
      title: "AI/ML Tools",
      color: "pink",
      skills: ["NLP", "BERT", "YOLO", "CNN", "Scikit-learn", "Gemini", "LangChain"]
    },
    {
      title: "Development Tools",
      color: "orange",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Tkinter"]
    },
    {
      title: "Software Engineering",
      color: "indigo",
      skills: ["System Design", "Distributed Systems", "Data Structures & Algorithms", "OOP", "Fault Tolerance", "SDLC"]
    }
  ];

  const certifications = [
    {
      title: "AWS Academy Graduate",
      provider: "Amazon Web Services",
      icon: "aws"
    },
    {
      title: "Introduction to Cybersecurity", 
      provider: "Cisco Networking Academy",
      icon: "cisco"
    },
    {
      title: "Google AI/ML Virtual Internship",
      provider: "Google",
      icon: "google"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: "text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50",
      green: "text-green-400 border-green-500/30 hover:border-green-500/50", 
      purple: "text-purple-400 border-purple-500/30 hover:border-purple-500/50",
      yellow: "text-yellow-400 border-yellow-500/30 hover:border-yellow-500/50",
      blue: "text-blue-400 border-blue-500/30 hover:border-blue-500/50",
      pink: "text-pink-400 border-pink-500/30 hover:border-pink-500/50",
      orange: "text-orange-400 border-orange-500/30 hover:border-orange-500/50",
      indigo: "text-indigo-400 border-indigo-500/30 hover:border-indigo-500/50"
    };
    return colorMap[color] || "text-gray-400 border-gray-500/30";
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyan-400">🎯</span> Professional Certifications & Training
            </h1>
            <p className="text-xl text-gray-400">
              Continuous learning and skill development through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl">
                      {cert.icon === 'aws' && '☁️'}
                      {cert.icon === 'cisco' && '🔒'}
                      {cert.icon === 'google' && '🤖'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-cyan-400 font-medium">{cert.provider}</p>
                  <a href="#" className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm">
                    View Certificate →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical Skills Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`bg-slate-800/30 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 ${getColorClasses(category.color)}`}>
                <h3 className={`text-xl font-bold mb-4 ${category.color === 'cyan' ? 'text-cyan-400' : category.color === 'green' ? 'text-green-400' : category.color === 'purple' ? 'text-purple-400' : category.color === 'yellow' ? 'text-yellow-400' : category.color === 'blue' ? 'text-blue-400' : category.color === 'pink' ? 'text-pink-400' : category.color === 'orange' ? 'text-orange-400' : 'text-indigo-400'}`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 text-sm py-1 px-3 bg-slate-700/50 rounded-md">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
