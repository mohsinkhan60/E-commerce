// import { useContext } from "react";
import HeroSection from "./HeroSection";
// import { AppContext } from "./Context/ProductContext";

export const About = () => {
  // const myName = useContext(AppContext);
  const data = {
    name: ".... Mohsin   Khan .... E-commerce",
  };
  return (
    <>
      {/* {myName} */}
      <HeroSection mydata={data} />
    </>
  );
};
export default About;

