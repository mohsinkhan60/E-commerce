import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProducts from "./SingleProducts";
import Card from "./Card";
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";

export const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(29, 29, 29, 0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgb(98, 84, 243, 0.5 )",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgba(132 144 255) 0%, rgba(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.2)0px 1px 3px 0px, rgba(27, 31, 35, 0.15)0px 0px 0px 1px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SingleProducts/:id" element={<SingleProducts />} />
          <Route path="/Card" element={<Card />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
