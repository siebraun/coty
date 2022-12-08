import React from "react";

// Cards variable holding the json data
const Cards = () => {
  const cardInfo = [
    {
      year: "2023",
      name: "Redend Point",
      hex: "#AE8E7E",
      details: {
        desc: "Embrace a spirit of connection with the world around us with this soulful-yet-subtle hue.",
        coordColors: {
          coordDesc:
            "Pair Redend Point with other warm, earthy hues from this coordinating palette.",
          hex1: "#827466",
          name1: "Foothills",

          hex2: "#C6B5A7",
          name2: "Cool Beige",

          hex3: "#573E3E",
          name3: "Carnelian",
        },
      },
    },

    // second card
    {
      year: "2022",
      name: "Evergreen Fog",
      hex: "#95978A",
      details: {
        desc: "Get a fresh start with a restorative shade that breathes freshness into modern interiors",
        coordColors: {
          coordDesc:
            "This nature-inspired palette of coordinating hues creates a modern, organic feel when paired with Evergreen Fog.",
          hex1: "#E5DDD1",
          name1: "Shoji White",

          hex2: "#765232",
          name2: "Uber Umber",

          hex3: "#504C46",
          name3: "Urbane Bronze",
        },
      },
    },

    // third card
    {
      hex: "#504C46",
      year: "2021",
      name: "Urbane Bronze",
      details: {
        desc: "Tap into nature with a hue whose warmth and comfort breathe down-to-earth tranquility.",
        coordColors: {
          coordDesc:
            "Paied with other warm neutrals and bone whites,  create an updated take on minimalism.",
          hex1: "#EEEFEA",
          name1: "Extra White",

          hex2: "#E4CEAC",
          name2: "Ivoire",

          hex3: "#E6DFD3",
          name3: "Shoji White",
        },
      },
    },

    // fourth card
    {
      hex: "#232B3F",
      year: "2020",
      name: "Naval",
      details: {
        desc: "Naval fuses the striking and bold opulence of Art Deco with the awe‑inspiring power of nature – from the infinite night sky to the mysterious depths of the sea",
        coordColors: {
          coordDesc:
            "Gold metallic accents bring warmth to navy’s boldness for a pairing that’s meant to be.",
          hex1: "#D5B176",
          name1: "Tarnished Trumpet",

          hex2: "#F7D78A",
          name2: "Midday",

          hex3: "#4F6A56",
          name3: "Kale Green",
        },
      },
    },

    // fifth card
    {
      hex: "#AC6B53",
      year: "2019",
      name: "Cavern Clay",
      details: {
        desc: "Forged by sun. Fired by desert. Ancient, yet fully alive. Bohemian, yet totally refined.",
        coordColors: {
          coordDesc:
            "Sun-washed and warm, pair this with colors seen in the baked clay canyons, worn leather and woven wool blankets",
          hex1: "#989192",
          name1: "Slate Violet",

          hex2: "#D2B18F",
          name2: "Ligonier Tan",

          hex3: "#EFE8DB",
          name3: "Creamy",
        },
      },
    },

    // sixth card
    {
      hex: "#02596C",
      year: "2018",
      name: "Oceanside",
      details: {
        desc: "A color that is both accessible and elusive, Oceanside is a collision of rich blue with jewel-toned green",
        coordColors: {
          coordDesc:
            "Oceanside's versatility allows it to play well with many colors. Try something equally eye-catching, or relax alongside other blues.",
          hex1: "#B54D7F",
          name1: "Exuberant Pink",

          hex2: "#283849",
          name2: "In The Navy",

          hex3: "#87AAB9",
          name3: "Adrift",
        },
      },
    },

    // seventh card
    {
      hex: "#8D7E79",
      year: "2017",
      name: "Poised Taupe",
      details: {
        desc: "Earthen brown combines with conservative grey to create a weathered, woodsy and complex neutral that celebrates a well-lived life.",
        coordColors: {
          coordDesc:
            "Pastels take on a vintage vibe with  amber, Poised Taupe, and oxidized yellow.",
          hex1: "#C08F80",
          name1: "Roycroft Rose",

          hex2: "#A56C4A",
          name2: "Brandywine",

          hex3: "#C99E53",
          name3: "Alchemy",
        },
      },
    },
  ];

  /* takes card data in and returns a div. */
  const renderCard = (card) => {
    return (
      // card item
      <div ref={card} style={{ backgroundColor: card.hex }} className="item">
        <div className="year">
          <p>{card.year}</p>
        </div>
        <div className="item__body">
          <h2>{card.name}</h2>
          <p>{card.details.desc}</p>
          <h3>{card.details.coordColors.coordDesc}</h3>
          <div className="coordsWrapper">
            <span>
              {" "}
              <div
                style={{ backgroundColor: card.details.coordColors.hex1 }}
                className="coordBox"
              ></div>{" "}
              <p> {card.details.coordColors.name1}</p>
            </span>

            <span>
              {" "}
              <div
                style={{ backgroundColor: card.details.coordColors.hex2 }}
                className="coordBox"
              ></div>{" "}
              <p> {card.details.coordColors.name2}</p>
            </span>

            <span>
              {" "}
              <div
                style={{ backgroundColor: card.details.coordColors.hex3 }}
                className="coordBox"
              ></div>{" "}
              <p> {card.details.coordColors.name3}</p>
            </span>
          </div>
        </div>
      </div>
    );
  };

  /* Returning a div with a class of grid and mapping over the cardInfo array and returning the
  renderCard function. */
  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Cards;
