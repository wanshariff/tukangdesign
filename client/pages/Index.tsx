import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle,
  MessageCircle,
  Zap,
  Rocket,
  Menu,
  X,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import * as Dialog from "@radix-ui/react-dialog";

// Portfolio Overlay Modal Component
const PortfolioOverlay = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: {
    title: string;
    description: string;
    badge: string;
    image: string;
    details?: {
      client: string;
      duration: string;
      services: string[];
      challenge: string;
      solution: string;
      results: string[];
      additionalImages: string[];
    };
  };
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed inset-4 bg-white rounded-xl overflow-auto z-50 shadow-2xl max-w-6xl mx-auto">
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 flex justify-between items-center z-10">
            <div>
              <Dialog.Title className="text-2xl font-semibold text-gray-900">
                {project.title}
              </Dialog.Title>
              <span className="inline-block mt-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium border border-brand-200">
                {project.badge}
              </span>
            </div>
            <Dialog.Close asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>

          <div className="p-6">
            {/* Hero Image */}
            <div
              className="aspect-video rounded-xl overflow-hidden mb-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Project Details */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.details?.challenge ||
                      "The client needed a complete rebrand to better represent their growing business and connect with their target audience in a competitive market."}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.details?.solution ||
                      "We developed a comprehensive brand strategy that included logo design, color palette, typography, and brand guidelines to create a cohesive and memorable brand identity."}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {(
                      project.details?.results || [
                        "Increased brand recognition by 150%",
                        "Improved customer engagement across all platforms",
                        "25% increase in conversion rates",
                        "Successfully launched across 5 markets",
                      ]
                    ).map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-700 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Info Sidebar */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Info
                </h3>

                <div className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">
                      Client
                    </dt>
                    <dd className="text-gray-900">
                      {project.details?.client || project.title}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">
                      Duration
                    </dt>
                    <dd className="text-gray-900">
                      {project.details?.duration || "8-12 weeks"}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">
                      Services
                    </dt>
                    <dd className="space-y-1">
                      {(
                        project.details?.services || [
                          "Brand Strategy",
                          "Logo Design",
                          "Brand Guidelines",
                        ]
                      ).map((service, index) => (
                        <span
                          key={index}
                          className="inline-block bg-white text-gray-700 px-2 py-1 rounded text-sm mr-2 mb-1"
                        >
                          {service}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="mt-8">
                  <ContactFormModal>
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold">
                      Start Similar Project
                    </Button>
                  </ContactFormModal>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Additional Project Shots
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(
                  project.details?.additionalImages || [
                    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
                  ]
                ).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] rounded-lg overflow-hidden bg-cover bg-center shadow-md hover:shadow-lg transition-shadow"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Contact Form Modal Component
const ContactFormModal = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add form submission logic here
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-auto z-50 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-semibold text-gray-900">
              Get Your Free Quote
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="brand-foundation">
                  Brand Foundation Package
                </option>
                <option value="website">Go-Live Website Package</option>
                <option value="both">Both Packages</option>
                <option value="custom">Custom Project</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold py-3 mt-6"
            >
              Send My Request
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            We'll get back to you within 24 hours with a detailed quote.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Logo Component
const TukangLogo = ({ isDark = false }: { isDark?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-8 h-8">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7173 10.3762H15.2402V11.9015H16.7658V10.3762H18.2887V8.84838H19.8142V7.32312H18.2887V5.79528H16.7658V4.27002H15.2402V5.79528H13.7173V7.32312H12.1943V8.84838H13.7173V10.3762Z"
          fill={isDark ? "#F5F5F5" : "#22342B"}
        />
        <path
          d="M19.8087 13.4291H18.2832V14.9543H19.8087V16.4796H21.3317V18.0074H22.8572V16.4796H24.3802V14.9543H25.9057V13.4291H24.3802V11.9012H22.8572V10.376H21.3317V11.9012H19.8087V13.4291Z"
          fill={isDark ? "#F5F5F5" : "#22342B"}
        />
        <path
          d="M30.477 19.6359V18.1106H28.9515V16.5828H27.4286V19.6359H25.9056V21.1611H24.3801V22.689H21.3316V21.1611H19.8087V19.6359H18.2831V18.1106H16.7653V16.5828H15.2398V15.0575H13.7169V13.5297H12.1939V12.0044H10.6684V10.4766H9.14543V12.0044H7.61991V13.5297H6.09695V15.0575H9.14543V16.5828H10.6684V18.1106H12.1939V19.6359H13.7169V21.1611H12.1939V22.689H7.61991V21.1611H6.09695V19.6359H4.57143V16.5828H3.04848V18.1106H1.52295V19.6359H0V21.1611H1.52295V22.689H3.04848V24.2142H4.57143V25.742H7.61991V27.2673L12.1939 27.2699V25.742H13.7169V24.2142H15.2398V22.689H16.7602V24.2142H18.2831V25.742H19.8087V27.2699L24.3801 27.2673V25.742H27.4286V24.2142H28.9515V22.689H30.477V21.1611H32V19.6359H30.477Z"
          fill={isDark ? "#F5F5F5" : "#22342B"}
        />
      </svg>
    </div>
    <span
      className={`text-lg font-bold ${isDark ? "text-white" : "text-brand-800"}`}
    >
      Tukang Design
    </span>
  </div>
);

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-800 border-b border-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <TukangLogo isDark />

          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="px-3 py-2 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors"
            >
              Our Work
            </a>
            <a
              href="#"
              className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ContactFormModal>
              <Button className="hidden sm:flex bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-4 py-2 rounded-lg border-2 border-white/10 shadow-lg">
                Get a Free Quote
              </Button>
            </ContactFormModal>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-brand-700 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-700 py-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="px-3 py-2 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors"
              >
                Our Work
              </a>
              <a
                href="#"
                className="px-3 py-2 text-brand-300 font-semibold rounded-lg hover:bg-brand-700 hover:text-white transition-colors"
              >
                About
              </a>
              <ContactFormModal>
                <Button className="mt-4 bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-4 py-2 rounded-lg border-2 border-white/10 shadow-lg">
                  Get a Free Quote
                </Button>
              </ContactFormModal>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative bg-brand-800 overflow-hidden">
    {/* Background Grid Pattern */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial" />
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
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
            At Tukang Design, we don't just create pretty designs. We build
            powerful brand assets that work. With 13 years of big-league
            experience, we deliver high-quality design, cepat dan berbaloi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 border border-gray-300 shadow-lg"
          >
            View Our Work
          </Button>
          <ContactFormModal>
            <Button
              size="lg"
              className="bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold px-6 py-3 border-2 border-white/10 shadow-lg"
            >
              Get Free Quote & Consultation
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </div>
  </section>
);

// Pain Points Section
const PainPointsSection = () => {
  const painPoints = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/68d79f02d8e72b2aad147e431bab887d622a12b0?width=640",
      title: '"My logo looks DIY... tak nampak profesional."',
      description:
        "Your brand is your promise. A weak logo tells customers you might not be serious. It kills trust instantly.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8afcd0f30d80d980a6c85bd810b2d29f1d962946?width=640",
      title: '"My website looks terrible on my phone!"',
      description:
        "More than 80% of your customers are on mobile. If your site is broken on their phone, you're losing 8 out of 10 leads. Sayang, kan?",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e74c214a75ea5c96632d9e936fea25481541e5f4?width=640",
      title: '"I get traffic, but zero inquiries. Sunyi je."',
      description:
        "This is the silent killer. A confusing website with no clear direction chases your customers away... straight to your competitors.",
    },
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
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-8 ${index === 1 ? "md:-mb-10" : index === 0 ? "md:mt-8" : "md:mt-8"}`}
            >
              <div className="space-y-6">
                <img
                  src={point.image}
                  alt=""
                  className="w-full h-52 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 1 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  // Only 4 projects as requested with expanded details
  const projects = [
    {
      title: "Kapitani",
      description:
        "Their app interface was getting cluttered. We gave it a total user experience overhaul, making it clean, simple, and intuitive for customers to use.",
      badge: "App Redesign & Design System",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b15ece4ef90fbca82aaaa3a2d48db69a75c7a653?width=768",
      details: {
        client: "Kapitani Technology",
        duration: "12 weeks",
        services: ["UX Research", "UI Design", "Design System", "Prototyping"],
        challenge:
          "The existing app interface was cluttered and confusing for users, leading to poor user engagement and high abandonment rates.",
        solution:
          "We conducted comprehensive user research, redesigned the entire interface with focus on simplicity and created a scalable design system for future development.",
        results: [
          "65% improvement in user task completion rate",
          "40% reduction in customer support tickets",
          "Increased user session duration by 85%",
          "98% positive user feedback on new interface",
        ],
        additionalImages: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        ],
      },
    },
    {
      title: "SAG Logistics Sdn Bhd",
      description:
        "Their outdated image didn't match their global-level service. We delivered a sharp corporate rebrand and a new website to build instant trust with B2B clients.",
      badge: "Rebranding & Web Development",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/464654eb4a00e7a16d472a5396f6855665baf904?width=768",
      details: {
        client: "SAG Logistics Sdn Bhd",
        duration: "16 weeks",
        services: [
          "Brand Strategy",
          "Logo Design",
          "Web Development",
          "Marketing Materials",
        ],
        challenge:
          "The company's outdated brand image didn't reflect their professional, global-scale logistics services, affecting client trust and business growth.",
        solution:
          "We developed a modern, professional brand identity with a focus on trust and reliability, plus a responsive website that showcases their capabilities.",
        results: [
          "150% increase in website inquiries",
          "45% improvement in client retention",
          "Successfully expanded to 3 new markets",
          "87% increase in brand recognition",
        ],
        additionalImages: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
        ],
      },
    },
    {
      title: "Youthopia",
      description:
        "To connect with a younger crowd, they needed a vibrant look. We crafted a fresh logo and a solid brand identity that truly clicks with their target audience.",
      badge: "Logo Design & Brand Guide",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/570304be0a67615c805cbf9c720dfd5b6068a511?width=768",
      details: {
        client: "Youthopia Events",
        duration: "8 weeks",
        services: [
          "Logo Design",
          "Brand Identity",
          "Brand Guidelines",
          "Social Media Assets",
        ],
        challenge:
          "The organization needed a fresh, vibrant brand identity that would resonate with young adults and stand out in the competitive events industry.",
        solution:
          "We created a dynamic logo and brand system that reflects energy and youthfulness while maintaining professionalism and versatility across platforms.",
        results: [
          "200% increase in social media engagement",
          "90% improvement in brand recall among target demographic",
          "Successful launch of 15 events in first quarter",
          "Featured in 3 major design publications",
        ],
        additionalImages: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
        ],
      },
    },
    {
      title: "Raisuri Football Academy",
      description:
        "We delivered a powerful brand revamp and a custom jersey design to give the academy a professional look to wear with pride.",
      badge: "Brand Revamp & Jersey Design",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/87308c8ffa5d94713e04c98da188f9afaccaad4f?width=768",
      details: {
        client: "Raisuri Football Academy",
        duration: "10 weeks",
        services: [
          "Brand Revamp",
          "Jersey Design",
          "Team Merchandise",
          "Marketing Materials",
        ],
        challenge:
          "The football academy needed a professional brand identity that would instill pride in players and attract quality coaches and sponsors.",
        solution:
          "We redesigned their logo, created custom jerseys, and developed a complete brand system that reflects excellence, teamwork, and sporting achievement.",
        results: [
          "Secured 5 new major sponsors",
          "35% increase in academy enrollment",
          "Featured in regional sports media",
          "Expanded to 2 additional training facilities",
        ],
        additionalImages: [
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        ],
      },
    },
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
              From brand new logos to full-scale websites, here's a look at our
              craftsmanship.
            </p>
          </div>
        </div>

        {/* Carousel Container - Shows max 3 cards at a time */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
              >
                <PortfolioOverlay project={project}>
                  <div
                    className="aspect-[3/4] rounded-xl overflow-hidden bg-cover bg-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium border border-brand-200">
                        {project.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/50 backdrop-blur-sm border border-white/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                          View case study
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </PortfolioOverlay>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={scrollPrev}
            className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
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
    "Starter Brand Guideline",
  ];

  const websiteFeatures = [
    "1-Year Domain & Hosting Included",
    "Up to 3 Custom-Designed Pages (e.g., Home, About, Services/Contact)",
    "Mobile-Responsive Layout (looks perfect on any device)",
    "Contact Form & WhatsApp Integration (get inquiries instantly)",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-700 font-semibold italic mb-3">
            Meet Your Tukang
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
            The Expert Craftsman for Your Brand.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer two straightforward packages to get your business looking
            sharp and ready for customers. Cepat dan cun.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Brand Foundation Package */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div
              className="aspect-[4/3] bg-gray-200 bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop&crop=center)",
              }}
            >
              <div className="absolute inset-0 bg-brand-800/20"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                Brand Foundation Package
              </h3>
              <p className="text-gray-600 mb-6">
                Perfect for new businesses or those needing a serious refresh.
                We build a brand that you can be proud of.
              </p>

              <div className="space-y-4 mb-8">
                {brandFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-brand-700 mt-0.5 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <ContactFormModal>
                <Button
                  size="lg"
                  className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold py-3 border-2 border-white/10 shadow-lg"
                >
                  Get My Brand
                </Button>
              </ContactFormModal>
            </div>
          </div>

          {/* Website Package */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div
              className="aspect-[4/3] bg-gray-200 bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center)",
              }}
            >
              <div className="absolute inset-0 bg-brand-800/20"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                Go-Live Website Package
              </h3>
              <p className="text-gray-600 mb-6">
                Your 24/7 digital storefront. We create a professional,
                effective website designed to turn visitors into customers.
              </p>

              <div className="space-y-4 mb-8">
                {websiteFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-brand-700 mt-0.5 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <ContactFormModal>
                <Button
                  size="lg"
                  className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold py-3 border-2 border-white/10 shadow-lg"
                >
                  Get My Website
                </Button>
              </ContactFormModal>
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
      description:
        "We start with a call to understand your business goals. No fluff, just strategy.",
    },
    {
      icon: Zap,
      title: "Design & Build",
      description:
        "We get to work, crafting your brand or website with skill and precision.",
    },
    {
      icon: Rocket,
      title: "Handover & Launch",
      description:
        "We deliver the final files and launch your site. You're ready to go!",
    },
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
                  <step.icon
                    className="w-8 h-8 text-brand-300"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-brand-200 leading-relaxed">
                {step.description}
              </p>
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
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Our Work
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
        </nav>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © 2025 Tukang Design by TADAL STUDIO (202503200783). All Rights
          Reserved.
        </p>
        <a
          href="mailto:studio@tukang.design"
          className="text-sm hover:text-white transition-colors"
        >
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
