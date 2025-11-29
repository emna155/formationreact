import React, { useEffect, useState } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fakeProducts = [
      {
        id: 1,
        name: "Miel de Fleurs",
        price: 25,
        image:
          "https://cdn.pixabay.com/photo/2016/03/05/19/02/honey-1238473_1280.jpg",
      },
      {
        id: 2,
        name: "Miel d’Eucalyptus",
        price: 30,
        image:
          "https://cdn.pixabay.com/photo/2017/05/23/22/36/honey-2335570_1280.jpg",
      },
      {
        id: 3,
        name: "Pollen Brut",
        price: 18,
        image:
          "https://cdn.pixabay.com/photo/2016/11/21/15/53/pollen-1845730_1280.jpg",
      },
      {
        id: 4,
        name: "Cire d’Abeille Naturelle",
        price: 12,
        image:
          "https://cdn.pixabay.com/photo/2017/08/02/16/20/beeswax-2571781_1280.jpg",
      },
    ];

    setProducts(fakeProducts);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar transparent />

      {/* CONTENT */}
      <div className="pt-32 pb-20 px-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-12 text-center text-yellow-700">
          Boutique du Miel
        </h1>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="font-semibold text-xl text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">{product.price} TND</p>
                <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium">
                  Ajouter au Panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <FooterSmall absolute />
    </>
  );
}
