import './PublicProfiles.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function PublicProfiles() {
  const profiles = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/praveennr18',
      color: '#0077B5',
      tooltip: 'Let’s connect professionally!'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      link: 'https://github.com/praveennr18',
      color: '#000',
      tooltip: 'See my coding projects & contributions.'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      link: 'https://leetcode.com/u/praveennr/',
      color: '#FFA116',
      tooltip: 'Check out my problem-solving profile.'
    }
  ];

  return (
    <section className="public-profiles" id="profiles">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌐 Public Profiles
      </motion.h2>

      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            className="profile-card"
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ borderColor: profile.color }}
          >
            <div className="tooltip">{profile.tooltip}</div>
            <div className="icon" style={{ color: profile.color }}>
              {profile.icon}
            </div>
            <span>{profile.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default PublicProfiles;
