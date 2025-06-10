import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import profileImage from '../../Images/img1.jpg';
import './about.css';

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <section className="about-container" id="About" ref={ref}>
      <header className="about-header">
        <div className="about-title-wrapper">
          <h1 className="about-title">About</h1>
          <h2 className="me-title">Me</h2>
        </div>
      </header>

      <div className="profile-container">
        <motion.div
          className="profile-image"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img src={profileImage} alt="Profile" className="image1" />
        </motion.div>

        <motion.div
          className="para-content"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <p>
            I'm passionate about developing full stack applications that are scalable, maintainable, and efficient. I enjoy solving real-world problems with clean, modern web technologies.
          </p>
          <p>
            My interests include exploring backend frameworks, optimizing frontend performance, and staying updated with industry best practices in software development.
          </p>
          <p>
            When I'm not coding, I like reading tech blogs, collaborating with other developers, and contributing to open source projects that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
