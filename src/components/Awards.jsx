
const Awards = () => {
  const awards = [
    {
      title: "Winner - Smart India Hackathon 2024",
      organization: "Government of India", 
      year: "2024",
      level: "National Level",
      description: "Led the winning team for solving P.S ID SIH1605 (Women Safety Analytics), demonstrating innovation in AI-driven safety solutions.",
      impact: "Recognized for outstanding problem-solving in women safety analytics",
      color: "yellow"
    },
    {
      title: "Top 5 Finalist - Idea Hackathon 2025",
      organization: "Industry Event",
      year: "2025", 
      level: "Industry Level",
      description: "Secured top 5 position in GITS Hackathon 2.0, demonstrating proficiency in cutting-edge technology solutions.",
      impact: "Recognition for technical excellence and innovative thinking",
      color: "purple"
    }
  ];

  const stats = [
    { label: "Major Competitions", value: "7+", color: "text-blue-400" },
    { label: "National Wins", value: "3", color: "text-green-400" },
    { label: "Teams Competed Against", value: "625+", color: "text-orange-400" },
    { label: "Success Rate", value: "100%", color: "text-purple-400" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Awards & <span className="text-cyan-400">Achievements</span>
        </h1>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Recognition for excellence in innovation, technical leadership, and problem-solving across national and international platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {awards.map((award, index) => (
          <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${award.color === 'yellow' ? 'bg-yellow-500/20' : 'bg-purple-500/20'}`}>
                  <span className="text-2xl">
                    {award.color === 'yellow' ? '🏆' : '🥉'}
                  </span>
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${award.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'}`}>
                    {award.year}
                  </span>
                </div>
              </div>
              <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                {award.level}
              </span>
            </div>

            <h2 className="text-xl font-bold text-white mb-3">{award.title}</h2>
            <h3 className="text-cyan-400 font-semibold mb-4">{award.organization}</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">{award.description}</p>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 font-medium text-sm">
                <span className="font-semibold">Impact:</span> {award.impact}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Competition Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
