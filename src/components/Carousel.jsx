import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "August: Tarang",

      imageURL: require("../carou_img/tarang.jpg"),
      month: "August",
    },
    {
      title: "August: Independence Day",

      imageURL: require("../carou_img/indclg.jpg"),
    },
    // {
    //   title: "Tree Plantation",

    //   imageURL: require("../carou_img/treeplclg.jpg"),
    // },
    // {
    //   title: "Blood Donation",

    //   imageURL: require("../carou_img/blooddonclg.jpg"),
    // },
    // {
    //   title: "Mission Mangroves Webinar",

    //   imageURL: require("../carou_img/mangroveclg.jpg"),
    // },
    // {
    //   title: "International Day of Clean Air for Blue Skies Webinar",

    //   imageURL: require("../carou_img/CleanAirclg.jpg"),
    // },
    // {
    //   title: "MDACS X NSS Red Run Marathon",

    //   imageURL: require("../carou_img/marathonclg2.jpg"),
    // },
    {
      title: "September: Bandra Fair 2023",

      imageURL: require("../carou_img/bandrafairclg.jpg"),
    },
    {
      title: "September: NSS CRCE X FSAI Ganesh Mandal Audit",

      imageURL: require("../carou_img/fsaiclg.jpg"),
    },
    // {
    //   title: "World Peace Day Webinar",

    //   imageURL: require("../carou_img/Peacedayclg.jpg"),
    // },
    // {
    //   title: "Swacchta Hi Seva Campaign",

    //   imageURL: require("../carou_img/swacchtaclg.jpg"),
    // },
    {
      title: "October: MasterChef 2023",
      imageURL: require("../carou_img/masterchefclg23.jpg"),
    },
    {
      title: "October: FoodFest 2023",
      imageURL: require("../carou_img/Foodfestclg.jpg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "20px auto",
        width: "80%", // Adjust this width as needed
        overflow: "hidden",
      }}
    >
      <div
        className="carousel"
        style={{
          display: "flex",
          transition: "transform 0.5s",
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <img
              className="carousel-img"
              src={item.imageURL}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <div
              className="carousel-item-text"
              style={{
                marginTop: "10px",
                fontWeight: "bolder",
                fontSize: "30px",
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Navigators outside the carousel container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px", // Adjust as needed
        }}
      >
        <IconButton
          className="button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
          style={{
            color: "#fff",
            backgroundColor: "#2196f3",
            borderRadius: "50%",
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </IconButton>

        <div className="indicators" style={{ display: "flex" }}>
          {items.map((_, index) => (
            <IconButton
              key={index}
              className={`indicator-buttons ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => updateIndex(index)}
              style={{
                color: "#757575",
              }}
            >
              {index === activeIndex ? (
                <RadioButtonCheckedIcon className="indicator-symbol" />
              ) : (
                <RadioButtonUncheckedIcon className="indicator-symbol" />
              )}
            </IconButton>
          ))}
        </div>

        <IconButton
          className="button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
          style={{
            color: "#fff",
            backgroundColor: "#2196f3",
            borderRadius: "50%",
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </IconButton>
      </div>
    </div>
  );
};