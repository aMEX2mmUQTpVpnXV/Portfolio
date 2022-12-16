import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/storyboarding/Slide 1.png";
import slide2 from "./assets/storyboarding/Slide 2.png";
import slide3 from "./assets/storyboarding/Slide 3.png";
import slide4 from "./assets/storyboarding/Slide 4.png";
import slide5 from "./assets/storyboarding/Slide 5.png";
import slide6 from "./assets/storyboarding/Slide 6.png";
import slide7 from "./assets/storyboarding/Slide 7.png";
import slide8 from "./assets/storyboarding/Slide 8.png";
import slide9 from "./assets/storyboarding/Slide 9.png";

function Storyboard() {
  return (
    <div style={styles.carousel}>
      <Carousel variant="dark">
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>1</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide1}
            alt="Slide 1"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              Tim had a long day at work and fell asleep on the job. Yesterday
              his friend Chloe recommend that he try boba tea at a shop called
              Ten One Tea House that she frequents. After hearing Chloe's
              description, Tim was determined to try the drink, so much so that
              he dreamt of it in his sleep!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>2</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide2}
            alt="Slide 2"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              Tim's alarm jolts him awake and he realizes that it is finally
              time to go home. He packs his bag and leaves the office.
              <br /> <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>3</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide3}
            alt="Slide 3"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              As Tim is biking home he realizes that the shop is on the way and
              decides to stop by to grab a drink. <br /> <br /> <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>4</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide4}
            alt="Slide 4"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              Tim finally arrives at Ten One Tea House. He locks his bike
              against the lamp post outside and heads inside. <br /> <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>5</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide5}
            alt="Slide 5"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              When Tim arrives at the shop he groans upon finding out that the
              line is VERY long. After looking around a bit he notices that the
              shop has an open kiosk and decides to try that instead. <br />{" "}
              <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>6</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide6}
            alt="Slide 6"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              Tim has never been to the shop before and is a bit apprehensive
              about using the kiosk. However after seeing how simple the start
              screen seems he feels some relief. <br /> <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>7</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide7}
            alt="Slide 7"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              However, when he starts ordering he is bombarded by a million
              different teas and toppings to choose from. Tim has never had boba
              and feels extremely overwhelmed. He has no clue what most of the
              drinks even contain and doesn't see any descriptions to help.{" "}
              <br /> <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>8</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide8}
            alt="Slide 8"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              After a couple minutes of feeling confused, Tim begrudgingly
              chooses the most popular item he can find and settles for the
              default configuration. <br /> <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption style={styles.carouselHeader}>
            <div>9</div>
          </Carousel.Caption>
          <img
            style={styles.img}
            className="d-block w-100"
            src={slide9}
            alt="Slide 9"
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>
              The rest of the process flows smoothly. Tim grabs his drink from
              the counter once he receives the text and gives his drink a try.
              ends up loving it and vows to be a frequent customer. Congrats
              Tim!!! <br /> <br />
            </p>
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
  },
  carousel: {
    marginTop: "70px",
    marginBottom: "70px",
  },
  img: { width: "500px", border: "2px" },
};

export default Storyboard;
