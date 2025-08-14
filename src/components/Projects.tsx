import React from 'react';
import { ExternalLink, Play, Building2, UtensilsCrossed, ArrowRight } from 'lucide-react';

const Projects = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "RealtyFlow™",
      description: "Intelligent voice agent that speaks directly with leads immediately to qualify them, schedule bookings/appointments, and answers any inquiries around the clock while increasing lead conversion as much as 40%.",
      category: "Real Estate",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      driveUrl: "#", // Replace with actual Google Drive URL
      icon: Building2,
      gradient: "from-emerald-500 to-teal-600",
      features: ["Lead Qualification", "Property Scheduling", "24/7 Availability", "CRM Integration"]
    },
    {
      title: "Small Business AI Receptionist",
      description: "Smart voice assistant that handles customer inquiries, appointments, and business operations. Can reduce wait times as much as 60% and handles 3x more calls during peak hours.",
      category: "Small Business",
      image: "/image copy.png", // Use local image from public folder
      driveUrl: "#", // Replace with actual Google Drive URL
      icon: UtensilsCrossed,
      gradient: "from-orange-500 to-red-500",
      features: ["Reservation / Appointment Management", "Business Inquiries", "Order Handling", "Peak Hour Coverage"]
    }
  ];

  const handleProjectClick = (driveUrl: string) => {
    if (driveUrl === "#") {
      // If no actual URL is provided, scroll to contact form
      scrollToContact();
    } else {
      // Open the actual project URL in a new tab
      window.open(driveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-600">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Our Work in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed businesses with AI automation. Real solutions, real results, real impact on growth and efficiency.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-200 transform hover:-translate-y-3"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 sm:h-72">
                <img 
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.title === 'Small Business AI Receptionist' ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg backdrop-blur-sm`}>
                    <project.icon className="h-4 w-4 mr-2" />
                    {project.category}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-3 flex-shrink-0`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleProjectClick(project.driveUrl)}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${project.gradient} text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group`}
                >
                  {project.driveUrl === "#" ? "Learn More" : "View Project"}
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-slate-600 font-medium">Increase in Lead Conversion</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
            <div className="text-slate-600 font-medium">Reduction in Wait Times</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-slate-600 font-medium">Always Available Service</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-400 rounded-full translate-x-16 translate-y-16"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Join the businesses already using AI to scale their operations, increase profits, and provide exceptional customer experiences.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-slate-900 px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center group"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;