import banner from "../../../assets/banners/royalroad.svg";
import before from "../RoyalRoad/Before.png";
import after from "../RoyalRoad/After.png";

function Remodel() {
  return (
    <div>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <div style={styles.headerText}>Remodeling: Royal Road</div>
          <img src={banner} style={styles.banner} />
        </div>
      </div>
      <div style={styles.wrapper}>
        <div style={styles.sectionHeader}>Introduction</div>
        <hr></hr>
        <div style={styles.sectionText}>
          One of my favorite passtimes is reading web fiction. The website I
          currently use the most for this is called{" "}
          <a href="royalroad.com">Royal Road</a>. In this project I will be
          remodeling the website to make the potrayal of stories more appealing!
        </div>
        <div style={styles.sectionHeader}>Original</div>
        <hr></hr>
        <div style={styles.sectionText}>
          To figure out how we want to remodel the website we first need to take
          a look at the original layout. <br></br>
          <br></br>Here's an example from the Best Rated section:
          <br></br>
          <br></br>
        </div>
        <img src={before} style={styles.before} />
        <div style={styles.sectionText}>
          <p>
            As it stands the information is presented quite neatly, but as a
            user I find a few features to be lacking. Let's discuss the pros and
            cons!{" "}
          </p>
          The most important information is presented front and center to give
          the reader enough context to decide if the story is for them.
        </div>
        <div style={styles.row}>
          <div style={styles.col}>
            <div style={styles.sectionHeader2}>Pros</div>
            <div style={styles.sectionText}>
              <ol>
                <li>The information is organized neatly</li>
                <li>
                  Important information such as the chapter count, title, and
                  author are listed clearly.
                </li>
                <li>
                  The layout is compact allowing a lot of stories to fit on one
                  page
                </li>
              </ol>
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.sectionHeader2}>Cons</div>
            <div style={styles.sectionText}>
              <ol>
                <li>The cover image is small and hard to see.</li>
                <li>
                  The description can not be read without opening a new page.
                </li>
                <li>
                  Some of the information feels redundant. Ex: Page and Chapter
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div style={styles.sectionHeader}>Solutions</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>Lets adress some of the issues mentioned! </p>
          <p>
            A stories cover art is one of its most defining features. In order
            to make it more pronounced we can increase its size and decrease the
            width of the item.
          </p>
          <p>
            Further, if not the cover image, the most important piece of context
            that a reader needs to decide if they are interested in a story is
            the synopsis! To give readers better access to the description we
            can make the story items flippable. That way readers don't need to
            nagivate to a new page to get a sense of what the story is about.
          </p>
          <p>
            Lastly, we can remove some of the listed elements such as view count
            and page count to make the items less information heavy.
          </p>
        </div>
        <div style={styles.sectionHeader}>Results</div>
        <hr></hr>
        <div style={styles.sectionText}>
          Here's preview of the result! If you'd like to visit the website in
          full click the image below. I have added some features such as
          filtering and sorting to give users a better sense of what the website
          would be like when its fully functioning.
        </div>
        <div style={styles.center}>
          <a
            href="https://amex2mmuqtpvpnxv.github.io/Royal-Road/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={after} style={styles.after} />
          </a>
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
    background: "#270051",
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
    color: "#270051",
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
};

export default Remodel;
