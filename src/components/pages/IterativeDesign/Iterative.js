import banner from "../../../assets/banners/roomkast.svg";
import logo from "./assets/roomcast_description.png";
import Prototypes from "./Prototypes";
import Lofi from "./Lofi";
import Feedback from "./Feedback";
import FigmaEmbed from "react-figma-embed";

function Iterative() {
  return (
    <div>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <div style={styles.headerText}>Iterative Design: Roomkast</div>
          <img src={banner} style={styles.banner} />
        </div>
      </div>
      <div style={styles.wrapper}>
        <div style={styles.sectionHeader}>Introduction</div>
        <hr></hr>
        <div style={styles.sectionText}>
          In this project, we chose an emerging startup and designed their
          product’s interface. We ideated and designed all of our interfaces
          from scratch, without looking at any of the startup’s existing
          designs.
        </div>
        <div style={styles.sectionHeader}>Research</div>
        <hr></hr>
        <div style={styles.sectionHeader2}>Selecting a Startup</div>
        <div style={styles.sectionText}>
          In this project, we chose an emerging startup and designed their
          product’s interface. We ideated and designed all of our interfaces
          from scratch, without looking at any of the startup’s existing
          designs.
          <br></br>
          <br></br>
          When thinking about which startup to select, we thought about the
          following criteria:
          <br></br>
          <br></br>
          <ul>
            <li>
              We wanted to choose a company that was still in its starting
              stages and had not yet developed a fully fleshed-out product.
            </li>
            <li>
              The startup’s product had to be centered around a digital
              interface.
            </li>
            <li>
              {" "}
              The company had to have a clear purpose and view, so that there
              were clear goals we could develop solutions for in our interfaces.{" "}
            </li>
          </ul>
          <p>
            Keeping the above criteria in mind, we searched through startup
            accelerators such as{" "}
            <a href="https://www.ycombinator.com/">YCombinator </a>and{" "}
            <a href="https://www.techstars.com/portfolio">Techstars</a>.
            Ultimately we chose to develop an interface for a startup called
            Roomkast. As stated on their{" "}
            <a href="https://www.techstars.com/portfolio?name=Roomkast">
              Techstars profile
            </a>
            , “Roomkast is a profile-matching tool for people who see the value
            in co-sharing a place to live”:{" "}
          </p>
        </div>
        <div style={styles.center}>
          <img src={logo} style={styles.logo} />
        </div>
        <div style={styles.sectionHeader2}>
          Deciding the Interface’s Platform
        </div>
        <div style={styles.sectionText}>
          <p>
            We thought that the people who would most frequently use Roomkast
            were younger people who had just moved to a metropolitan area and
            were looking for a roommate to share an apartment or other living
            space with.
          </p>
          <p>
            Given the popularity of dating apps amongst young people, we thought
            Roomkast users would feel the most familiar with a similar interface
            but centered around finding a roommate rather than a romantic
            partner.
          </p>{" "}
        </div>
        <div style={styles.sectionHeader}>Ideating the Design</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            For this project, we wanted to practice iterative prototyping. We
            began the design process by sketching out different possible layouts
            for our interface.
          </p>
          <p>
            Each member of our team created a set of sketches detailing what we
            imagined the website to look like. We did so without any input from
            one another so we could generate a diversity of approaches to
            solving Roomkast’s goals.
          </p>
        </div>
        <Prototypes></Prototypes>
        <div style={styles.sectionHeader2}>
          Combining our Designs into Wireframes
        </div>
        <div style={styles.sectionText}>
          <p>
            After reviewing our sketches, we discussed which designs most
            effectively solved Roomkast’s goals as a startup.
          </p>
          <ul>
            <li>
              We decided a profile-focused rather than apartment-focused app
              better solved the description of Roomkast as a “profile-matching
              tool".
            </li>
            <li>
              We liked the survey idea to determine compatibility, but we felt
              that giving a predefined list of matches was too restrictive. We
              wanted users to be able to endlessly scroll through and discover
              profiles if they liked.
            </li>
            <li>
              We agreed that being able to create group profiles and message via
              the app were important features.
            </li>
          </ul>

          <p>
            From our discussion, we combined our sketches to produce a final set
            of wireframes we would use to create our high-fidelity prototype.
          </p>
        </div>
        <Lofi></Lofi>
        <div style={styles.sectionHeader}>Prototyping the Roomkast App</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            Next, we designed a high-fidelity interactive prototype in Figma to
            represent how the product would actually look and feel. We then
            iteratively improved on our interface by incorporating feedback from
            a design critique. Finally, we conducted remote usability testing to
            evaluate how well our interface worked.
          </p>
        </div>
        <div style={styles.sectionHeader2}>Drafting the Initial Prototype</div>
        <div style={styles.sectionText}>
          <p>
            Based on our combined wireframes, we made an initial prototype of
            the Roomkast app. We didn’t include all possible interactions or
            screens, but implemented enough to explore and test the key
            functionalities of the app.
          </p>
        </div>
        <FigmaEmbed
          style={styles.embed}
          url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvinTFwwNoHv1nI5GIxQFoK%2FInitial-Roomkast-Mockup%3Fnode-id%3D0%253A1"
        />
        <div style={styles.sectionHeader2}>
          Incorporating Feedback from Design Critique
        </div>
        <div style={styles.sectionText}>
          <p>
            To help improve our prototype, we sought feedback from our peers and
            an industry professional via a design critique. Below, you can see
            how we incorporated feedback from the critique to revise our
            high-fidelity prototype.
          </p>
        </div>
        <Feedback></Feedback>
        <div style={styles.sectionHeader2}>
          Implementing Interaction Principles
        </div>
        <div style={styles.sectionText}>
          <p>
            Both when creating the initial mockup and when revising the
            prototype, we carefully considered the key principles of
            interaction, navigation, and hierarchy.
          </p>

          <b>Interaction</b>
          <ul>
            <li>
              High-contrast button design makes it very clear which elements are
              interactable
            </li>
            <li>
              Swiping on a conversation allows users pin a conversation, and
              blue pin icon shows feedback confirming conversation has been
              pinned
            </li>
            <li>
              Bookmark icon turns blue when the profile is saved, showing
              profile has been successfully bookmarked (Note: this feature's
              interaction has not been flushed out in the prototype; this is
              something we plan to implement in the future)
            </li>
            <li>
              On each profile, the “Message Now” button in the middle of the
              screen where it is easily accessible
            </li>
            <li>
              Messages screen contains a dropdown menu that gives users
              different options for sorting conversation{" "}
            </li>
          </ul>
          <b>Navigation</b>
          <ul>
            <li>
              Left and right arrows, as well as “Next” buttons in the
              preferences survey allow users to easily review and change their
              responses
            </li>
            <li>
              Besides the onboarding process, the navigation bar is always
              visible, so users can easily switch between different sections of
              the app.{" "}
            </li>
            <li>
              A navigation bar that utilizes not only common icons and text
              labels to make it clear what each option will lead to. The
              currently selected navbar option is blue, so users always
              understand where they are.
            </li>
            <li>
              Screens embedded deeper in the hierarchy, such as viewing a
              specific profile or conversation, have consistently styled “Back”
              buttons.
            </li>
          </ul>
          <b>Hierarchy</b>
          <ul>
            <li>
              Blue banners at the top of screens contain the name of current
              screen in large, bold tex
            </li>
            <li>
              In the profile view, dividing lines and section headers logically
              separate profile information
            </li>
            <li>
              Layout of elements creates a natural top-to-down reading flow,
              generally from more to less important information.
            </li>
            <li>
              Screens embedded deeper in the hierarchy, such as viewing a
              specific profile or conversation, have consistently styled “Back”
              buttons.
            </li>
          </ul>
          <p>
            Here’s our final design file and revised prototype. Please try it
            out!
          </p>
        </div>
        <FigmaEmbed
          style={styles.embed}
          url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvinTFwwNoHv1nI5GIxQFoK%2FInitial-Roomkast-Mockup%3Fnode-id%3D0%253A1"
        />
        <FigmaEmbed
          style={styles.embed}
          url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2QyauiqEDoUesYWrUto7Qt%2FFinal-Roomkast-Mockup%3Fnode-id%3D57%253A271%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D57%253A271"
        />
        <div style={styles.sectionHeader}>Remote Usability Testing</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <p>
            To evaluate our interface, we conducted usability testing. User
            testing is when you have someone use the interface/product that you
            have created and give feedback and suggestions about your design. To
            accomplish this remotely, we used the platform{" "}
            <a href="usertesting.com">UserTesting.com</a>. We configured the
            test so that users would interact with the prototype on their phone.
          </p>
        </div>
        <div style={styles.sectionHeader2}>Defining the Task</div>
        <div style={styles.sectionText}>
          <p>
            We wanted to choose a task that would explore Roomkast’s primary
            functionality: to find someone compatible to live with. Eventually,
            we settled on a task that most real users of the app would
            accomplish: creating an account and messaging a potential roommate.
            In our testing instructions we made sure to carefully explain how to
            interact with the Figma prototype, as well as thoroughly explain the
            substeps involved in our overall task.{" "}
          </p>
        </div>
        <div style={styles.sectionHeader2}>Testing Instructions</div>
        <div style={styles.sectionText}>
          <ol>
            <li>Select a login method and create an individual profile. </li>
            <li>Follow the prompts to create an account. </li>
            <li>
              Next, look through the potential housemate candidates – you can
              interact with the discovery page and look at their profiles.
            </li>
            <li>
              Before you check your messages, reach out to Amelia (a potential
              housemate) by sending her a message.
            </li>
            <li>
              After you send your message to Amelia, pin her conversation in the
              messages tab.
            </li>
            <li>Lastly, sort the conversations by compatibility.</li>
          </ol>
          <p>
            We also came up with post-test questions that users would respond to
            after interacting with the prototype to gain further insight into
            our interface.
          </p>
        </div>
        <div style={styles.sectionHeader2}>Post-Test Questions</div>
        <div style={styles.sectionText}>
          <ol>
            <li>
              Were you able to complete the task? If not, what prevented you?
            </li>
            <li>
              Would you like to see more, less, or the same information on the
              cards on the discovery screen? Which elements would you like to
              see added or removed?
            </li>
            <li>
              What did the bookmark shaped icon below each profile indicate to
              you?
            </li>
            <li>
              Think of the last time you were looking for a roommate. What
              information on the profiles would have been the most helpful for
              you?
            </li>
            <li>How difficult was it for you to send a message to Amelia?</li>
            <li>What do you think about the design of the app?</li>
          </ol>
        </div>
        <div style={styles.sectionHeader2}>Analyzing Our Results</div>
        <div style={styles.sectionText}>
          {" "}
          <p>
            Here’s the summary of our test results. You can also click on the
            below links to view the full testing video for each user:
          </p>
          <ul>
            <li>
              <a href="https://app.usertesting.com/v/0a99577c-0604-497a-b18b-832938dc3e73?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes">
                User 1 Testing Video
              </a>
            </li>
            <li>
              <a href="https://app.usertesting.com/v/02b7f4b3-ec7d-4d90-8176-bdd043d10892?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes&shared_via=link">
                User 2 Testing Video
              </a>
            </li>
            <li>
              <a href="https://app.usertesting.com/v/f5bdb4f6-6652-43ca-9888-b7b52afc5435?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes&shared_via=link">
                User 3 Testing Video
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.sectionHeader2}>Summary of Results</div>
        <div style={styles.sectionText}>
          {" "}
          <p>
            Generally, users enjoyed the cleanliness of the design coupled with
            the fonts and colors chosen. They found the design to be simple and
            undistracting, and they understood the compatibility system without
            need for further explanation. Additionally, all three users believed
            that they were able to complete the task successfully and rated the
            easiness of the task as a ⅘.
          </p>
        </div>
        <div style={styles.sectionHeader}>Reflection</div>
        <hr></hr>
        <div style={styles.sectionText}>
          <ol>
            <li>
              We were able to turn our wireframes into an intuitive and
              functional prototype
            </li>
            <li>
              We learned a lot from the studio critique and user tests, and the
              importance of the iterative design process.
            </li>
            <li>
              In future iterations, we will adjust the scrolling issue to make
              each page more responsive to varying screen sizes. Additionally,
              we will flush on other interactions such as archiving and deleting
              messages.
            </li>
          </ol>
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
    background: "darkblue",
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
    color: "darkblue",
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
  center: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  embed: {
    width: "100%",
    height: "600px",
  },
};

export default Iterative;
