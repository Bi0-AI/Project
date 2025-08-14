


import Styles from"./Outdoor-Products-LIst.module.css";
export default function SellOutdoorProducts() {
  const products = [
    { id: 1, name: "OSMO 369", image: "/OutdoorPower/outdoor1.webp" },
    { id: 2, name: "DJI RS 4 MINI", image: "/OutdoorPower/outdoor2.webp" },
    { id: 3, name: "DJI RS 4", image: "/OutdoorPower/outdoor3.webp" },
    { id: 4, name: "OSMO ACTION 4", image: "/OutdoorPower/outdoor6.webp" },
    { id: 5, name: "DJI RONIN 4D", image: "/OutdoorPower/outdoor7.webp"},
    { id: 6, name: "OSMO ACTION 5 PRO", image: "/OutdoorPower/outdoor7.webp" },
    { id: 7, name: "DJI MAVIC 4PRO", image: "/OutdoorPower/outdoor9.webp" },
    { id: 8, name: "OSMO 369", image: "/OutdoorPower/outdoor10.webp"},
    { id: 9, name: "OSMO 369", image: "/OutdoorPower/outdoor4.png"},
    { id: 10, name: "OSMO 369", image: "/OutdoorPower/outdoor5.jpg"},
]; 

  return (
    <div className={Styles.sellProducts}>
      <h1>Choose Your best</h1>

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

