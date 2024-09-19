import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contactUs.css";
import Slides from "./Slides";
import Contactus from "../Images/ContactUs.jpg";

function ContactUs() {
  const form = useRef();
  const notify = () =>
    toast.success("Message Sent !", {
      position: "bottom-right",
    });

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs
      .sendForm("service_nr55mno", "template_nttryln", form.current, {
        publicKey: "404g0py0HFtwVWOSW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="slideParent">
        <Slides
          {...{
            title: "",
            text: "",
            image: Contactus,
          }}
          clas="slidesChanges"
        />
      </div>
      <div>
        <form action="/" ref={form} className="formClass" onSubmit={sendEmail}>
          <h2>Send me a message</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Enter Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="from_name"
            id="email"
            placeholder="Enter Email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter Message"
          ></textarea>
          <div>
            <input type="submit" value="Send" className="buttonSubmit" />
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              // transition: Bounce,
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
