import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useSpring, animated } from '@react-spring/web';

export const Contact = () => {
  const form = useRef();
  const titleRef = useRef();
  const [animateTitle, setAnimateTitle] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Animate title on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTitle(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = titleRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const titleSpring = useSpring({
    opacity: animateTitle ? 1 : 0,
    transform: animateTitle ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 120, friction: 18 },
  });

  const validate = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    const name = formData.get('user_name').trim();
    const email = formData.get('user_email').trim();
    const message = formData.get('message').trim();

    if (!name) newErrors.user_name = 'Name is required';
    if (!email) newErrors.user_email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.user_email = 'Email is invalid';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('');
    if (!validate()) return;

    emailjs
      .sendForm('service_09o1lf8', 'template_jc3o07e', form.current, 'ujp9oicu9yHZI1g0j')
      .then(() => {
        setStatusMessage('Message sent successfully!');
        form.current.reset();
        setErrors({});
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert(`Failed to send message. ${error.text || 'Please try again.'}`);
      });
  };

  return (
    <section id="Contact">
      <div className="contactContent">
        <animated.div className="contactTitleWrapper" style={titleSpring} ref={titleRef}>
          <h1 className="contactPageTitle">Let's Connect</h1>
          <p className="contactSubText">
            I'm always open to new opportunities and collaborations. Drop a message !
          </p>
        </animated.div>

        <form className="contactForm" ref={form} onSubmit={sendEmail} noValidate>
          <input
            type="text"
            className={`name ${errors.user_name ? 'inputError' : ''}`}
            placeholder="Your Name"
            name="user_name"
          />
          {errors.user_name && <p className="errorMsg">{errors.user_name}</p>}

          <input
            type="email"
            className={`email ${errors.user_email ? 'inputError' : ''}`}
            placeholder="Your Email"
            name="user_email"
          />
          {errors.user_email && <p className="errorMsg">{errors.user_email}</p>}

          <textarea
            className={`msg ${errors.message ? 'inputError' : ''}`}
            name="message"
            placeholder="Your Message"
            rows="8"
          />
          {errors.message && <p className="errorMsg">{errors.message}</p>}

          <button type="submit" className="submitBtn">Submit</button>
          {statusMessage && <p className="formStatus">{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
};
