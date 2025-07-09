import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skills = [
    // Technical
    {
      name: "C",
      icon: "🔧",
      level: 90,
      category: "Technical",
      description: "Advanced proficiency in C for algorithms, data structures, and systems programming.",
      color: "#0ff"
    },
    {
      name: "C++",
      icon: "🔧",
      level: 90,
      category: "Technical",
      description: "Advanced proficiency in C++ for algorithms, data structures, and systems programming.",
      color: "#0ff"
    },
    {
      name: "C#",
      icon: "#",
      level: 85,
      category: "Technical",
      description: "Strong OOP and backend development with C#.",
      color: "#a259ff"
    },
    {
      name: "Java",
      icon: "☕",
      level: 85,
      category: "Technical",
      description: "Backend and enterprise application development with Java.",
      color: "#0ff"
    },
    {
      name: "Python",
      icon: "🐍",
      level: 80,
      category: "Technical",
      description: "Data science, ML, automation, and scripting with Python.",
      color: "#a259ff"
    },
    {
      name: "HTML",
      icon: "🌐",
      level: 95,
      category: "Technical",
      description: "Modern web development and semantic markup with HTML.",
      color: "#0ff"
    },
    {
      name: "CSS",
      icon: "��",
      level: 95,
      category: "Technical",
      description: "Responsive design and styling with CSS.",
      color: "#0ff"
    },
    {
      name: "JavaScript",
      icon: "��️",
      level: 95,
      category: "Technical",
      description: "Interactivity and dynamic web development with JavaScript.",
      color: "#0ff"
    },
    {
      name: "PHP",
      icon: "🐘",
      level: 70,
      category: "Technical",
      description: "Web development and server-side scripting with PHP.",
      color: "#a259ff"
    },
    {
      name: "MySQL",
      icon: "��️",
      level: 85,
      category: "Technical",
      description: "Database design, management, and optimization with MySQL.",
      color: "#0ff"
    },
    {
      name: "PostgreSQL",
      icon: "🗄️",
      level: 85,
      category: "Technical",
      description: "Database design, management, and optimization with PostgreSQL.",
      color: "#0ff"
    },
    {
      name: "OOP, ML, NLP",
      icon: "🤖",
      level: 80,
      category: "Technical",
      description: "Object-oriented programming, machine learning, and natural language processing.",
      color: "#a259ff"
    },
    // Tools
    {
      name: "ASP.NET",
      icon: "⚙️",
      level: 80,
      category: "Technical",
      description: "Backend web development with ASP.NET.",
      color: "#0ff"
    },
    {
      name: "Spring Boot",
      icon: "🌱",
      level: 80,
      category: "Tools",
      description: "Enterprise Java backend development with Spring Boot.",
      color: "#a259ff"
    },
    {
      name: "Git, GitHub",
      icon: "🔗",
      level: 90,
      category: "Tools",
      description: "Version control and collaborative development.",
      color: "#0ff"
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill;
            setAnimatedSkills(prev => [...prev, skillName]);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.skill-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-glass/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-futuristic font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              data-skill={skill.name}
              className="skill-card group bg-glass rounded-xl p-6 shadow-neon hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative"
              style={{ animationDelay: `${index * 100}ms` }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #0ff' }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary">{skill.name}</h3>
                <span className="text-sm text-accent">{skill.category}</span>
              </div>
              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {skill.description}
              </p>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-futuristic font-bold text-accent mb-6">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Postman", "JWT", "REST APIs", "MVC Pattern", "Agile/Scrum",
              "Problem Solving", "Data Structures", "Algorithms", "System Design",
              "Database Design", "API Documentation", "Testing", "Debugging"
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 