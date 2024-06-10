import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lb3mkr9", // При промяна заамени с твоя EmailJS service ID
        "template_mlv5g62", // При промяна замени с твоя EmailJS template ID
        form.current,
        "Z6BLdPF_nXgNf5_5e" // При рпомяна замени с твоя EmailJS user ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="info-container">
        <div className="contact-form">
          <h2>При въпроси и запитвания</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="firstName">Име</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Фамилия</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Имейл</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Съобщение</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Изпрати</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Свържете се с нас</h2>
          <p>
            PhysioFix Рехабилитация и здраве
            <br />
            гр. Пловдив, ул. Севастопол 19
          </p>
          <p>
            Email: physiofix21@gmail.com
            <br />
            Телефон: 088 402 5333
          </p>
          <p>
            Работно време:
            <br />
            Понеделник - Петък: 8:00 - 19:00
            <br />
            Събота: 9:00 - 17:00
            <br />
            Неделя: 9:00 - 15:00
          </p>
          <h2>Как да стигнете до нас?</h2>
          <p>
            Градски транспорт:
            <br />
            Автобуси №15, 17, 113, 222
            <br />
            Паркинг:
            <br />
            ул. Христо Чернопеев №5 (срещу Скинд)
          </p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.042591917657!2d24.745284815310314!3d42.135407979202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a85382d0327a9f%3A0x400a4c9645db5b0!2sPhysioFix!5e0!3m2!1sen!2sbg!4v1622023840283!5m2!1sen!2sbg"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="PhysioFix Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
