import React from "react";
import NavigationBar from "../navigation/Navbar";

function Credits() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={styles.wrapper}>
        {/* --- Introduction ---- */}
        <div style={styles.title}>
          ~ Credits ~<hr></hr>
        </div>
        <div style={styles.text}>
          <p>
            Here are links crediting all of the artists whose artwork and
            digital assets used to make this project possible!
          </p>
          <hr></hr>
        </div>
        <div style={styles.text}>
          <p>
            "Boba Tea" (https://skfb.ly/6UpwE) by 🎀 ★彡[ꜰᴇʟɪx ʏᴀᴅᴏᴍɪ]彡★ 🎀 is
            licensed under Creative Commons Attribution
            (http://creativecommons.org/licenses/by/4.0/). <br></br>
            <br></br> Book
            https://sketchfab.com/3d-models/old-hardcover-book-2c80b3cb53684d9abc46d7ce5a3833c4
            <br></br>
            <br></br> Astronaut
            https://sketchfab.com/3d-models/little-astronaut-2898a4b265d943919ca830e7d746ac13
            <br></br>
            <br></br>{" "}
            <a href="https://storyset.com/education">
              Education illustrations by Storyset{" "}
            </a>
            https://www.vecteezy.com/vector-art/2876937-bubble-milk-tea-design-collection-pearl-milk-tea-boba-milk-tea-yummy-drinks-coffees-with-doodle-style-banner-vector-illustration
            <br></br>
            <br></br> Boba Image for Banner -
            https://www.freepik.com/free-vector/hand-drawn-bubble-tea-with-strawberry_9905020.htm#query=boba&position=2&from_view=search&track=sph
            Rocket Icon
            <br></br>
            <br></br>{" "}
            <a
              href="https://www.flaticon.com/free-icons/rocket"
              title="rocket icons"
            >
              Rocket icons created by Freepik - Flaticon
            </a>
            <br></br>
            <br></br>
            <a href="https://www.freepik.com/free-vector/cute-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_18380938.htm#query=labrador%20logo&position=2&from_view=keyword">
              Image by catalyststuff
            </a>{" "}
            on Freepik
            <br></br>
            <br></br>
            <a href="https://www.freeiconspng.com/img/3346">
              Heart Icon Png Free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "80%",
    margin: "auto",
  },
  caption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "40%",
    maxHeight: "400px",
  },

  title: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    width: "100%",
    marginTop: "30px",
    marginBottom: "30px",
  },
  text: {
    margin: "3%",
    fontWeight: "500",
    fontSize: "1.5rem",
    color: "black",
  },
  introText: {
    display: "flex",
    fontWeight: "500",
    fontSize: "1.8rem",
    color: "black",
  },
};

export default Credits;
