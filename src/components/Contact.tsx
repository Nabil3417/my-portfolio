import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "ahatesam.ahamed@northsouth.edu",
      icon: "📧",
      link: "mailto:ahatesam.ahamed@northsouth.edu"
    },
    {
      label: "GitHub",
      value: "github.com/Nabil3417",
      icon: "💻",
      link: "https://github.com/Nabil3417"
    },
    {
      label: "Phone",
      value: "+880 1997 646 866",
      icon: "📞",
      link: "tel:+8801997646866"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden scroll-mt-20">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>
          

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                target={info.label === "GitHub" ? "_blank" : "_self"}
                rel="noreferrer"
                className="group p-8 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{info.label}</h3>
                <p className="text-gray-400 text-sm break-all">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Professional Footer-like Note */}
          <div className="mt-20 pt-10 border-t border-gray-900">
            <p className="text-gray-600 text-sm">
              © 2026 Ahatesam Ahamed. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;