import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I have hands-on experience in Frontend Development and am actively
          seeking opportunities in this field. <br />
          If there's a vacancy, my inbox is always open. Whether you have
          further questions or just want to say hi, <br />
          I'll make sure to get back to you!
          <br />
          <b>Email: ashfakmomin2001@gmail.com</b>
        </p>

        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/momin-ashfak-b7985022a/");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>Ashfak</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
