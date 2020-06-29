import React from "react";
import { Card } from "antd";

function Favorites() {
  const favs = JSON.parse(localStorage.getItem("favoriteList"));

  return (
    <div className="fav-container">
      {favs.length < 1 ? (
        <h1 className="empty-fav">You do not have favorites</h1>
      ) : (
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
                  <span className="title">Title: </span>
                  <span className="favName">{fav.title}</span>
                </p>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
