import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
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
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

