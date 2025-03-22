import { useEffect, useRef } from 'react';
import './App.css';
import Projects from './ClubProjects/Projects';
import Footer from './Footer/Footer';
import Gridsection from './Gridsection/Gridsection';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { motion, useSpring, useScroll } from "framer-motion";
import ImageSection from './ImageSection/ImageSection';
import Loader from './Loader/Loader';

function App() {
  const appRef = useRef(null);
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: appRef.current,
      smooth: true,
    });
  }, []);
  return (
    <div className="App" ref={appRef}>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          height:'2px',
          zIndex:10,
          backgroundColor: "#0da34e",
        }}
      />
      <Navbar />
      <Header />
      <Gridsection />
      <ImageSection/>
      <Loader/>
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
