import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Online Hospital System",
    description: "A platform enabling doctors to interact with patients effectively.",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL",
    github: "https://github.com/praveennr18/online-hospital-system",
    image: "/images/hospital.png"
  },
  {
    title: "Used Cars Price Prediction",
    description: "Linear regression model to predict used car prices.",
    tech: "Python, Sklearn, Pandas, Flask",
    github: "https://github.com/praveennr18/car_price",
    hosted: "https://car-price-g3qx.onrender.com",
    image: "/images/car.png"
  },
  {
    title: "Heart Disease Prediction System",
    description: "Machine learning system to predict heart disease risk.",
    tech: "Python, Scikit-learn, Django",
    github: "https://github.com/praveennr18/heart_disease",
    image: "/images/Heart.png"
  },
  {
    title: "Personal Voice Assistant",
    description: "Voice-controlled assistant built using Python libraries.",
    tech: "Python, ecapture, requests, Wikipedia",
    github: "https://github.com/praveennr18/personal-voice-assistant-",
    image: "/images/voice.jpg"
  },
  {
    title: "Weather App",
    description: "Real-time weather updates and forecasts.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/praveennr18/weather",
    hosted: "https://praveennr18.github.io/weather/",
    image: "/images/weather.png"
  },
  {
    title: "House Price Prediction",
    description: "Random Forest model to predict house prices.",
    tech: "Python, Sklearn, Pandas, Flask",
    github: "https://github.com/praveennr18/house-price-predictor",
    image: "/images/house.png"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="image-wrapper">
              <img src={proj.image} alt={proj.title} className="project-image" />
            </div>
            <div className="project-details">
              <h3>{proj.title}</h3>
              <p className="description">{proj.description}</p>
              <p className="tech-stack">{proj.tech}</p>
              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                {proj.hosted && (
                  <a href={proj.hosted} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
