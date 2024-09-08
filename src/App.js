import styled from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png";
import { About, Explanation, Contact, Main } from "./sections";
import { useEffect } from "react";



function App() {

  useEffect(()=>{


    let prevScrollTop = window.scrollY || document.documentElement.scrollTop;
let prevScrollDirection = '';



    const documentSize = document.body.offsetHeight;
    const sectionSize = window.innerHeight
    const documentSections = Math.floor(documentSize / sectionSize);
    const handleScroll=()=>{

      const scrollValue = window.scrollY
      const st = scrollValue || document.documentElement.scrollTop;
      
      if (st > prevScrollTop && prevScrollDirection !== 'down') {
        // downscroll code here
        console.log(sectionSize*2)
          if( scrollValue > 0 && scrollValue < sectionSize) window.scrollTo({top:sectionSize, behavior: "smooth"})
          if( scrollValue > sectionSize && scrollValue < (sectionSize * 2)) window.scrollTo({top:(sectionSize * 2), behavior: "smooth"})
          // if( scrollValue > sectionSize && scrollValue ) return window.scrollTo({top:sectionSize, behavior: "smooth"})
          
        prevScrollDirection = 'down';
      }
      else if (st < prevScrollTop && prevScrollDirection !== 'up') {
        // upscroll code
        if( scrollValue < sectionSize && scrollValue > 0 ) return window.scrollTo({top: 0,behavior: "smooth"})

        prevScrollDirection = 'up';
      }
      prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
      console.log({sectionSize, scrollValue  })
  
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    
    <AppContainer
    flex
    column
    align={"center"}
    padding={"0px 24px"}
    style={{gap:"24px"}}
    >
      <Main/>
      <Explanation/>
      <About/>
      <Contact/>   
 
    </AppContainer>
  
  );
}

export default App;

const AppContainer = styled(Container)`
background-image: url(${backgroundPattern});
background-size: 6%;
/* scroll-snap-type: y mandatory; */
/* overflow-y: scroll; */
  scrollbar-width: none;
  &:-webkit-scrollbar {
  display: none;
}
`;


