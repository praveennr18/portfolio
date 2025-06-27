import './Home.css';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        
        {/* Text Section with animation */}
        <motion.div
          className="home-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Hey there! 👋 I'm Praveen</h1>
          <p>
            I'm a passionate Computer Science graduate who loves building creative and scalable digital products.
            I work with React, Java, and automation tools to bring ideas to life.
          </p>
        </motion.div>

        {/* Image Section with animation */}
        <motion.div
          className="home-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={profileImage} alt="Praveen" />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
