import React from 'react';
import { Phone, MessageSquare, Workflow, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Phone,
      title: "AI Voice Solutions",
      description: "Intelligent voice agents that answer customer calls, book appointments, and respond to FAQs — all 24/7.",
      features: [
        "24/7 call answering",
        "Appointment scheduling",
        "FAQ responses",
        "Lead capture"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Lead Qualification",
      description: "AI chats or calls with leads to qualify them before they reach the sales team — focus on high-intent only.",
      features: [
        "Intelligent lead scoring",
        "Automated qualification",
        "Priority routing",
        "CRM integration"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Workflow,
      title: "Lead Nurturing Workflows",
      description: "Automated follow-ups via SMS, email, or calls — stay top-of-mind and close more without chasing.",
      features: [
        "Multi-channel follow-up",
        "Personalized messaging",
        "Behavioral triggers",
        "Performance tracking"
      ],
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Powerful AI Solutions for Your Business
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From missed calls to slow follow-ups, our AI automation handles it all. 
            Choose the solutions that fit your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 text-slate-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below services */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Not sure which solution is right for you?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's discuss your specific needs and create a custom AI automation strategy for your business.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;