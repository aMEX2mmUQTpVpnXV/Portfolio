import React from "react";
import NavigationBar from "../navigation/Navbar";

function About() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={styles.wrapper}>
        {/* --- Introduction ---- */}
        <div style={styles.title}>
          ~ About ~<hr></hr>
        </div>
        <div style={styles.text}>Hello! My name is Anony Mous...</div>
        <div style={styles.text}>Left Empty to preserve anonymity</div>
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

export default About;
