import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Education Section */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>🎓 Education</h3>
          <ul>
            <li>
              <strong>B.E. in Computer Science and Engineering</strong> <br />
              Visvesvaraya Technological University (VTU), Maharaja Institute of Technology, Mysore <br />
              GPA: 8.50/10.00 | Dec 2021 – Aug 2025
            </li>
            <li>
              <strong>Pre-University</strong> <br />
              Swami Vivekananda Educational Institution <br />
              Percentage: 88.83% | Aug 2019 – June 2021
            </li>
          </ul>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>🛠 Technical Skills</h3>
          <div className="skills-bars">
            {[
              { label: "Python", level: 80 },
              { label: "Java", level: 70 },
              { label: "C", level: 60 },
              { label: "Frontend Development", level: 75 },
              { label: "Backend & APIs", level: 65 },
              { label: "Databases", level: 60 },
              { label: "Git", level: 75 },
            ].map((skill, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-info">
                  <span>{skill.label}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="bar-bg">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
