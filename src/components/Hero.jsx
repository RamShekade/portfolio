
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    
<section className="min-h-screen pt-32 md:pt-36 flex flex-col justify-start items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-900"></div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

{/* Profile Image */}
<div className="mb-8">
  <div className="w-32 h-45 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
    <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center">
      <img 
        src="assets/images/Passport_photo.jpeg" 
        alt="RS" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>


        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-cyan-400">Ram Shekade</span>

        </h1>
        
        {/* Subtitle */}
        <p  className="text-xl md:text-2xl text-gray-300 mb-12">
          Full Stack Developer & Software Engineer
        </p>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3">
            <span className="text-blue-400 font-medium">Smart India Hackathon Winner 2024</span>
          </div>
          <div className="bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3">
            <span className="text-green-400 font-medium">AI/ML Specialist</span>
          </div>
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-full px-6 py-3">
            <span className="text-purple-400 font-medium">MERN Stack Expert</span>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-400 leading-relaxed bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8">
            Innovative Software Engineer specializing in <span className="text-cyan-400 font-semibold">full-stack development</span>, 
            <span className="text-green-400 font-semibold"> AI-driven solutions</span>, and 
            <span className="text-purple-400 font-semibold"> mobile applications</span>. 
            <span className="text-yellow-400 font-semibold"> Winner of Smart India Hackathon 2024</span>, delivering scalable applications and optimizing 
            system efficiency with cutting-edge technologies.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg font-medium">
            <span>Explore My Work</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600 text-lg font-medium">
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
