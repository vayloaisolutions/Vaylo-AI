import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "A. Mehta",
      company: "SmallBiz Co.",
      quote: "Vaylo's AI voice solution helped us cut response time by 80%. It's like having a full-time team member without the cost!",
      rating: 5
    },
    {
      name: "Priya K.",
      company: "RealtyPro",
      quote: "We were losing leads every week. After automating calls with Vaylo AI, we've booked more appointments than ever before.",
      rating: 5
    },
    {
      name: "Kevin S.",
      company: "HealthGenix",
      quote: "Super smooth integration and amazing support. Vaylo understood our pain points and delivered fast.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what business owners are saying about their AI automation results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-blue-500 opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for feedback */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's discuss how AI automation can transform your business and create your own success story.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;