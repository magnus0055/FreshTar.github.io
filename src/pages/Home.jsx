import { FaHome } from "react-icons/fa";
import React from "react";
import Typical from "react-typical";
import s1 from "../assets/1.png";
import s2 from "../assets/2.png";
import s3 from "../assets/3.png";
import s4 from "../assets/4.png";
import s5 from "../assets/5.jpg";
import VIDEO from "../assets/video.mp4";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const data = [
  {
    avatar: s2,
    name: "Still me",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio",
  },
  {
    avatar: s1,
    name: "Satyam singh",
    review: "It's fun making new things that pops into your head.",
  },
  {
    avatar: s3,
    name: "hello",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio",
  },
  {
    avatar: s4,
    name: "there",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio",
  },
  {
    avatar: s5,
    name: "Still me",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio",
  },
];

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xdnpl7c",
        "template_piwtepy",
        form.current,
        "LjTFaZU0h5Hx4i8Pk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="home_container">
      <div
        className="bkimg"
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(/home2.jpg)`,
        }}
      >
        <div className="navbar_container">
          <div className="navbar"> FesHtar </div>
          <div className="navbar_logo">
            {" "}
            <FaHome />{" "}
          </div>
        </div>

        <div className="description">
          <div className="main__heading">
            {/* <h1>Welcome To The Domain Of Legends</h1>
             */}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Welcome to the domain of Legends",
                  2000,
                  "I'm Satyajeet Singh",
                  2000,
                  "Fullstack Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
              />
            </h1>
          </div>
          <div className="main__text">
            <p>
              Let me tell you something. There's no nobility in poverty. I've
              been a poor man,
              <br />
              and I've been a rich man. And I choose rich every f***ing time.
            </p>
          </div>
          <div className="linkonimage">
            <a href="https://iiitkota.ac.in/" class="hero-btn">
              Visit The Official IIIT Kota website
            </a>
          </div>
        </div>
      </div>
      {/* ...............courses.................... */}
      <section class="course">
        <h1>TopIcs We FoCus On</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          laboriosam tempora. Quaerat, nostrum expedita quisquam suscipit
        </p>
        <div class="row">
          <div class="course-col">
            <h3>Academics</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
              repellendus unde ex aspernatur beatae ab, accusamus excepturi quo.
            </p>
          </div>
          <div class="course-col">
            <h3>Coding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
              repellendus unde ex aspernatur beatae ab, accusamus excepturi quo.
            </p>
          </div>
          <div class="course-col">
            <h3>Campus</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
              repellendus unde ex aspernatur beatae ab, accusamus excepturi quo.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="course-col">
            <h3>Semester Goals</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
              repellendus unde ex aspernatur beatae ab, accusamus excepturi quo.
            </p>
          </div>
          <div class="course-col">
            <h3>Coding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
              repellendus unde ex aspernatur beatae ab, accusamus excepturi quo.
            </p>
          </div>
          <div class="course-col">
            <h3>Music</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
              repellendus unde ex aspernatur beatae ab, accusamus excepturi quo.
            </p>
          </div>
        </div>
      </section>
      {/* ....................slideshow..................... */}
      <section id="testimonials">
        <h1>Pictorial View</h1>

        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      {/* ................call to action............... */}
      <section className="cta">
        <div className="cta__fixing">
          <video src={VIDEO} loop autoPlay muted />
          <div className="link__cta">
            <a href="" class="hero-btn">
              CONTACT US
            </a>
          </div>
          <div className="text__cta">
            <h2>Start your College Journey with a Bang. Enjoy College Life.</h2>
          </div>
        </div>
      </section>
      {/* ..................contact............ */}

      <section id="contact">
        <h5>Get In Touch</h5>
        <h1>Contact Me</h1>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>www.satyajeet055@gmail.com</h5>
              <a
                href="mailto:www.satyajeet055@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <GrInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <h5>satyajeet__singh055</h5>
              <a
                href="https://www.instagram.com/satyajeet___singh055/"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+91 9548101918</h5>
              <a
                href="https://api.whatsapp.com/send?text=www.google.com"
                data-action="share/whatsapp/share"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACTION  */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* ................Target big companies................ */}





      {/* .............footer............... */}
      <section class="footer">
        <h4>About us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum
          esse cum commodi, <br />
          magnam culpa? Cupiditate dolorem officia pariatur aspernatur illum
          nulla! Cupiditate .
        </p>
        <div class="icons">
          <a href="">
            {" "}
            <i class="footer-icons bx bxl-facebook-circle bx-tada"></i>
          </a>
          <a href="">
            {" "}
            <i class="footer-icons bx bxl-twitter bx-flashing"></i>
          </a>
          <a href="">
            {" "}
            <i class="footer-icons bx bxl-instagram-alt bx-tada"></i>
          </a>
          <a href="https://www.linkedin.com/in/satyajeet-singh-618a7120b/">
            {" "}
            <i class="footer-icons bx bxl-linkedin-square bx-flashing"></i>
          </a>
          <a href="https://chat.whatsapp.com/EjuQLch6gMx2yO2TrqvlSS">
            <i class="footer-icons bx bxl-whatsapp bx-tada"></i>
          </a>
        </div>
        <p>
          Made with <i class="bx bxs-heart"></i> by Satyajeet K singh
        </p>
      </section>
    </div>
  );
};

export default Home;
