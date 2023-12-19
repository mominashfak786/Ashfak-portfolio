import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../Assets/imagegallery.png'
import quiz from '../../Assets/QuizApp.png'
import hotelImage from '../../Assets/hotel.png'
import news from '../../Assets/newswire.png'
import hire_hub from '../../Assets/hire hub.png'
import scribble from '../../Assets/Scribble.png'
import todolist from '../../Assets/todoList2.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={image}
                isBlog={false}
                title="Image Gallery"
                description="Image Gallery created with React js,Antd,infinite scrollbar.We can search the image according to image size and user views"
                ghLink="https://imagegallery2.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={quiz}
                isBlog={false}
                title="Quiz App"
                description="A quiz app using React would allow users to take a quiz and view their results after the quiz is over. The app would also include a timer for each question to ensure that users answer the questions within a specified time frame."
                ghLink="https://quitzapp.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hotelImage}
                isBlog={false}
                title="HotelApplication"
                description="•	Developed a hotel recommendation website with registration, login, and hotel management features.
•	Integrated a like/dislike feature and Stripe payment gateway for hotel bookings.
"
                ghLink="https://hotelapplication3.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={news}
                isBlog={false}
                title="News Wire"
                description="Developed a news wire application using React and Redux that displays news
articles and allows authors to delete and update them.
Integrated EmailJS for sending email messages and utilized React Bootstrap for
UI components."
                ghLink="https://newswire.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={scribble}
                isBlog={false}
                title="Scribble"
                description="
ScribbleScribble
Apr 2023 - Apr 2023Apr 2023 - Apr 2023
Show project
Adding notes using ReactJS typically involves creating a component that allows users to input text, save it to a state variable, and render it on the screen."
                ghLink="https://scribble-fums.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-gypt.onrender.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hire_hub}
                isBlog={false}
                title="Hire Hub"
                description="Hire Hub Built a placement management system application that streamlines the job
posting and application process "
                ghLink="https://jobsource.onrender.com/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist