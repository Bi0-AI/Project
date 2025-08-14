import styles from "./Learn.module.css";

export default function IndustryDroneList() {
  const drones = [
    {
      model: "DJI Matrice 300 RTK",
      release: "2024",
      battery: "3546mAh",
      flightTime: "4 days",
      special: "3D mapping and working heardly",
    },
    {
      model: "DJI Mavic 3 Enterprise",
      release: "2024",
      battery: "5546mAh",
      flightTime: "2 days",
      special: "Immersive FPV drone for thrilling experiences",
    },
    {
      model: "Flyability Elios 3",
      release: "2025",
      battery: "6654 mAh",
      flightTime: "5 days",
      special: "Sub-249 g, 4K HDR, O4 video transmission" 
    },
    {
      model: "Skydio X2",
      release: "2023",
      battery: "3546mAh",
      flightTime: "3 days",
      special: "Beginner-friendly drone with FPV bundle available" 
    },
    {
      model: "Dji Mavic pro",
      release: "2025",
      battery: "6546mAh",
      flightTime: "5 days",
      special: "Ultra-light, working 24h" 
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
