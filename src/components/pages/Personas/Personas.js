import InterfaceCarousel from "./InterfaceCarousel";
import banner from "../../../assets/banners/boba.svg";
import graph from "./assets/user_oberservations/BarChart.png";
import tim from "./assets/empathy_maps/Tired_Tim.png";
import chloe from "./assets/empathy_maps/Cheerful_Chloe.png";

import Storyboard from "./Storyboard";

function Personas() {
  return (
    <div>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <div style={styles.headerText}>
            A User's Experience Ordering Boba Tea through a Kiosk
          </div>
          <img src={banner} style={styles.banner} />
        </div>
      </div>
      <div style={styles.wrapper}>
        <div style={styles.sectionHeader}>Introduction</div>
        <hr></hr>
        <div style={styles.sectionText}>
          This project explores a user's experience ordering boba tea through a
          kiok at a local tea shop. In order to accomplish this, I surveyed
          customers of the store, built personas, and created a storyboard to
          best elucidate the experience!{" "}
        </div>
        <div style={styles.sectionHeader}>The Interface</div>
        <hr></hr>
        <div style={styles.sectionText}>
          To help familiarize you with the interface I have made a mockup of the
          different screens involved in the ordering process.
        </div>
        <InterfaceCarousel style={styles.interfaceCarousel}></InterfaceCarousel>
        <div style={styles.sectionHeader}>Observations</div>
        <hr></hr>
        <div style={styles.sectionText}>
          Now let's discuss some of the feedback received from customers of the
          shop!
        </div>
        <div style={styles.sectionHeader2}>My Observations</div>
        <div style={styles.sectionText}>
          Most users did not struggle to use the interace as they seemed to have
          had experience with it already and knew what they wanted. Users spent
          the most amount of time parsing through drink options but went through
          the rest of the process (payment) quickly.
        </div>
        <div style={styles.sectionHeader2}>
          {" "}
          Question 1: How would you rate your experience using the kiosk on a
          scale of 1-10?
        </div>
        <img src={graph} style={styles.graph} />
        <div style={styles.response}>
          {" "}
          Overall users seem to have had a positive experience with the
          interface.
        </div>
        <div style={styles.sectionHeader2}>
          Question 2: Have you ever experienced any trouble using the kiosk at
          Ten One Tea House? If so what happened?
        </div>
        <div style={styles.response}>
          All 4 users reported having no difficulty using the kiosk.
          <br />
          <br />
          However, one user mentioned that when they first came to the shop they
          found the number of choices to be overwhelming, despite finding the
          interface itself to be straightforward.
        </div>
        <div style={styles.sectionHeader2}>
          {" "}
          Question 3: Do you prefer the kiosk to ordering in person? Why or why
          not?
        </div>
        <div style={styles.response}>
          {" "}
          1: I prefer to order in person because I like to talk to people.
          <br />
          <br />
          2: I've never bothered using the kiosk, I don't want to have to figure
          out a new system when i could just talk to someone.
          <br />
          <br />
          3: I prefer ordering in person - there’s often someone at the kiosk
          making it easier to order at the counter.
          <br />
          <br />
          4: Yes because I do not have to talk and feel pressured to choose
          right away.
        </div>
        <div style={styles.sectionHeader}>Personas</div>
        <hr></hr>
        <div style={styles.sectionText}>
          Here are some personas that I have developed using the customer
          feedback that may portray a typical customer of the tea shop.
        </div>
        <div style={styles.sectionHeader2}> Persona 1: Cheerful Chloe</div>
        <img src={chloe} style={styles.map} />
        <div style={styles.sectionText}>
          Chloe is cheerful and energetic. She loves interacting with people,
          trying new things, and most importantly, BOBA!
          <br />
          <br />
          Although she is comfortable using the kiosk, she greatly prefers
          ordering in person so that she can interact with people. Chloe is a
          frequent visitor of Ten One Tea House, and when there are too many
          people waiting at the register she chooses to use the kiosk, albeit
          reluctantly.
        </div>
        <div style={styles.sectionHeader2}> Persona 2: Tired Tim</div>
        <img src={tim} />
        <div style={styles.sectionText}>
          Tim works long hours at his office job and often leaves work
          exhausted. On his way home he saw a boba shop that his friend Chloe
          reccommended and decided to give it a shot.
          <br />
          <br />
          When Tim entered he was glad to see the kiosk because it allowed him
          to avoid talking to people. He found the process simple and easy to
          navigate. However he found that there were way too many choices and
          not nearly enough descriptions. Having so many options that were
          practically mysteries to him was frustrating.
          <br />
          <br />
          Trevor represents what a new visitor may look like. New visitors are
          not invested in the product and consequently less likely to return if
          their first impression isn't great.
        </div>
        <div style={styles.sectionHeader}>Storyboard</div>
        <hr></hr>
        <div style={styles.sectionText}>
          Finally, here is a storyboard representing Tired Tim's experience
          ordering boba for the first time!
        </div>
        <Storyboard></Storyboard>
        <div style={styles.sectionHeader}>Conclusion</div>
        <hr></hr>
        <div style={styles.sectionText}>
          That wrap's up a user's experience ordering boba tea through a kiosk.
          Thanks for reading!
        </div>
        <div style={styles.sectionText}>
          <br></br>
          Attribution: <br></br>
          <br></br>
          Icons for Storyboard:
          <a href="https://thenounproject.com">Icons</a> <br></br>
          Images of Boba Tea:
          <a href="https://www.tenoneteahouse.com">
            Ten One Tea House Website
          </a>{" "}
          <br></br>
          Post-it Notes for Empathy Maps:
          <a href="https://pixy.org/4642968/">Post-it Note</a> <br></br>
          Cheerful Chloe:
          <a href="https://www.freepik.com/free-vector/cute-girl-with-peace-sign-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_21473070.htm#query=portrait%20little%20girl&position=0&from_view=keyword">
            Image by catalyststuff
          </a>{" "}
          <br />
          Tired Tim Art:
          <a href="https://www.freepik.com/free-vector/tired-employee-worker-cartoon-icon-illustration-people-business-icon-concept-isolated-flat-cartoon-style_10717967.htm#query=boy%20working&position=2&from_view=author">
            Image by catalyststuff
          </a>{" "}
          <br />
          Vido Followed / Code Used to Get Navigation bar:
          <a href="https://www.youtube.com/watch?v=yH7gkUNwDJY&list=RDCMUCjX0FtIZBBVD3YoCcxnDC4g&index=2">
            Video Link
          </a>{" "}
          <br></br>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "60%",
    margin: "auto",
  },
  header: {
    display: "flex",
    background: "#c83f49",
    height: "60vh",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    padding: "4%",
    boxShadow: "0 7px 30px -10px rgba(150,170,180,1)",
  },
  headerText: {
    maxWidth: "500px",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.7)",
  },
  interfaceCarousel: {
    margin: "50%",
  },
  banner: {
    height: "400px",
    boxShadow: "0 7px 30px -10px rgba(150,170,180,1)",
    backgroundColor: "transparent",
    borderRadius: "30px",
  },
  sectionHeader: {
    color: "black",
    fontSize: "3rem",
    fontWeight: "bold",
    marginTop: "50px",
  },
  sectionHeader2: {
    color: "#c83f49",
    fontSize: "2.3rem",
    fontWeight: "bold",
    marginTop: "50px",
  },
  sectionText: {
    color: "",
    fontSize: "1.5rem",
    fontWeight: "",
    marginTop: "20px",
  },
  response: {
    color: "",
    fontSize: "1.5rem",
    fontWeight: "",
    marginTop: "20px",
  },
  graph: {
    width: "65%",
    margin: "60px",
  },
  map: { margin: "40px" },
};

export default Personas;
