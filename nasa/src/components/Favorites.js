import React from "react";
import { Card } from "antd";

function Favorites() {
  const favs = JSON.parse(localStorage.getItem("favoriteList"));
  // console.log(favs);

  return (
    <div className="fav-container">
      <h1 className="fav-header">These are your favorites</h1>
      <div className="fav-card">
        {favs.map((fav) => (
          <div>
            <Card
              hoverable
              style={{
                width: 300,
                borderRadius: "12px",
                marginBottom: "18px",
              }}
              cover={<img alt="globe" src={fav.hdurl} />}
            >
              <p>
                <span className="favName">{fav.title}</span>
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
