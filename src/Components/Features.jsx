'use client'
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sections = [
  {
    id: 'sales',
    title: 'Sales',
    head:"1. Sales",
    description:
      'Win more deals without lowering your prices. Impress prospects with detailed site maps, precise estimates, and professional site condition reports.',
    para : "Impress prospects with detailed site maps, precise estimates, and professional site condition reports. Communicate with clarity and build trust from the start—stand out in the competitive market without wasting time on manual processes.",
      image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67af1063ee0eb80426020335_renewals-p-800.avif',
  },
  {
    id: 'handover',
    title: 'Handover',
    head:"2. Handover",
    description:
      'Seamlessly handover projects to your team with precise documentation and AI-powered site mapping.',
    para:"Document enhancement opportunities during site walks with geotagged notes and photos. Generate instant proposals to pitch ideas professionally and win approvals faster—unlock new revenue streams without adding complexity.",
      image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67af1063ee0eb80426020335_renewals-p-800.avif',
  },
  {
    id: 'enhancement',
    title: 'Enhancement Sales',
    head:"3. Enhancement Sales",
    description:
      'Upsell additional services efficiently with accurate AI-generated insights and reporting.',
    para:"Document enhancement opportunities during site walks with geotagged notes and photos. Generate instant proposals to pitch ideas professionally and win approvals faster—unlock new revenue streams without adding complexity.",
      image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67af1063ee0eb80426020335_renewals-p-800.avif',
  },
  {
    id: 'audits',
    title: 'Site Audits',
    head:"4. Audits",
    description:
      'Perform accurate site audits and generate comprehensive reports to impress clients.',
    para:"Conduct site quality audits effortlessly with ready-to-use templates. Track performance, highlight service quality, and address issues proactively. Strengthen customer relationships with data-backed insights—no miscommunication, no service gaps.",
      image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67af1063ee0eb80426020335_renewals-p-800.avif',
  },
  {
    id: 'renewals',
    title: 'Renewals',
    head:"5. Renewals",
    description:
      'Track renewals and recurring services, ensuring long-term client satisfaction.',
    para:"Showcase service history and organized records during renewal conversations. Highlight your professionalism and consistency to reinforce trust and loyalty. Make switching vendors hard for your clients—without extra effort or guesswork.",
      image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67af1063ee0eb80426020335_renewals-p-800.avif',
  },
];

function Features() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  // Intersection observer for scroll-triggered tab change
  useEffect(() => {
    const observers = refs.current.map((ref, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(idx);
          }
        },
        { root: null, threshold: 0.5 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="w-full bg-black">
      {/* Tabs */}
      <div className="sticky top-0 bg-white z-50 shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-center space-x-8">
          {sections.map((sec, idx) => (
            <button
              key={sec.id}
              className={`text-lg font-medium ${
                active === idx ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'
              }`}
              onClick={() => {
                refs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {sec.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="mt-8">
        {sections.map((sec, idx) => (
          <div
            key={sec.id}
            ref={(el) => (refs.current[idx] = el)}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center p-10 gap-10"
          >
            {/* Text */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">{sec.title}</h2>
              <h1 className="text-3xl md:text-4xl text-white font-semibold mb-4">{sec.head}</h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">{sec.description}</p>
                <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">{sec.para}</p>
                <button className='bg-yellow-300 text-black rounded-2xl px-6 py-3 w-50 mt-5'>Learn More</button>
            </motion.div>

            {/* Image */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={sec.image} alt={sec.title} className="rounded-xl shadow-lg" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
