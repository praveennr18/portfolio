import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  const email = "praveennr6361@gmail.com";

  return (
    <section className="contact" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📬 Contact Me
      </motion.h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="contact-text">
          I'm always open to collaboration, freelance opportunities, or a good tech talk!
        </p>

        <a href={`mailto:${email}`} className="contact-button" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> Send Mail
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
