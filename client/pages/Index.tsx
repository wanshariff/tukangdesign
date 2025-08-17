import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle, MessageCircle, Zap, Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

// Logo Component
const TukangLogo = ({ isDark = false }: { isDark?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-8 h-8">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7173 10.3762H15.2402V11.9015H16.7658V10.3762H18.2887V8.84838H19.8142V7.32312H18.2887V5.79528H16.7658V4.27002H15.2402V5.79528H13.7173V7.32312H12.1943V8.84838H13.7173V10.3762Z" fill={isDark ? "#F5F5F5" : "#22342B"}/>
        <path d="M19.8087 13.4291H18.2832V14.9543H19.8087V16.4796H21.3317V18.0074H22.8572V16.4796H24.3802V14.9543H25.9057V13.4291H24.3802V11.9012H22.8572V10.376H21.3317V11.9012H19.8087V13.4291Z" fill={isDark ? "#F5F5F5" : "#22342B"}/>
        <path d="M30.477 19.6359V18.1106H28.9515V16.5828H27.4286V19.6359H25.9056V21.1611H24.3801V22.689H21.3316V21.1611H19.8087V19.6359H18.2831V18.1106H16.7653V16.5828H15.2398V15.0575H13.7169V13.5297H12.1939V12.0044H10.6684V10.4766H9.14543V12.0044H7.61991V13.5297H6.09695V15.0575H9.14543V16.5828H10.6684V18.1106H12.1939V19.6359H13.7169V21.1611H12.1939V22.689H7.61991V21.1611H6.09695V19.6359H4.57143V16.5828H3.04848V18.1106H1.52295V19.6359H0V21.1611H1.52295V22.689H3.04848V24.2142H4.57143V25.742H7.61991V27.2673L12.1939 27.2699V25.742H13.7169V24.2142H15.2398V22.689H16.7602V24.2142H18.2831V25.742H19.8087V27.2699L24.3801 27.2673V25.742H27.4286V24.2142H28.9515V22.689H30.477V21.1611H32V19.6359H30.477Z" fill={isDark ? "#F5F5F5" : "#22342B"}/>
      </svg>
    </div>
    <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-brand-800'}`}>
      Tukang Design
    </span>
  </div>
);

// Navigation Component
const Navigation = () => (
  <header className="bg-brand-800 border-b border-brand-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <TukangLogo isDark />
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#" className="px-3 py-2 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors">Home</a>
          <a href="#" className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors">Services</a>
          <a href="#" className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors">Our Work</a>
          <a href="#" className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors">About</a>
        </nav>

        <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-4 py-2 rounded-lg border-2 border-white/10 shadow-lg">
          Get a Free Quote
        </Button>
      </div>
    </div>
  </header>
);

// Hero Section
const HeroSection = () => (
  <section className="relative bg-brand-800 overflow-hidden">
    {/* Background Grid Pattern */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial" />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
            Brand Nampak Lesu? Website Tak Bawa Sales?
          </h1>
          <p className="text-lg sm:text-xl text-brand-200 max-w-3xl mx-auto leading-relaxed">
            At Tukang Design, we don't just create pretty designs. We build powerful brand
            assets that work. With 13 years of big-league experience, we deliver high-quality
            design, cepat dan berbaloi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 border border-gray-300 shadow-lg">
            View Our Work
          </Button>
          <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-6 py-3 border-2 border-white/10 shadow-lg">
            Get Free Quote & Consultation
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Pain Points Section
const PainPointsSection = () => {
  const painPoints = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/68d79f02d8e72b2aad147e431bab887d622a12b0?width=640",
      title: '"My logo looks DIY... tak nampak profesional."',
      description: "Your brand is your promise. A weak logo tells customers you might not be serious. It kills trust instantly."
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8afcd0f30d80d980a6c85bd810b2d29f1d962946?width=640",
      title: '"My website looks terrible on my phone!"',
      description: "More than 80% of your customers are on mobile. If your site is broken on their phone, you're losing 8 out of 10 leads. Sayang, kan?"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e74c214a75ea5c96632d9e936fea25481541e5f4?width=640",
      title: '"I get traffic, but zero inquiries. Sunyi je."',
      description: "This is the silent killer. A confusing website with no clear direction chases your customers away... straight to your competitors."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
            Stop Losing Customers to a Bad First Impression.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Bunyi macam familiar tak?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className={`bg-white border border-gray-200 rounded-xl p-8 ${index === 1 ? 'md:-mb-10' : index === 0 ? 'md:mt-8' : 'md:mt-8'}`}>
              <div className="space-y-6">
                <img src={point.image} alt="" className="w-full h-52 object-cover rounded-lg" />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section  
const PortfolioSection = () => {
  const projects = [
    {
      title: "Kapitani",
      description: "Their app interface was getting cluttered. We gave it a total user experience overhaul, making it clean, simple, and intuitive for customers to use.",
      badge: "App Redesign & Design System",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b15ece4ef90fbca82aaaa3a2d48db69a75c7a653?width=768"
    },
    {
      title: "SAG Logistics Sdn Bhd",
      description: "Their outdated image didn't match their global-level service. We delivered a sharp corporate rebrand and a new website to build instant trust with B2B clients.",
      badge: "Rebranding & Web Development",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/464654eb4a00e7a16d472a5396f6855665baf904?width=768"
    },
    {
      title: "Youthopia",
      description: "To connect with a younger crowd, they needed a vibrant look. We crafted a fresh logo and a solid brand identity that truly clicks with their target audience.",
      badge: "Logo Design & Brand Guide",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/570304be0a67615c805cbf9c720dfd5b6068a511?width=768"
    },
    {
      title: "Raisuri Football Academy",
      description: "We delivered a powerful brand revamp and a custom jersey design to give the academy a professional look to wear with pride.",
      badge: "Brand Revamp & Jersey Design",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/87308c8ffa5d94713e04c98da188f9afaccaad4f?width=768"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
              See our work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              From brand new logos to full-scale websites, here's a look at our craftsmanship.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-cover bg-center relative"
                   style={{ backgroundImage: `url(${project.image})` }}>
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium border border-brand-200">
                    {project.badge}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">{project.description}</p>
                    <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Read case study
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8">
          <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
            </svg>
          </button>
          <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Packages Section
const PackagesSection = () => {
  const brandFeatures = [
    "Custom Logo Design Suite (multiple variations for all your needs)",
    "Professional Colour Palette", 
    "Strategic Typography Styles",
    "Starter Brand Guideline"
  ];

  const websiteFeatures = [
    "1-Year Domain & Hosting Included",
    "Up to 3 Custom-Designed Pages (e.g., Home, About, Services/Contact)",
    "Mobile-Responsive Layout (looks perfect on any device)",
    "Contact Form & WhatsApp Integration (get inquiries instantly)"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-700 font-semibold italic mb-3">Meet Your Tukang</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
            The Expert Craftsman for Your Brand.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer two straightforward packages to get your business looking sharp and 
            ready for customers. Cepat dan cun.
          </p>
        </div>

        <div className="space-y-0">
          {/* Brand Foundation Package */}
          <div className="flex flex-col lg:flex-row bg-white rounded-t-xl lg:rounded-r-none lg:rounded-l-xl overflow-hidden min-h-[720px]">
            <div className="flex-1 p-8 lg:p-16 lg:pr-8 flex items-center">
              <div className="max-w-lg">
                <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6">
                  Brand Foundation Package
                </h3>
                <p className="text-gray-600 mb-8">
                  Perfect for new businesses or those needing a serious refresh. We build a brand that you can be proud of.
                </p>
                
                <div className="space-y-5 mb-12">
                  {brandFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-7 h-7 text-brand-700 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-6 py-3 border-2 border-white/10 shadow-lg">
                  Get My Brand
                </Button>
              </div>
            </div>
            <div className="lg:w-80 xl:w-96 bg-gray-200 bg-cover bg-center" 
                 style={{ backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/brand-foundation-image)' }}>
            </div>
          </div>

          {/* Website Package */}
          <div className="flex flex-col lg:flex-row-reverse bg-white rounded-b-xl lg:rounded-l-none lg:rounded-r-xl overflow-hidden min-h-[720px]">
            <div className="flex-1 p-8 lg:p-16 lg:pl-8 flex items-center">
              <div className="max-w-lg">
                <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6">
                  Go-Live Website Package
                </h3>
                <p className="text-gray-600 mb-8">
                  Your 24/7 digital storefront. We create a professional, effective website designed to turn visitors into customers.
                </p>
                
                <div className="space-y-5 mb-12">
                  {websiteFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-7 h-7 text-brand-700 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-6 py-3 border-2 border-white/10 shadow-lg">
                  Get My Website
                </Button>
              </div>
            </div>
            <div className="lg:w-80 xl:w-96 bg-gray-200 bg-cover bg-center" 
                 style={{ backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/website-package-image)' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Free Discovery Consultation",
      description: "We start with a call to understand your business goals. No fluff, just strategy."
    },
    {
      icon: Zap,
      title: "Design & Build", 
      description: "We get to work, crafting your brand or website with skill and precision."
    },
    {
      icon: Rocket,
      title: "Handover & Launch",
      description: "We deliver the final files and launch your site. You're ready to go!"
    }
  ];

  return (
    <section className="py-24 bg-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-200 font-semibold mb-3">The Process</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Our 3-Step Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-brand-950 border-8 border-brand-900 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-brand-300" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-brand-200 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component  
const Footer = () => (
  <footer className="bg-gray-950 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center space-y-8">
        <TukangLogo isDark />
        
        <nav className="flex flex-wrap justify-center gap-8">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Our Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </nav>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © 2025 Tukang Design by TADAL STUDIO (202503200783). All Rights Reserved.
        </p>
        <a href="mailto:studio@tukang.design" className="text-sm hover:text-white transition-colors">
          studio@tukang.design
        </a>
      </div>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="w-full h-px bg-gray-200" />
      <PainPointsSection />
      <PortfolioSection />
      <PackagesSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}
