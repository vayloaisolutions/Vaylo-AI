import React from 'react';
import { ArrowRight, Target, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-100 shadow-sm">
              <Zap className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">AI-Powered Business Automation</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Grow Your Business with Smart
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI Automation</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Stop losing valuable time to calls, scheduling, and follow ups. We automate customer interactions, appointment booking, and nurturing, so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
            >
              Start Automating Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToServices}
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-semibold hover:shadow-lg"
            >
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-shadow">
              <Target className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-1">Our Mission</h3>
              <p className="text-sm text-slate-600 text-center">Empower small businesses with AI automation that actually works, without the complexity or high costs</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-8 w-8 text-indigo-500 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-1">Our Approach</h3>
              <p className="text-sm text-slate-600 text-center">Focus on real ROI through smart automation that integrates seamlessly with your existing processes</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-1">Our Promise</h3>
              <p className="text-sm text-slate-600 text-center">Provide ongoing support and optimization to ensure your AI solutions deliver lasting value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;