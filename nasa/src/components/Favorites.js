import React, { useState } from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function Favorites() {
  let favs = JSON.parse(localStorage.getItem("favoriteList"));
  const [favdis, setfavdis] = useState(favs);
  const handleDelete = (date) => {
    const filtered_favs = favs.filter((day) => day.date !== date);
    localStorage.setItem("favoriteList", JSON.stringify(filtered_favs));
    const newFavs = JSON.parse(localStorage.getItem("favoriteList"));
    setfavdis(newFavs);
  };

  return (
    <div className="fav-container">
      {favdis.length < 1 ? (
        <h1 className="empty-fav">You do not have favorites</h1>
      ) : (
        <div className="fav-card">
          {favdis.map((fav) => (
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
