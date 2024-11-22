import React, { useEffect, useState } from 'react';
import { Container, H1 } from '../styles/MapSideBarStyles';

const Sidebar = () => {
  const [bakery, setBakery] = useState([]);

  useEffect(() => {
    // Simulate fetching bakery data with a delay (e.g., from an API)
    const fetchBakeryData = () => {
      const bakeryData = [
        {
          name: "Bakery A",
          distance: "200m",
          details: "Open daily 8 AM - 8 PM",
          image: "link_to_image_A", // Replace with actual image URL
        },
        {
          name: "Bakery B",
          distance: "500m",
          details: "Specialty bread and pastries",
          image: "link_to_image_B", // Replace with actual image URL
        },
        // Add more bakeries as needed
      ];

      // Simulating a delay like fetching data from an API
      setTimeout(() => {
        setBakery(bakeryData);
      }, 1000); // Simulating 1 second delay
    };

    fetchBakeryData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="sidebar">
      <h1>내 주변 빵집 찾기</h1>
      <div>
        <button>거리순</button>
        <button>프랜차이즈</button>
        <button>개인 빵집</button>
      </div>
      <ul className="bakery-list">
        {bakery.length === 0 ? (
          <li>Loading bakery data...</li> // Show a loading message until data is fetched
        ) : (
          bakery.map((bakery, index) => (
            <li key={index} className="bakery-item">
              <img src={bakery.image} alt={bakery.name} />
              <div className="bakery-details">
                <strong>{bakery.name}</strong><br />
                <span>{bakery.distance}</span><br />
                <span>{bakery.details}</span>
              </div>
            </li>
          ))
        )}
      </ul>
      <ul>Designed by 빵사조 in South Korea.</ul>
    </div>
  );
};

export default Sidebar;