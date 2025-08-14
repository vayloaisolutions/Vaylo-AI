import React from 'react';
import { Clock, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Founder Introduction */}
          <div className="text-center mb-16">
            {/* Profile Image */}
            <div className="mb-8">
              <img 
                src="https://res.cloudinary.com/derwxn9cg/image/upload/v1752695695/IMG-7074_rq1ynd.jpg"
                alt="Rubin Gonsalves"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto object-cover shadow-2xl border-4 border-white ring-4 ring-blue-100"
                style={{ objectPosition: '50% 80%' }}
              />
            </div>
            
            {/* Bio Text */}
            <div className="prose prose-lg max-w-3xl mx-auto">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Hi, I'm Rubin Gonsalves, I help your business grow, increase profits, save time, and operate more efficiently through AI-powered solutions.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                With a background in tech, marketing, and sales, I witnessed how much valuable time businesses lose to missed calls, lengthy conversations, and delayed follow-ups. I founded Vaylo AI Solutions to provide an automated and efficient solution for handling customer interactions, scheduling appointments, nurturing/follow-ups and more, while ensuring operations run seamlessly, allowing business owners to focus on growth and success.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">24/7 Availability</h3>
              <p className="text-slate-600 leading-relaxed">
                Never miss another lead with AI that works around the clock for your business.
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Reliable & Secure</h3>
              <p className="text-slate-600 leading-relaxed">
                Enterprise-grade security for your business communications and data protection.
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Custom Implementation</h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored AI solutions designed specifically for your business needs with dedicated setup and training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;