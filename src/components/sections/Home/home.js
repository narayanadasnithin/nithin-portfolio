import React from 'react';
import './home.css';
import image from '../../Images/img.jpg';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section id="Home" ref={ref}>
      <div className="homeContainer">
        <motion.div
          className="homeContent fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="nam">Hello</p>
          <h1 className="staticName">I'm Nithin Naryanadas</h1>

          {inView && (
            <>
              <h3 className="introName">
                <TypeAnimation
                  sequence={['Full Stack Java Developer', 1000]}
                  speed={20}
                  cursor={false}
                />
              </h3>

              <p className="introPara">
                <TypeAnimation
                  sequence={[
                    'Passionate about building scalable web applications and always eager to learn new technologies in software',
                    1000,
                  ]}
                  speed={50}
                  cursor={false}
                />
              </p>
            </>
          )}
        </motion.div>

        <Tilt className="tiltWrapper">
         
            <img src={image} alt="profile" className="image" />
          
        </Tilt>
      </div>
    </section>
  );
};

export default Home;
