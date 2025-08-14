

import Styles from "./Handle-Products-List.module.css";
export default function SellHandleProducts() {
  const products = [
    { id: 1, name: "OSMO 369", image: "/HandheldDrons/handheld1.png" },
    { id: 2, name: "DJI RS 4 MINI", image: "/HandheldDrons/handheld2.jpg" },
    { id: 3, name: "DJI RS 4", image: "/HandheldDrons/handheld3.png" },
    { id: 4, name: "OSMO ACTION 4", image: "/AerialDrons/areial5.png" },
    { id: 5, name: "DJI RONIN 4D", image: "/HandheldDrons/handheld6.jpg"},
    { id: 6, name: "OSMO ACTION 5 PRO", image: "/HandheldDrons/handheld7.jpg" },
    { id: 7, name: "DJI MAVIC 4PRO", image: "/HandheldDrons/handheld8.jpg" },
    { id: 8, name: "OSMO 369", image: "/HandheldDrons/handheld9.jpg"},
]; 

  return (
    <div className={Styles.sellProducts}>
      <h1>Choose Your Handheld Camera</h1>

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

