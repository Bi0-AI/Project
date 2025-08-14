import styles from "./Learn.module.css";

export default function OutdoorProducts() {
  const drones = [
    {
      model: "DJI POWER 1000 V2",
      release: "2024",
      battery: "3546mAh",
      durability: "2 days",
      special: "Drone specialist combo battery",
    },
    {
      model: "DJI POWER 2000",
      release: "2024",
      battery: "5546mAh",
      durability: "4 days",
      special: "Drone specialist combo battery",
    },
    {
      model: "DJI POWER 500",
      release: "2025",
      battery: "6654 mAh",
      durability: "7 days",
      special: "Drone specialist combo battery",
    },
    {
      model: "OSMO K92",
      release: "2023",
      battery: "2590 mAh (or 3850 mAh+)",
      durability: "3 days",
      special: "Drone specialist combo battery",
    },
    {
      model: "DJI B2K90",
      release: "2023",
      battery: "3546mAh",
      durability: "6 days",
      special: "Drone specialist combo battery",
    },
    {
      model: "DJI QL2 2000DT",
      release: "2025",
      battery: "6546mAh",
      durability: "6 days",
      special: "Drone specialist combo battery",
    },
    {
      model: "DJIMo400",
      release: "2024",
      battery: "4276 mAh",
      durability: "4 days",
      special: "Drone specialist combo battery",
    },   {
      model: "RON-DOM K2",
      release: "2024",
      battery: "4276 mAh",
      durability: "6 days",
      special: "Drone specialist combo battery",
    },   {
      model: "DJI Power V2",
      release: "2024",
      battery: "4276 mAh",
      durability: "4 days",
      special: "Drone specialist combo battery",
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
            {drone.durability && <li><strong>Flight Time:</strong> {drone.durability}</li>}
            <li><strong>Special Feature:</strong> {drone.special}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
