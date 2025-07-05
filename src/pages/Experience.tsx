
import Navbar from '@/components/Navbar';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "ACCEL",
      period: "May 2025 – Present",
      location: "Remote",
      achievements: [
        "Collaborated in Agile teams to develop and deploy a production-ready React Native application, enabling gamers to discover cafes and register for tournaments, improving user engagement by 20%.",
        "Helped launch a live platform serving 5,000+ active users with real-time updates, responsive UI, and secure multi-device performance."
      ],
      technologies: ["React Native", "Agile", "Real-time Updates"]
    },
    {
      title: "Full-Stack Developer Intern", 
      company: "ZeltaClimb Solutions",
      period: "March 2025 – April 2025",
      location: "Remote",
      achievements: [
        "Designed and deployed a cloud-hosted GYM CRM using Node.js, Express, and MongoDB Atlas, with indexed data and distributed storage architecture to support real-time access across 20+ locations.",
        "Built a ReactJS dashboard with secure role-based access, supporting 50+ concurrent sessions, and improved multi-location data sync by 30%."
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "ReactJS", "Agile"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="text-cyan-400">Experience</span>
            </h1>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-white mb-2">{exp.title}</h2>
                    <h3 className="text-xl text-cyan-400 font-semibold mb-2">{exp.company}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-400 font-medium mb-1">{exp.period}</div>
                    <div className="text-gray-400 text-sm">{exp.location}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {tech}
                    </span>
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

export default Experience;
