import styles from "./Learn.module.css";

export default function TransportationDroneList() {
  const drones = [
    {
      model: "DJI Agras T30",
      release: "2024",
      battery: "3546mAh",
      flightTime: "4 days",
      special: "Emergency transportation",
    },
    {
      model: "Hylio AG-122",
      release: "2024",
      battery: "5546mAh",
      flightTime: "2 days",
      special: "Engineering Transportation",
    },
    {
      model: "DJI Agras T20",
      release: "2025",
      battery: "6654 mAh",
      flightTime: "5 days",
      special: "Firefighting transport" 
    },
    {
      model: "XAG P100 Agricultural Drone",
      release: "2023",
      battery: "2590 mAh (or 3850 mAh+)",
      flightTime: "3 days",
      special: "Water transport"
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
