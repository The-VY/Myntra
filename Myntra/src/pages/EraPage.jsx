import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigation } from "react-router-dom";
import Pants from "./image/brown pants.png"
import Blouse from "./image/blue blouse.png"
import Shirt from "./image/white shirt.png"
import Skirt from "./image/green skirt .png"
import Cardigan from "./image/yellowcardigan.png"
import Dress from "./image/pink dress.png"
const EraPage = () => {
  const data = [
    {
      "Item Name": "Jacket",
      'Era': "40s",
      'Color': "Brown",
      'Length': "Long",
      'Material': "Wool",
      "Image src": "40s",
    },
    {
      "Item Name": "Blouse",
      'Era': "40s",
      'Color': "White",
      'Length': "Medium",
      'Material': "Silk",
      "Image URL": "http://example.com/blouse_40s.jpg",
    },
    {
      "Item Name": "Skirt",
      'Era': "40s",
      'Color': "Navy",
      'Length': "Long",
      'Material': "Cotton",
      "Image URL": "http://example.com/skirt_40s.jpg",
    },
    {
      "Item Name": "Dress",
      'Era': "40s",
      'Color': "Red",
      'Length': "Long",
      'Material': "Wool",
      "Image URL": "http://example.com/dress_40s.jpg",
    },
    {
      "Item Name": "Hat",
      'Era': "40s",
      'Color': "Black",
      'Length': "Short",
      'Material': "Felt",
      "Image URL": "http://example.com/hat_40s.jpg",
    },
    {
      "Item Name": "Coat",
      'Era': "40s",
      'Color': "Gray",
      'Length': "Long",
      'Material': "Wool",
      "Image URL": "http://example.com/coat_40s.jpg",
    },
    {
      "Item Name": "Shirt",
      'Era': "50s",
      'Color': "White",
      'Length': "Medium",
      'Material': "Cotton",
      "Image URL": Shirt,
    },
    {
      "Item Name": "Dress",
      'Era': "50s",
      'Color': "Pink",
      'Length': "Long",
      'Material': "Silk",
      "Image URL": Dress,
    },
    {
      "Item Name": "Cardigan",
      'Era': "50s",
      'Color': "Yellow",
      'Length': "Medium",
      'Material': "Wool",
      "Image URL": Cardigan,
    },
    {
      "Item Name": "Skirt",
      'Era': "50s",
      'Color': "Green",
      'Length': "Medium",
      'Material': "Cotton",
      "Image URL": Skirt,
    },
    {
      "Item Name": "Blouse",
      'Era': "50s",
      'Color': "Blue",
      'Length': "Short",
      'Material': "Silk",
      "Image URL": Blouse,
    },
    {
      "Item Name": "Pants",
      'Era': "50s",
      'Color': "Brown",
      'Length': "Long",
      'Material': "Wool",
      "Image URL": Pants,
    },
    {
      "Item Name": "Skirt",
      'Era': "60s",
      'Color': "Red",
      'Length': "Short",
      'Material': "Polyester",
      "Image URL": "http://example.com/skirt_60s.jpg",
    },
    {
      "Item Name": "Dress",
      'Era': "60s",
      'Color': "Orange",
      'Length': "Long",
      'Material': "Cotton",
      "Image URL": "http://example.com/dress_60s.jpg",
    },
    {
      "Item Name": "Trousers",
      'Era': "60s",
      'Color': "Black",
      'Length': "Long",
      'Material': "Wool",
      "Image URL": "http://example.com/trousers_60s.jpg",
    },
    {
      "Item Name": "Blouse",
      'Era': "60s",
      'Color': "Purple",
      'Length': "Medium",
      'Material': "Silk",
      "Image URL": "http://example.com/blouse_60s.jpg",
    },
    {
      "Item Name": "Jacket",
      'Era': "60s",
      'Color': "Green",
      'Length': "Short",
      'Material': "Cotton",
      "Image URL": "http://example.com/jacket_60s.jpg",
    },
    {
      "Item Name": "Shirt",
      'Era': "60s",
      'Color': "Blue",
      'Length': "Medium",
      'Material': "Polyester",
      "Image URL": "http://example.com/shirt_60s.jpg",
    },
    {
      "Item Name": "Dress",
      'Era': "90s",
      'Color': "Black",
      'Length': "Long",
      'Material': "Silk",
      "Image URL": "http://example.com/dress_90s.jpg",
    },
    {
      "Item Name": "T-Shirt",
      'Era': "90s",
      'Color': "White",
      'Length': "Short",
      'Material': "Cotton",
      "Image URL": "http://example.com/tshirt_90s.jpg",
    },
    {
      "Item Name": "Jeans",
      'Era': "90s",
      'Color': "Blue",
      'Length': "Long",
      'Material': "Denim",
      "Image URL": "http://example.com/jeans_90s.jpg",
    },
    {
      "Item Name": "Jacket",
      'Era': "90s",
      'Color': "Green",
      'Length': "Medium",
      'Material': "Nylon",
      "Image URL": "http://example.com/jacket_90s.jpg",
    },
    {
      "Item Name": "Skirt",
      'Era': "90s",
      'Color': "Pink",
      'Length': "Short",
      'Material': "Polyester",
      "Image URL": "http://example.com/skirt_90s.jpg",
    },
    {
      "Item Name": "Hoodie",
      'Era': "90s",
      'Color': "Gray",
      'Length': "Medium",
      'Material': "Fleece",
      "Image URL": ".image/hoodie_90s.png",
    },
    {
      "Item Name": "T-Shirt",
      'Era': "2000s",
      'Color': "Blue",
      'Length': "Short",
      'Material': "Cotton",
      "Image URL": "http://example.com/tshirt_2000s.jpg",
    },
    {
      "Item Name": "Hoodie",
      'Era': "2000s",
      'Color': "Black",
      'Length': "Medium",
      'Material': "Fleece",
      "Image URL": "./image/hoodie.png",
    },
    {
      "Item Name": "Jeans",
      'Era': "2000s",
      'Color': "Dark Blue",
      'Length': "Long",
      'Material': "Denim",
      "Image URL": "http://example.com/jeans_2000s.jpg",
    },
    {
      "Item Name": "Dress",
      'Era': "2000s",
      'Color': "Pink",
      'Length': "Short",
      'Material': "Silk",
      "Image URL": "http://example.com/dress_2000s.jpg",
    },
    {
      "Item Name": "Jacket",
      'Era': "2000s",
      'Color': "Brown",
      'Length': "Medium",
      'Material': "Leather",
      "Image URL": "http://example.com/jacket_2000s.jpg",
    },
    {
      "Item Name": "Skirt",
      'Era': "2000s",
      'Color': "White",
      'Length': "Short",
      'Material': "Cotton",
      "Image URL": "http://example.com/skirt_2000s.jpg",
    },
  ];

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastPath = pathSegments[pathSegments.length - 1];

  const [filterData, setFilterData] = useState([]);
  const [currentEra, setCurrentEra] = useState("");

  useEffect(() => {
    setCurrentEra(lastPath); // Update currentEra when lastPath changes
  }, [lastPath]);

  useEffect(() => {
    // Filter data based on currentEra
    const filteredData = data.filter((item) => item["Era"] === currentEra);
    setFilterData(filteredData);
    console.log(filterData);
  }, [currentEra]);
  
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'nowrap', // Keep items in a single line
    gap: '16px', // Adjust the spacing between cards as needed
  };
  
  const imgStyle = {
    width: '200px', // Adjust these values as needed
    height: '200px',
  };

  return (
    <>
    
      <NavBar />
      <div style={cardContainerStyle}>
      <div className="container">
        {filterData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item["Image URL"]} className="card-img-top" alt={item["Item Name"]} style={{ width: '400px', height: '400px'}}/>
            <div className="card-body">
              <h5 className="card-title">{item["Item Name"]}</h5>
              <p className="card-text">
                Color: {item["Color"]}, Length: {item["Length"]}, Material: {item["Material"]}
              </p>
              {/* Example of a button to view more details */}
              <a href="/" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    
    </>
  );
};

export default EraPage;