
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="text-cyan-400">Touch</span>
        </h1>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Let's discuss opportunities and collaborate on exciting projects that make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-cyan-400 rounded mr-4"></span>
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <span className="text-cyan-400 text-xl">📧</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:ramshekade20@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                  ramshekade20@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-400 text-xl">📱</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:+919156979741" className="text-white font-medium hover:text-cyan-400 transition-colors">
                  +91 9156979741
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-xl">💼</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a href="https://linkedin.com/in/ramshekade" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-cyan-400 transition-colors">
                  linkedin.com/in/ramshekade
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-400 text-xl">🐙</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a href="https://github.com/ramshekade" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-cyan-400 transition-colors">
                  github.com/ramshekade
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-cyan-400 rounded mr-4"></span>
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. 
            Whether you're looking for a developer, have a project idea, or just want to connect, feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <h3 className="text-cyan-400 font-semibold mb-2">Open to Opportunities</h3>
              <p className="text-gray-300 text-sm">Full-time positions, freelance projects, and consulting work</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-semibold mb-2">Technical Discussions</h3>
              <p className="text-gray-300 text-sm">AI/ML, Full-stack development, and emerging technologies</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <h3 className="text-purple-400 font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-300 text-sm">Open source projects and innovative startup ideas</p>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href="mailto:ramshekade20@gmail.com"
              className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg text-center transition-all duration-300 hover:scale-105 font-medium"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/ramshekade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-center transition-all duration-300 hover:scale-105 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
