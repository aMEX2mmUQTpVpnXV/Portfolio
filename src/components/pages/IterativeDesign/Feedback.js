import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/critique_images/critique_1.svg";
import img2 from "./assets/critique_images/critique_2.svg";
import img3 from "./assets/critique_images/critique_3.svg";
import img4 from "./assets/critique_images/critique_4.svg";
import img5 from "./assets/critique_images/critique_5.svg";
import img6 from "./assets/critique_images/critique_6.svg";
import img7 from "./assets/critique_images/critique_7.svg";

function Feedback() {
  return (
    <div style={styles.carousel}>
      <Carousel variant="dark">
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img1}
              alt="Slide 1"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img2}
              alt="Slide 2"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img3}
              alt="Slide 3"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img4}
              alt="Slide 4"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img5}
              alt="Slide 5"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img6}
              alt="Slide 6"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <div style={styles.imgConstraint}>
            <img
              style={styles.img}
              className="d-block w-100"
              src={img7}
              alt="Slide 7"
            />
          </div>
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
  imgConstraint: {
    height: "600px",
    width: "100%",
  },
  img: { maxHeight: "600px", border: "2px", padding: "50px" },
};

export default Feedback;
