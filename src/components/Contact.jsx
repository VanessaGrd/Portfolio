import { useState } from "react";
import { toast } from 'react-toastify';
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_zjfc30h",
      "template_buu5bsl",
      e.target,
      "M0XUqvXZH82e6OUQ5"
    );
  };
  const handleConfirmation = () => {
   toast.success('I received your message successfully 👌 !');
  };

  return (
    

    <section className={styles.contactForm} id="contact">
        <div className={styles.contactContainer}>
       
      <div className={styles.form}>
      <h2 className={styles.contactText}>Are you interested in my profile?</h2> 
      <h2>Contact me! </h2>
        <form onSubmit={sendEmail}>
          <div className={styles.name}>
            <label htmlFor="Name">Lastname</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="Name"
              id="name"
              name="name"
            />
          </div>
          <div className={styles.firstName}>
            <label htmlFor="FirstName">Firstname</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="firstName"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className={styles.email}>
            <label htmlFor="Email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              id="Email"
              name="Email"
            />
          </div>
          <div className={styles.message}>
    
          <label htmlFor="Message">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="Message"
            id="Message"
            name="message"
          />
          </div>
          <button type="submit" onClick={handleConfirmation}>Send</button>
        </form>
      </div>
      </div>
    </section>
    
  );
}

export default Contact;
