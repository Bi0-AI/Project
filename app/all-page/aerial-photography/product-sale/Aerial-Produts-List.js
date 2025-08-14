
import Styles from "./Areial-Products-List.module.css"
export default function SellAerialProducts() {
  const products = [
    { id: 1, name: "DJI FLIP", image: "/AerialDrons/areial1.png" },
    { id: 2, name: "DJI NEO", image: "/AerialDrons/areial2.jpg" },
    { id: 3, name: "DJI AVATA 2", image: "/AerialDrons/areial3.png" },
    { id: 4, name: "DJI COMBO 3d", image: "/AerialDrons/areial4.jpg" },
    { id: 5, name: "DJI MINI 4 PRO", image: "/AerialDrons/areial5.png" },
    { id: 6, name: "DJI AIR 3s", image: "/AerialDrons/areial6.jpg" },
    { id: 7, name: "DJI MAVIC 4PRO", image: "/AerialDrons/areial7.png" },
  ];

   
  return (
    <div className={Styles.sellProducts}>
      <h1>Choose Your Drones</h1>

      <div className={Styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={Styles.productCard}>
            <img src={product.image} alt={product.name} className={Styles.productImage} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}