
import Styles from "./all-products.module.css"
export default function AllProducts() {
  const products = [
    { id: 1, name: "DJI FLIP", image: "/AerialDrons/areial1.png" },
    { id: 2, name: "DJI NEO", image: "/AerialDrons/areial2.jpg" },
    { id: 3, name: "DJI AVATA 2", image: "/AerialDrons/areial3.png" },
    { id: 4, name: "DJI COMBO 3d", image: "/AerialDrons/areial4.jpg" },
    { id: 5, name: "DJI MINI 4 PRO", image: "/AerialDrons/areial5.png" },
    { id: 6, name: "DJI AIR 3s", image: "/AerialDrons/areial6.jpg" },
    { id: 7, name: "DJI MAVIC 4PRO", image: "/AerialDrons/areial7.png" },


  
    { id: 8, name: "OSMO 369", image: "/HandheldDrons/handheld1.png" },
    { id: 9, name: "DJI RS 4 MINI", image: "/HandheldDrons/handheld2.jpg" },
    { id: 10, name: "DJI RS 4", image: "/HandheldDrons/handheld3.png" },
    { id: 11, name: "OSMO ACTION 4", image: "/OutdoorPower/outdoor4.png" },
    { id: 13, name: "DJI RONIN 4D", image: "/HandheldDrons/handheld6.jpg"},
    { id: 14, name: "OSMO ACTION 5 PRO", image: "/HandheldDrons/handheld7.jpg" },
    { id: 15, name: "DJI MAVIC 4PRO", image: "/HandheldDrons/handheld8.jpg" },
    { id: 16, name: "OSMO 369", image: "/HandheldDrons/handheld9.jpg"},


    { id: 17, name: "OSMO 369", image: "/OutdoorPower/outdoor1.webp" },
    { id: 18, name: "DJI RS 4 MINI", image: "/OutdoorPower/outdoor2.webp" },
    { id: 19, name: "DJI RS 4", image: "/OutdoorPower/outdoor3.webp" },
    { id: 20, name: "OSMO ACTION 4", image: "/OutdoorPower/outdoor6.webp" },
    { id: 21, name: "DJI RONIN 4D", image: "/OutdoorPower/outdoor7.webp"},
    { id: 22, name: "OSMO ACTION 5 PRO", image: "/OutdoorPower/outdoor7.webp" },
    { id: 23, name: "DJI MAVIC 4PRO", image: "/OutdoorPower/outdoor9.webp" },
    { id: 24, name: "OSMO 369", image: "/OutdoorPower/outdoor10.webp"},
    { id: 25, name: "OSMO 369", image: "/OutdoorPower/outdoor4.png"},
    { id: 26, name: "OSMO 369", image: "/OutdoorPower/outdoor5.jpg"},

  ];

   
  return (
    <div className={Styles.sellProducts}>
      <h1> Our Products List</h1>

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