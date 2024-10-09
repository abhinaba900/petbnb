import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const PriceRangeSlider = ({
  setPriceActive,
  formDatas,
  setFormDatas,
  pricerangeModalRef,
  setFormatedData,
  searchData,
  setLoader,
}) => {
  const [value, setValue] = useState([1, 100]);

  const { searchDatas } = React.useContext(AuthContext);

  console.log(searchDatas, "search datas");

  useEffect(() => {
    if (formDatas?.priceRange?.length > 0) {
      setValue(formDatas?.priceRange);
    }
  }, []);

  useEffect(() => {
    if (value) {
      setFormDatas({
        ...formDatas,
        priceRange: value,
      });
    }
  }, [value]);

  const handleRangeChange = (value) => {
    setValue(value);
  };

  const formatOutput = (value) => `$${value}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);

    fetch(
      `https://phplaravel-1332381-4877280.cloudwaysapps.com/api/search-host?pet_type=${searchDatas?.selectedPetNames}&services=${searchDatas?.selectedServiceNames}&price_range=${value[0]}-${value[1]}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response, "response");
        }
        return response.json();
      })
      .then((data) => {
        if (formDatas?.priceRange?.length > 0) {
          const sortData = data?.user?.sort((a, b) => {
            const priceA = parseFloat(a?.price.replace("$", "")) || 0;
            const priceB = parseFloat(b?.price.replace("$", "")) || 0;

            return priceA - priceB; // Ascending order sorting
          });

          console.log(sortData, "sorted data");

          setFormatedData(sortData);
        } else {
          setFormatedData(data?.user);
        }
        setFormDatas({
          ...formDatas,
          priceRange: value,
        });

        setLoader(false);

        console.log(data, "datas in the");
      });
    setPriceActive(false);
  };

  // Calculate left position for the output based on thumb value
  const calculateLeftPosition = (val, min, max) => {
    const percentage = ((val - min) / (max - min)) * 100; // Adjust percentage based on range
    return `${percentage}%`;
  };

  return (
    <div className="range-slider-container" ref={pricerangeModalRef}>
      <section>
        <Slider
          range
          min={1}
          max={100}
          step={1}
          value={value}
          onChange={handleRangeChange}
          trackStyle={[{ backgroundColor: "#FD9642" }]}
          handleStyle={[
            {
              width: 15,
              height: 15,
              border: "5px solid #FD9642",
              borderColor: "#FD9642",
              backgroundColor: "white",
              marginTop: -5,
            }, // Thumb style
            {
              width: 15,
              height: 15,
              border: "5px solid #FD9642",
              borderColor: "#FD9642",
              backgroundColor: "white",
              marginTop: -5,
            },
          ]}
          railStyle={{ backgroundColor: "lightgray" }} // Background track color
        />
        <div
          className="range-values"
          style={{ position: "relative", bottom: "-25px" }}
        >
          <output
            style={{
              left: calculateLeftPosition(value[0], 1, 100),
              position: "absolute",
              bottom: "25px", // Adjust position above the slider
              transform: "translateX(-50%)",
            }}
          >
            {formatOutput(value[0])}
          </output>
          <output
            style={{
              left: calculateLeftPosition(value[1], 1, 100),
              position: "absolute",
              bottom: "25px", // Adjust position above the slider
              transform: "translateX(-50%)",
            }}
          >
            {formatOutput(value[1])}
          </output>
        </div>
      </section>
      <div className="border"></div>
      <div className="submit-btn-wrapper">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
