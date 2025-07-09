import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_upbtxwh';
const TEMPLATE_ID = 'template_7tqu2js';
const PUBLIC_KEY = 'C1scMmMsZw8_PxsKj';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rafiulshafin',
      icon: '📚',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rafiulhasanshafin/',
      icon: '💼',
      color: '#0077b5'
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/xodus_Shafin',
      icon: '🏆',
      color: '#ff6b35'
    }
    // Hackerrank can be added here if you want
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    ).then(
      (result) => {
        setSubmitStatus('success');
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      },
      (error) => {
        setSubmitStatus('error');
      }
    ).finally(() => setIsSubmitting(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-futuristic font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-glass rounded-xl p-8 shadow-neon"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Send Message</h3>
            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                className="mb-6 p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                ❌ Something went wrong. Please try again.
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-white/80 mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-darkBg/50 border transition-colors ${
                    errors.from_name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-accent focus:border-primary'
                  } text-white placeholder-white/50 focus:outline-none`}
                  placeholder="Your full name"
                />
                {errors.from_name && (
                  <p className="text-red-400 text-sm mt-1">{errors.from_name}</p>
                )}
              </div>

              <div>
                <label htmlFor="from_email" className="block text-white/80 mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-darkBg/50 border transition-colors ${
                    errors.from_email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-accent focus:border-primary'
                  } text-white placeholder-white/50 focus:outline-none`}
                  placeholder="your.email@example.com"
                />
                {errors.from_email && (
                  <p className="text-red-400 text-sm mt-1">{errors.from_email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-darkBg/50 border transition-colors ${
                    errors.subject 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-accent focus:border-primary'
                  } text-white placeholder-white/50 focus:outline-none`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full p-4 rounded-lg bg-darkBg/50 border transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-accent focus:border-primary'
                  } text-white placeholder-white/50 focus:outline-none`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-darkBg py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Social Links & Map */}
          <motion.div
            className="space-y-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6">Connect</h3>
              <div className="mb-6 bg-darkBg/50 rounded-lg p-4 text-white text-sm">
                <div className="flex items-center mb-2"><span className="mr-2">📞</span> +880 1737701127</div>
                <div className="flex items-center"><span className="mr-2">✉️</span> rafiulshafin007@gmail.com</div>
              </div>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-darkBg/50 text-white hover:bg-accent hover:text-white transition-colors shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.08, backgroundColor: link.color }}
                  >
                    <span className="text-xl" style={{ color: link.color }}>{link.icon}</span>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            {/* Map Placeholder removed as per user request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 