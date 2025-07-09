import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: "2025",
      title: "Bashundhara Residential Rental Management System",
      subtitle: "Web-based Rental Management System",
      description: "Manage property rentals, agreements, maintenance, and payments with secure access.",
      technologies: ["Java Spring Boot", "Spring Security (JWT)", "Spring IDBC", "PostgreSQL", "Spring AOP", "JavaMailSender", "Postman"],
      github: "https://github.com/rafiulshafin/Rental-System-Management"
    },
    {
      year: "2025",
      title: "Inventory Tracker in Super Shop",
      subtitle: "RESTful Inventory Management System",
      description: "Categorized inventory management for super shop items, with frontend and backend integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Java Spring Boot", "Postman"],
      github: "https://github.com/rafiulshafin/Inventory-Management-System"
    },
    {
      year: "2022",
      title: "Tech Fair Management System",
      subtitle: "Event & Judge Management",
      description: "Tech fair management: registration, event scheduling, judge management, real-time updates.",
      technologies: ["Java", "Swing GUI"],
      github: "https://github.com/rafiulshafin/Java-Project-"
    },
    {
      year: "2025",
      title: "End-to-End Trip Planning Solution (Website Development)",
      subtitle: "Trip Planning Web Application",
      description: "Trip planning, tour guidance, accessories, and third-party API integration.",
      technologies: ["PHP", "CSS", "HTML", "JavaScript"],
      github: "https://github.com/ShahriarZR/End-to-End_Trip_Planning_Solution"
    }
  ];

  const achievements = [
    {
      title: "Dean's List of Honors",
      description: "Consistently maintained academic excellence",
      icon: "🏅"
    },
    {
      title: "Competitive Programming",
      description: "Active participation in Codeforces and Hackerrank",
      icon: "⚡"
    },
    {
      title: "Team Collaboration",
      description: "Experience working in diverse project teams",
      icon: "🤝"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timeline.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [timeline.length]);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-futuristic font-bold text-center text-primary mb-12">
          About Me
        </h2>
        <motion.div
          className="max-w-xl mx-auto bg-glass rounded-xl p-8 shadow-neon flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Professional Biography</h3>
          <div className="space-y-6 text-white/80 leading-relaxed text-center">
              <p>
                I'm a dedicated Software Engineer with a strong focus on backend development using Java Spring Boot, ASP.NET, and C#. Currently pursuing my B.Sc. in Computer Science and Engineering at AIUB. I’ve built several scalable web applications with secure authentication, real-time features, and efficient database systems like MySQL and PostgreSQL.
              </p>
              <p>
                I’m also passionate about Machine Learning, Natural Language Processing, and Blockchain technologies. Active on platforms like Codeforces and Hackerrank, I constantly challenge myself to grow through problem-solving and algorithmic thinking.
              </p>
            </div>
        </motion.div>

        {/* Animated Timeline */}
        <div id="projects" className="bg-glass rounded-xl p-8 shadow-neon mt-12 md:mt-16">
          <h3 className="text-2xl font-bold text-accent mb-8 text-center">My Projects</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/30"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                    activeTimeline === index 
                      ? 'bg-primary border-primary shadow-neon' 
                      : 'bg-darkBg border-accent'
                  }`}></div>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`bg-darkBg/50 rounded-lg p-6 transition-all duration-500 ${
                      activeTimeline === index ? 'shadow-neon scale-105' : 'hover:shadow-lg'
                    }`}>
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">📁</span>
                        <div>
                          <div className="text-primary font-bold text-lg">{item.year}</div>
                          <div className="text-white font-medium">{item.title}</div>
                        </div>
                      </div>
                      <div className="text-accent text-sm mb-2">{item.subtitle}</div>
                      <div className="text-white/70 text-sm mb-2">{item.description}</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">{tech}</span>
                        ))}
                      </div>
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-primary text-darkBg rounded-lg font-medium hover:bg-accent hover:text-white transition-colors text-xs">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-glass rounded-xl p-8 shadow-neon">
            <h3 className="text-2xl font-bold text-accent mb-6">Current Education</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🎓</span>
                <div>
                  <div className="text-white font-bold text-lg">American International University Bangladesh</div>
                  <div className="text-primary">Bachelor of Engineering in Computer Science and Engineering</div>
                  <div className="text-white/60 text-sm">2022 - 2025 (Expected Graduation: September 2025)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-glass rounded-xl p-8 shadow-neon">
            <h3 className="text-2xl font-bold text-accent mb-6">Previous Education</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📚</span>
                <div>
                  <div className="text-white font-bold text-lg">Cantonment Public School and College, Rangpur</div>
                  <div className="text-primary">Higher Secondary in Science</div>
                  <div className="text-white/60 text-sm">2020</div>
                  <div className="text-accent text-sm mt-1">Rangpur, Dinajpur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 