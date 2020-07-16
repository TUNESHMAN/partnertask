import React, { useState } from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function Favorites() {
  let favorite = JSON.parse(localStorage.getItem("favoriteList"));
  const [favPhoto, setFavPhoto] = useState(favorite);
  const handleDelete = (date) => {
    const filteredPhoto = favorite.filter((day) => day.date !== date);
    localStorage.setItem("favoriteList", JSON.stringify(filteredPhoto));
    const deletedPhotos = JSON.parse(localStorage.getItem("favoriteList"));
    setFavPhoto(deletedPhotos);
  };

  return (
    <div className="fav-container">
      {favPhoto.length < 1 ? (
        <h1 className="empty-fav">You do not have favorites</h1>
      ) : (
        <div className="fav-card">
          {favPhoto.map((fav) => (
            <div>
              <Card
                hoverable
                style={{
                  width: 300,
                  borderRadius: "12px",
                  marginBottom: "18px",
                }}
                cover={<img alt="potd" src={fav.hdurl} />}
                actions={[
                  <DeleteOutlined
                    key="eye"
                    onClick={() => handleDelete(fav.date)}
                  />,
                ]}
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
