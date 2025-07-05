
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Software Engineer | Full Stack Developer | AI/ML Specialist
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-cyan-400 rounded mr-4"></span>
                Professional Summary
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="text-cyan-400 font-semibold">Software Engineer</span> and{' '}
                  <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with 3+ years of experience in{' '}
                  <span className="text-blue-400">React.js, Node.js, Angular, Flutter, Python, and AI/ML technologies</span>. 
                  Currently pursuing <span className="text-green-400 font-semibold">B.E. in Information Technology</span> with{' '}
                  <span className="text-green-400 font-semibold">8.24 CGPA</span>.
                </p>
                <p>
                  Winner of <span className="text-yellow-400 font-semibold">Smart India Hackathon 2024</span> and finalist in 8+ hackathon competitions. 
                  I design and develop scalable web applications, mobile solutions with{' '}
                  <span className="text-purple-400">Flutter</span>, and implement{' '}
                  <span className="text-pink-400 font-semibold">AI-driven solutions</span> that address real-world business challenges.
                </p>
                <p>
                  My expertise includes <span className="text-orange-400 font-semibold">MERN Stack development</span>,{' '}
                  <span className="text-blue-400 font-semibold">RESTful API design</span>,{' '}
                  <span className="text-green-400 font-semibold">database optimization</span>, and{' '}
                  <span className="text-cyan-400 font-semibold">cloud infrastructure</span> on AWS and Cloudflare. 
                  I focus on creating user-centric applications that enhance business growth and operational efficiency.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-cyan-400 rounded mr-4"></span>
                Professional Highlights
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                  <div className="text-sm text-gray-400">Hackathon Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">8+</div>
                  <div className="text-sm text-gray-400">Hackathon Finals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                  <div className="text-sm text-gray-400">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-cyan-400 rounded mr-4"></span>
              Education
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-xl font-semibold text-white">Bachelor of Engineering in Information Technology</h3>
                <p className="text-cyan-400 font-medium">Datta Meghe College of Engineering</p>
                <p className="text-gray-400">2022 - 2026 | CGPA: 8.24 (Till Sem 5)</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold text-white">Higher Secondary Certificate (H.S.C.)</h3>
                <p className="text-blue-400 font-medium">Mahatma Gandhi Jr. College</p>
                <p className="text-gray-400">2021 - 2022 | Percentage: 74.17%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
