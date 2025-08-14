import styles from "./Learn.module.css";

export default function AgricultureDroneList() {
  const drones = [
    {
      model: "DJI Agras T30",
      release: "2024",
      battery: "3546mAh",
      flightTime: "4 days",
      special: "3D mapping and cinematography combo",
    },
    {
      model: "Hylio AG-122",
      release: "2024",
      battery: "5546mAh",
      flightTime: "2 days",
      special: "Immersive FPV drone for thrilling experiences",
    },
    {
      model: "DJI Agras T20",
      release: "2025",
      battery: "6654 mAh",
      flightTime: "5 days",
      special: "Triple-camera 6K, 360° gimbal, Sat-free RTH",
    },
    {
      model: "XAG P100 Agricultural Drone",
      release: "2023",
      battery: "2590 mAh (or 3850 mAh+)",
      flightTime: "3 days",
      special: "Sub-249 g, 4K HDR, O4 video transmission" ,
    },
    {
      model: "Yamaha Fazer R G2",
      release: "2023",
      battery: "3546mAh",
      flightTime: "3 days",
      special: "Beginner-friendly drone with FPV bundle available",
    },
    {
      model: "DJI Agras T40",
      release: "2025",
      battery: "6546mAh",
      flightTime: "5 days",
      special: "Ultra-light, 4K, folding design, great for indoors",
    },
    {
      model: "AgEagle RX60",
      release: "2024",
      battery: "4276 mAh",
      flightTime: "4 days",
      special: "1″ + 1/1.3″ dual camera, 4K/120 HDR, Omnidirectional sensing", 
    }, 
    
    
    {
      model: "Agras MG-1P",
      release: "2024",
      battery: "4276 mAh",
      flightTime: "4 days",
      special: "1″ + 1/1.3″ dual camera, 4K/120 HDR, Omnidirectional sensing" ,
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
