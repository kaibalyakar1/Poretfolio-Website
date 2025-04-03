import { useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutSection from "./components/Home/About";
import SkillsComponent from "./components/Home/SkillsComponent";
import BlogSection from "./components/Home/BlogSection";
import ContactSection from "./components/Home/ContactSection";
import Footer from "./components/Home/Footer";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={skillsRef}>
        <SkillsComponent />
      </div>
      <div ref={blogsRef}>
        <BlogSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
