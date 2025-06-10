import React from 'react';
import './career.css';
import educationIcon from '../../Images/g.png';
import projectIcon from '../../Images/p.png';
import internshipIcon from '../../Images/j.jpeg';
import certificateIcon from '../../Images/c.png';
import InternshipTimelineItem from './CareerTimelineItem';

const events = [
  {
    icon: educationIcon,
    date: 'Aug 2019 – May 2023',
    title: 'Vidya Jyothi Institute of Technology',
    description: 'Electronics and Communication Engineering',
    iconClass: 'education-icon',
    type: 'timeline__event--type1',
    delay: 'delay-3s'
  },
  {
    icon: projectIcon,
    date: 'March 2023 – April 2023',
    title: 'Enhancing Door Security with Smart Locks',
    description: 'Developed an IoT-enabled smart locking system with biometric authentication, improving security by 25%. Integrated real-time monitoring and mobile notifications.',
    iconClass: 'project-icon',
    type: 'timeline__event--type2',
    delay: 'delay-2s',
  },
  {
    icon: internshipIcon,
    date: 'June 2023 – August 2023',
    title: 'Social Media Analyst – Excelerate',
    description: 'Conducted data-driven analysis to optimize social media performance, leading to a 15% growth in follower engagement. Designed and executed campaigns to enhance brand visibility.',
    iconClass: 'internship-icon',
    type: 'timeline__event--type3',
    delay: 'delay-1s',
  },
  {
    icon: certificateIcon,
    date: 'Dec 2023 – May 2024',
    title: 'Certificates & Training',
    description: `Certified in Full Stack Development – Ihub Institution
Completed Ethical Hacking Training – Edureka
IoT Technology Certification – Simplilearn
Finalist in Lowe’s Hackathon`,
    iconClass: 'certificate-icon',
    type: 'timeline__event--type1',
    delay: '',
  },
];

const Internship = () => (
  <div>
    <div className="timeline" id="Internship">
            <div className="ts-title">Career</div>
      {events.map((event, index) => (
        <InternshipTimelineItem key={index} event={event} index={index} />
      ))}
    </div>
  </div>
);

export default Internship;
