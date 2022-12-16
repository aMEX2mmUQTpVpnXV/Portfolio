import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/sketches/sketches_1.svg";
import slide2 from "./assets/sketches/sketches_2.svg";
import slide3 from "./assets/sketches/sketches_3.svg";
import slide4 from "./assets/sketches/sketches_4.svg";

function Prototypes() {
  return (
    <div style={styles.carousel}>
      <Carousel variant="dark">
        <Carousel.Item style={styles.carouselItem}>
          <Carousel.Caption style={styles.carouselHeader}></Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide1}
            alt="Slide 1"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <b>Person 1</b>
            <p>
              The first member of our group focused on incorporating{" "}
              <b>apartment preference</b> into the roommate search.
            </p>
            <ul>
              <li>
                {" "}
                This person focused their solution on providing users the chance
                to find an apartment that they liked first.
              </li>
              <li>
                Then they could reach out to the individuals already renting
                that apartment who were looking for a roommate.
              </li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <Carousel.Caption style={styles.carouselHeader}></Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide2}
            alt="Slide 2"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <b>Person 2</b>
            <p>
              The second member of our group designed a <b>marketplace-like</b>{" "}
              app focused on discovering individuals by looking through a list
              of profiles.
            </p>
            <ul>
              <li>
                Profiles include relevant information, such as budget, living
                preferences, and references from previous roommates.
              </li>
              <li>
                Users could then connect with other users via an in-app
                messaging system.
              </li>
            </ul>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <Carousel.Caption style={styles.carouselHeader}></Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide3}
            alt="Slide 3"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <b>Person 3</b>
            <p>
              The third member of our group created an app that focused on{" "}
              <b>algorithmically determining compatibility</b> between users to
              recommend roommates.
            </p>
            <ul>
              <li>
                The app includes a survey that users are required to fill out
                before they can interact with others on the platform.
              </li>
              <li>
                Based on the survey, the app displays a list of matches that the
                user has a high chance of living well with.
              </li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <Carousel.Caption style={styles.carouselHeader}></Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide4}
            alt="Slide 4"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <b>Person 4</b>
            <p>
              The fourth member of our group created an app which focused on the
              ability to create both <b>individual</b> and <b>group profiles</b>
              .
            </p>
            <ul>
              <li>
                This solution addresses how a group of people who already know
                they want to live together can look for other people to fill out
                their group.
              </li>
              <li>
                If there are three people who know they want to live together
                and are considering a four-bedroom apartment, they can enter
                Roomkast as a group seeking one more roommate.
              </li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

const styles = {
  carouselHeader: {
    position: "relative",
    left: "auto",
    right: "auto",
    color: "black",
    fontSize: "3rem",
    fontWeight: "bold",
  },
  carouselCaption: {
    position: "relative",
    left: "auto",
    right: "auto",
    fontSize: "1.5rem",
    background: "#d5f0ff",
    color: "black",
    textAlign: "start",
    padding: "30px",
  },
  carousel: {
    marginTop: "0px",
    marginBottom: "70px",
    background: "white",
  },
  carouselItem: {
    background: "#f1f1f2",
  },
  img: { height: "400px", border: "2px", marginBottom: "30px" },
};

export default Prototypes;
