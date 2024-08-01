import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import HeroSection from "./HeroSection";
const data = {
  name : "Mohsin Store"
}

export const Home = () => {
  return <><HeroSection mydata={data} />;
  <Services />
  <Trusted />
  </>;
};


export default Home;
