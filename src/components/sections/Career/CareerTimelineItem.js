import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CareerTimelineItemTime = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`timeline__event ${event.delay} ${event.type}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: 'easeOut',
      }}
    >
      <div className="timeline__event__icon">
        <img src={event.icon} alt={event.title} />
      </div>
      <div className="timeline__event__date">{event.date}</div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">{event.title}</div>
        <div className="timeline__event__description">
          {event.title === 'Certificates & Training' ? (
            event.description.split('\n').map((line, i) => <p key={i}>{line}</p>)
          ) : (
            <p>{event.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerTimelineItemTime;
