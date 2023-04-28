import React from "react";
import Navbar from "../components/Navbar";
// import {  Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import '../Views/Home.css';
import System from "../components/System-solution";
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
   <>
   <Navbar/>
   <div className="w-full h-[100vh] bg-cover  flex justify-center items-center bg-[url('https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/342539187_948379019807766_2844884722717296136_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XJIiuquj9awAX9hldMx&_nc_ht=scontent.fuln2-2.fna&oh=03_AdQ0nt7rGrR8BSSoVKHAp6Emyz6yB6TU9OvpklCM-IV0yg&oe=646FFB14')] justify-center items-center">
        <h1  id="Home-poster-text" className="text-white text-6xl mt-[100px]">АМЬДРАЛЫН ХЭВ МАЯГАА ЧАНАРЖУУЛ</h1> 
   </div>
   <div  id="box1"className="w-full h-[100vh] bg-blue-500 ">
      <div className="w-full  h-[10%] bg-orange-500 flex justify-center absolute mb-[12%] items-center "> 
        <h1 id="System-solution-text " className="text-4xl text-black bg-green-500">СИСТЕМ ШИЙДЭЛ</h1>
      </div>
      <div className="w-[80%] h-[10%] bg-red-500 flex justify-center">
        <Fade bottom>
         <System
            title='PRO-AV'
            ImageUrl='https://c1.wallpaperflare.com/preview/407/546/511/controls-amp-mixer-lights.jpg'
         >
         </System>
        
         </Fade>
      </div>
   </div>

   </>
   
   
 
    
    
  )
}

export default Home


{/* <ScrollContainer>
<ScrollPage>
   <Animator  animation={batch(Fade(), Sticky(), MoveOut(0, -200))} >
   <span className="text-3xl text-white">АМЬДРАЛЫН ХЭВ МАЯГАА ЧАНАРЖУУЛ</span>
  
   </Animator>
</ScrollPage>
</ScrollContainer> */}




{/* <ScrollContainer>
<ScrollPage>
 <div className="w-full h-screen bg-green-500">
    <Animator  animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
    <span style={{ fontSize: "80px" }}>Систем шийдэлтэй танилцана уу Баярлалаа</span>
    <h1 ></h1>

    </Animator>
 </div>
</ScrollPage>
</ScrollContainer> */}