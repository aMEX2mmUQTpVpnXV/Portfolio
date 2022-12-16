import banner from "../../../assets/banners/puppies.svg";
import before from "../RoyalRoad/Before.png";
import after from "../RoyalRoad/After.png";
import designGuide from "./assets/Visual Style Design Guide.svg";
import preview from "./assets/Preview.png";

function Responsive() {
  return (
    <div>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <div style={styles.headerText}>
            Responsive Redesign: Lancaster Puppies
          </div>
          <img src={banner} style={styles.banner} />
        </div>
      </div>
      <div style={styles.wrapper}>
        <div style={styles.sectionHeader}>Introduction</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            Today we will be redesigning the website that my family bought our
            puppy from: <a href="lancasterpuppies.com">Lancaster Puppies</a>
          </p>
        </div>
        <div style={styles.sectionHeader}>Why?</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            This website merits a redesign because it has major issues with both
            usability and accessibility. Avoiding both of these types of issues
            is crucial for a satisfactory user experience, and failing to do so
            can deter many people from engaging with your project or creation!
          </p>
        </div>
        <div style={styles.sectionHeader2}>Accessibility Issues</div>
        <div style={styles.sectionText}>
          <p>
            Accessibility issues can prevent users with disabilities from being
            able to access your site. Unfortunately, this website is riddled
            with them. Here are some of the most salient:{" "}
          </p>
          <p>
            <div style={styles.list}>
              <ul>
                <li>
                  The website does not have a minimalist’s design. The interface
                  is quite cluttered and it is difficult to immediately tell
                  what is happening on the page.
                </li>
                <li>
                  There are symbols in the images that are unexplained /
                  unclear.
                </li>
                <li>
                  Boxes with rounded edges seem to indicate a web element that
                  is clickable but this is not always true.
                </li>
                <li>
                  Inconsistent image sizing leads to text that is not lined up
                  in a uniform manner. Makes the website harder to parse.
                </li>
                <li>
                  On mobile it is not clear that the icons are buttons and since
                  there is no text, their function is completely unclear.
                </li>
                <li>
                  In the sort by menu it is unclear as to what metric is being
                  used currently.
                </li>
                <li>Gratuitous text ex: Puppies for sale in Lebanon , PA</li>
                <li>
                  When you use price filter it reloads and resizes, preventing
                  you from loosening the restriction.
                </li>
              </ul>
            </div>
          </p>
        </div>
        <div style={styles.sectionHeader2}>Usability Issues</div>
        <div style={styles.sectionText}>
          <p>
            Usability issues are issues that lead a user to an undesirable
            outcome. Although this website has less usability issues than it
            does accessibility issues it is still important that we address
            them.
          </p>
          <p>
            The most glaring issue being the lack of contrast. A lot of the text
            is in a light blue color and it does not contrast with the primarily
            white background enough to make the text easy to read. Other parts
            of the website have the same issue but with light gray text. The
            website also has some empty links and links that lead to non
            functioning or nonexistent webpages.
          </p>
        </div>
        <div style={styles.sectionHeader}>Redesigning: Visual Design Guide</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            Now that we have defined the issues, we can begin redesigning! The
            first step to redesigning a web page is to create a visual style
            design guide. Using one helps with creating a consistent theme for a
            webpage, making it easier for the user to navigate.
          </p>
          <p>Here's ours:</p>
        </div>
        <img src={designGuide} style={styles.designGuide}></img>
        <div style={styles.sectionText}>
          <p>
            A couple things worth noting are that only a few colors are present
            in the guide to keep the theme simple and consistent, and that we
            stick to the same font all the way throughout. Often times new
            designers try to incoporate too many fonts into their work, and end
            up hindering the quality of the page by decreasing consistentcy.
          </p>
        </div>
        <div style={styles.sectionHeader}>Prototyping</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            The next phase of designing is prototyping! It is always helpful to
            create a low-fidelity prototype in addition to a high-fidelity
            mockup, as it helps you focus on the most important aspects of the
            web page first. Once that is settled, we can then move on to the
            finer details.
          </p>
          <p>
            Note: Further details about how we address the aforementioned issues
            are included in the images.
          </p>
          <p>Here are our low-fidelity prototypes:</p>
          <a href="assets/Lofi Web Annotated.svg" target="_blank">
            Web
          </a>
          <br></br>
          <a href="assets/Lofi Mobile Annotated.svg" target="_blank">
            Mobile
          </a>
          <br></br>
          <a href="assets/Lofi Tablet.png" target="_blank">
            Tablet
          </a>
          <br></br>
          <br></br>
          <p>Here are our high-fidelity prototypes:</p>
          <a href="assets/Hifi Web.svg" target="_blank">
            Web
          </a>
          <br></br>
          <a href="assets/Hifi Mobile.svg" target="_blank">
            Mobile
          </a>
          <br></br>
          <a href="assets/Hifi Tablet Annotated.svg" target="_blank">
            Tablet
          </a>
        </div>
        <div style={styles.sectionHeader}>Conclusion</div>
        <hr></hr>
        <div style={styles.sectionText}>
          Thanks for reading! If you would like to see the finished product
          click the image below!{" "}
        </div>
        <a href="https://amex2mmuqtpvpnxv.github.io/Responsive-Redesign/">
          {" "}
          <img src={preview} style={styles.preview} />
        </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
    background: "#ffbf00",
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
    margin: "20px",
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
    color: "#e3a700",
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
  logo: { width: "600px", marginTop: "50px" },

  before: {
    width: "80%",
  },
  after: {
    width: "100%",
    marginTop: "30px",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  list: { padding: "10px" },
  designGuide: {
    width: "100%",
  },
  preview: {
    width: "100%",
    marginTop: "40px",
  },
};

export default Responsive;
