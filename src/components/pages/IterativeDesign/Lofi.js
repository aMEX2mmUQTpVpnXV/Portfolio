import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/wireframes/wireframes_1.svg";
import img2 from "./assets/wireframes/wireframes_2.svg";
import img3 from "./assets/wireframes/wireframes_3.svg";

function Lofi() {
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
          <Carousel.Caption style={styles.carouselHeader}></Carousel.Caption>
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

export default Lofi;
