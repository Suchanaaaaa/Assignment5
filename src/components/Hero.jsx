import React from 'react';
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 my-12 px-6 max-w-7xl mx-auto">
      {/* Left side: About Dev Stack */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-sm font-bold tracking-wider text-pink-600 uppercase mb-2">
          About Dev Stack
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Empowering developer choices for modern tech stacks.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Dev Stack streamlines how software engineers discover, evaluate, and assemble their ideal technology ecosystems. Effortlessly curate frameworks, databases, and developer tools to build high-performance applications.
        </p>
      </div>

      {/* Right side: Contact Card */}
      <div className="w-full md:w-80 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-2 block">
            Contact
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to build?
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Connect with us to customize your stack or get expert guidance for your next major project.
          </p>
        </div>
        <button className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition duration-200">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Hero;