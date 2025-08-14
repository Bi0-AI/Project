

import styles from "./Learn.module.css"
export default function HandheldDroneList() {
  const drones = [
    {
      model: "OSMO 369",
      release: "2024",
      battery: "3546mAh",
      flightTime: "60 min",
      special: "3D mapping and cinematography combo",
    },
    {
      model: "DJI RS 4 MINI",
      release: "2024",
      battery: "5546mAh",
      flightTime: "1.3 hour",
      special: "Immersive FPV drone for thrilling experiences",
    },
    {
      model: "DJI RS 4",
      release: "2025",
      battery: "6654 mAh",
      flightTime: "51 mins",
      special: "Triple-camera 6K, 360° gimbal, Sat-free RTH",
    },
    {
      model: "OSMO ACTION 4",
      release: "2023",
      battery: "2590 mAh (or 3850 mAh+)",
      flightTime: "34 mins (45 mins+)",
      special: "Sub-249 g, 4K HDR, O4 video transmission",
    },
    {
      model: "DJI RONIN 3D",
      release: "2023",
      battery: "3546mAh",
      flightTime: "30min",
      special: "Beginner-friendly drone with FPV bundle available" ,
    },

    {
      model: "OSMO ACTION 5 PRO",
      release: "2025",
      battery: "6546mAh",
      flightTime: "1 hour",
      special: "Ultra-light, 4K, folding design, great for indoors",
    },
    {
      model: "OSMO 369",
      release: "2024",
      battery: "4276 mAh",
      flightTime: "45 mins",
      special: "1″ + 1/1.3″ dual camera, 4K/120 HDR, Omnidirectional sensing",
    },  
    
    {
      model: "OSMO POCKET 3",
      release: "2023",
      battery: "2590 mAh (or 3850 mAh+)",
      flightTime: "34 mins (45 mins+)",
      special: "Sub-249 g, 4K HDR, O4 video transmission",
    },   
    
    {
      model: "OSMO MEGA 360 PRO",
      release: "2023",
      battery: "2590 mAh (or 3850 mAh+)",
      flightTime: "34 mins (45 mins+)",
      special: "Sub-249 g, 4K HDR, O4 video transmission",
    },
  ];



  
  return (
    <div className={styles.dronelist}>
        <div className={styles.heading}><h1>Products Details</h1></div>
      {drones.map((drone, index) => (
        <div key={index} className={styles.dronecard}>
          <h2><b>{drone.model}</b></h2>
          <ul>
            {drone.release && <li><strong>Release Year:</strong> {drone.release}</li>}
            {drone.battery && <li><strong>Battery:</strong> {drone.battery}</li>}
            {drone.flightTime && <li><strong>Flight Time:</strong> {drone.flightTime}</li>}
            <li><strong>Special Feature:</strong> {drone.special}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
