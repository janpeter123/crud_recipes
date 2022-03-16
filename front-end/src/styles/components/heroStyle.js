const heroStyle_mobile = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(/assets/hero.png)",
  height: "12rem",
  backgroundSize: "cover",
  marginTop: "2%",
  borderRadius: "6px",
  filter: "drop-shadow(-5px 8px 4px rgba(0, 0, 0, 0.25))",
  color: "#FFF",
  textAlign: "left",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
};

const heroStyle_desktop = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(/assets/hero.png)",
  height: "26rem",
  backgroundSize: "cover",
  backgroundPosition:"center",
  marginTop: "2%",
  borderRadius: "12px",
  filter: "drop-shadow(-5px 8px 4px rgba(0, 0, 0, 0.25))",
  color: "#FFF",
  textAlign: "left",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  fontSize:"2rem",
};
const searchBarStyle = { backgroundColor: "white", borderRadius: "2rem" };

export { heroStyle_mobile, searchBarStyle, heroStyle_desktop };
