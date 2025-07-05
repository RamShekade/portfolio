
import { Github, Linkedin, Code, Cloud, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-cyan-400">RS</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Hi, I'm <span className="text-cyan-400">Ram Shekade</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          Full Stack Developer & Software Engineer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-4 py-2">
            <span className="text-cyan-400 font-semibold">Smart India Hackathon Winner 2024</span>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-lg px-4 py-2">
            <span className="text-green-400 font-semibold">AI/ML Specialist</span>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2">
            <span className="text-purple-400 font-semibold">MERN Stack Expert</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg text-gray-400 leading-relaxed">
            Innovative Software Engineer specializing in <span className="text-cyan-400 font-semibold">full-stack development</span>, 
            <span className="text-green-400 font-semibold"> AI-driven solutions</span>, and 
            <span className="text-purple-400 font-semibold"> cloud technologies</span>. 
            <span className="text-yellow-400 font-semibold"> Winner of Smart India Hackathon 2024</span>, delivering scalable applications and optimizing 
            system efficiency with cutting-edge technologies.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/ramshekade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-500"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ramshekade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
            <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Full Stack Development</h3>
            <p className="text-gray-400 text-sm">MERN Stack, React Native, Flutter</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
            <Cloud className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
            <p className="text-gray-400 text-sm">AWS, Cloudflare, REST APIs</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">AI/ML Integration</h3>
            <p className="text-gray-400 text-sm">YOLO, CNN, NLP, LangChain</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
