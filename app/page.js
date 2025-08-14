"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home-css/Home.module.css"
import Image from "next/image";
import Link from "next/link";

// Ayta korle: Server a render korbar shomoi "react-slick" ke Sckit korbe.....and dynamic import korte hobe.
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    "/Dji-HomePage/image-slider/home2.jpg",
    "/Dji-HomePage/image-slider/home1.jpg",
    "/Dji-HomePage/image-slider/home3.jpg",
    "/Dji-HomePage/image-slider/home4.jpg",
    "/Dji-HomePage/image-slider/home5.jpg",
  ];



  return (
    <main>
      {/* Image Slide er jonno */}
      <Slider {...settings}>
        {slides.map((src, idx)=>( // Ay first bracket er mani holo ami return kortasi...
          <div key={idx} className={styles.slideContainer}>
          <img className={styles.sliderImage}
            src={src}
            alt={`slide-${idx}`}
          />
          </div>
        ))}
      </Slider>









{/* SLIDER ER NICHER IMAGE*/}

<div className={styles.image}>  {/* Main container class start....
    Ei div hocche main wrapper jar moddhe sob box gula thakbe.
    Ei class diye pura section ke grid ba flex diye arrange kora hoye thakbe. */}
  

 {/* Box class Start:  Dhorlam, Jate Child class Nijer Moto Change korte pare... */}
  <div className={styles.box} style={{ backgroundColor: "#ffe0e0" }}>
      
      {/* Child Class, caption  start: Caption er jonno  */}
      <div className={styles.caption}> 
         <p>Mobile phone stabilizer for precies trackiong in all scenarios</p>
         <h3>DJI Osmo 7 </h3>
         <h6>Big or small scenes, always keep up</h6>

         <div className={styles.buyitNow}>
           <h2><Link href="/all-page/handheld-photography"> Buy it now &gt;</Link></h2>
           <h3><Link href="/all-page/handheld-photography/learn-more" > Learn more &gt;</Link></h3>
         </div>

       </div> {/* caption class end */}
  
       <Link href="/"> 
         <Image src="/Dji-HomePage/djiosmo-7.webp" alt="dji-osmo7" width={800} height={600} /> 
       </Link>
    </div> {/* box class end */}



{/* Box class Start:  Dhorlam, Jate Child class Nijer Moto Change korte pare... */}
  <div className={styles.box} style={{ backgroundColor: "#e0f7ff" }}>
   {/* Child Class, caption  start: Caption er jonno  */}
    <div className={styles.caption}> 
       <p>All-round Vlog Drone</p>
       <h3>DJi FLIP</h3>
       <h6>Everythin is picturesque, and the people and scenery are alll  brilliant.</h6>
        {/* Buy and see more er jonno */}
        <div className={styles.djiFlip}>
           <h2><Link href="/all-page/aerial-photography"> Buy it now &gt;</Link></h2>
           <h3><Link href="/all-page/aerial-photography/learn-more"> Learn more &gt;</Link></h3>
         </div>

     </div> {/* caption class end */}
    
    <Link href="/">
      <Image src="/AerialDrons/areial3.png" alt="dji flip" width={700} height={400} />
    </Link>
  </div> {/* box class end */}




{/* Box class Start:  Dhorlam, Jate Child class Nijer Moto Change korte pare... */}
<div className={styles.box} style={{ backgroundColor: "#e0f7ff" }}>
 {/* Child Class, caption  start: Caption er jonno  */}
       <div className={styles.caption}> 
          <p>Ultra-flagship quality sport camera</p>
          <h3> OSMO ACTION 5  PRO </h3>
          <h6>Brilliant day and night</h6>

         {/* Buy and see more er jonno */}
          <div className={styles.buyitNow}>
           <h2><Link href="/all-page/handheld-photography"> Buy it now &gt;</Link></h2>
           <h3><Link href="/all-page/handheld-photography/learn-more"> Learn more &gt;</Link></h3>
         </div>
        
        </div> {/* caption class end */}
       
       <Link href="/">  
         <Image src="/HandheldDrons/handheld5.png" alt="dji flip" width={700} height={400} />
       </Link>
  </div> {/* box class end */}
  


{/* Box class Start:  Dhorlam, Jate Child class Nijer Moto Change korte pare... */}
  <div className={styles.box} style={{ backgroundColor: "#ffe0e0" }}>

 {/* Child Class, caption  start: Caption er jonno  */}
     <div className={styles.caption}>
        <p>Drone buying Guide</p>
        <h4> How choose an aerial <br></br> photography drone</h4>
        <h6 className={styles.paragraph}> For an overview and comparison, see here</h6>
         
         {/* Buy and see more er jonno */}
          <div className={styles.buyitNow}>
           <h2><Link href="/all-page/aerial-photography"> Buy it now &gt;</Link></h2>
           <h3><Link href="/all-page/handheld-photography"> Help me choose &gt;</Link></h3>
         </div>
     
      </div> {/* caption class end */}
      
      <Link href="/"> 
        <Image src="/Dji-HomePage/areial7.png" alt="dji flip" width={700} height={400} />
      </Link>
  </div> {/* box class end */}
  
</div>  {/* Main container class end */}









{/* SET IMAGE, VIDEO,  AND IMAGE */}

 {/* Parents Class(container) Dholam,  Jate Child class nijer moto Change korte pare...   */}
<div className={styles.container}>

  {/* START: Left image er jonno, Child Calss */}
  <div className={styles.sideImage}>
    <Image
      src="/HandheldDrons/handheld2.jpg"
      alt="Left Side Image"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  </div>{/* Child class END */}




{/* Middle Video:  Video er jonno Parents Class, Dhorlam  */}
    {/* for seing:  buy and see more .... */}
    <div className={styles.seeMoreInvideo}>
    <h1>Fliming equipment<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Osmo 360</h1>
    <h3> <Link href="/all-page/handheld-photography/learn-more">Learn more &gt; </Link> </h3>
    <h4>  <Link href="/all-page/handheld-photography">Buy it now &gt; </Link></h4> 
   <Link href="/all-page/aerial-photography">
    <video  className={styles.video}
    src="/Dji-HomePage/Video.mp4.mp4"
    autoPlay
    muted
    loop
  />
  </Link>
  </div>





{/* START: Right image er jonno, Child Calss */}
  <div className={styles.sideImage}>
    <Image
      src="/HandheldDrons/handheld6.jpg"
      alt="Right Side Image"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  </div> {/* END: child class */}



{/* Parents class: container END */}
</div>


</main>
  );
}
