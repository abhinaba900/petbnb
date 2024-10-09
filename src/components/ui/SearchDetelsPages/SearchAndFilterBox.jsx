import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  useCallback,
} from "react";
import "../../css/SearchAndFilterBox.css";
import SelectMenu from "../../../pages/SelectMenu";
import PriceRangeSlider from "../../../pages/PriceRangesSlider";
import { Calendar } from "primereact/calendar";
import { AuthContext } from "../../../AuthContext/AuthContextProvider";

function SearchAndFilterBox({ searchData, setFormatedData, setLoader }) {
  const [formDatas, setFormDatas] = useState({
    locations: "",
    DateData: "",
    priceRange: [],
    rating: "",
  });

  const { reloadByFilter, setReloadByFilter, searchDatas, setSearchDatas } =
    useContext(AuthContext);

  const [priceActive, setPriceActive] = useState(false);

  const [filterValues, setFilterValues] = useState({
    selectedPetNames: [],
    selectedServiceNames: [],
  });

  const pricerangeModalRef = useRef(null);

  // Consolidate form data updates
  const updateFormDatas = useCallback(() => {
    if (searchData) {
      setFormDatas({
        locations: searchData?.location || "",
        DateData: searchData?.dateData || "",
        priceRange: formDatas.priceRange,
        rating: formDatas.rating,
      });

      setFilterValues({
        selectedPetNames: searchData?.selectedPetNames || [],
        selectedServiceNames: searchData?.selectedServiceNames || [],
      });
    }
  }, [searchData]);

  useEffect(() => {
    updateFormDatas();
  }, [searchData, updateFormDatas]);

  // Update search data context on filter changes
  useEffect(() => {
    if (filterValues) {
      setSearchDatas({
        selectedPetNames: filterValues?.selectedPetNames,
        selectedServiceNames: filterValues?.selectedServiceNames,
      });
    }
  }, [filterValues, setSearchDatas]);

  // Close modal on outside click
  useEffect(() => {
    const modalOff = (e) => {
      if (
        pricerangeModalRef.current &&
        !pricerangeModalRef.current.contains(e.target)
      ) {
        setPriceActive(false);
      }
    };

    document.addEventListener("mousedown", modalOff);
    return () => {
      document.removeEventListener("mousedown", modalOff);
    };
  }, []);

  const petOptions = [
    { name: "Dog", value: 0 },
    { name: "Cat", value: 1 },
  ];

  const serviceOptions = [
    { name: "Boarding", value: 1 },
    { name: "House Sitting", value: 2 },
    { name: "Day Care", value: 3 },
    { name: "Dog Walking", value: 4 },
    { name: "Pet Grooming", value: 5 },
  ];

  const CatValue =
    petOptions.find(
      (option) => option?.value === Number(searchData?.selectedPetNames)
    )?.name || "Cat";

  const serviceValue =
    serviceOptions.find(
      (option) => option?.value === Number(searchData?.selectedServiceNames)
    )?.name || "Boarding";

  const [activeInput, setActiveInput] = useState({
    date: false,
    location: false,
    price: false,
  });

  const handlePriceFocus = () => {
    setPriceActive((prevState) => !prevState);
  };

  // Save service value in localStorage
  useEffect(() => {
    if (serviceValue) {
      localStorage.setItem("service", JSON.stringify(serviceValue));
    }
  }, [serviceValue]);
  return (
    <section className="search-and-filter-box-wrapper container-fluid mt-5">
      <div className="search-list-filter-wrapper">
        <p className="search-list-filter-heading">Search</p>
        <hr />
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div
          // data-aos="fade-down"
          // data-aos-offset="0"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="600"
          >
            <p className="section-paragraph search-list-filter-paragraph">
              Your Pet
            </p>
            <div className="pet-select-wrapper">
              <SelectMenu
                options={petOptions}
                type="pet"
                defaultText={CatValue}
                otherValue={searchData?.selectedServiceNames}
                setFormatedData={setFormatedData}
                setLoader={setLoader}
                priceRanges={formDatas?.priceRange}
                ReatingData={formDatas?.rating}
                searchDatas={filterValues}
                setSearchDatas={setFilterValues}
              />
            </div>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-offset="0"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="700"
          >
            <p className="section-paragraph search-list-filter-paragraph">
              Service
            </p>
            <div className="service-select-wrapper">
              <SelectMenu
                options={serviceOptions}
                type="service"
                defaultText={serviceValue}
                otherValue={searchData?.selectedPetNames}
                setFormatedData={setFormatedData}
                setLoader={setLoader}
                priceRanges={formDatas?.priceRange}
                ReatingData={formDatas?.rating}
                searchDatas={filterValues}
                setSearchDatas={setFilterValues}
              />
            </div>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-offset="0"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="800"
          >
            <p className="section-paragraph search-list-filter-paragraph">
              Location
            </p>
            <div className="location-input ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  (activeInput?.Location || formDatas?.locations !== "") &&
                  "active-input"
                }`}
              >
                <path
                  d="M12.1479 11.3333C13.0779 12.6587 13.5226 13.3647 13.2579 13.9333C13.2312 13.9902 13.2001 14.0451 13.1646 14.098C12.7812 14.6667 11.7912 14.6667 9.81125 14.6667H6.18858C4.20858 14.6667 3.21925 14.6667 2.83591 14.098C2.80094 14.0454 2.76975 13.9904 2.74258 13.9333C2.47791 13.3653 2.92258 12.6587 3.85258 11.3333M9.66658 6.00001C9.66658 6.44204 9.49099 6.86596 9.17842 7.17852C8.86586 7.49108 8.44194 7.66668 7.99991 7.66668C7.55789 7.66668 7.13396 7.49108 6.8214 7.17852C6.50884 6.86596 6.33325 6.44204 6.33325 6.00001C6.33325 5.55798 6.50884 5.13406 6.8214 4.8215C7.13396 4.50894 7.55789 4.33334 7.99991 4.33334C8.44194 4.33334 8.86586 4.50894 9.17842 4.8215C9.49099 5.13406 9.66658 5.55798 9.66658 6.00001Z"
                  stroke="#C0C4C8"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.83799 11.6627C8.61281 11.8793 8.31248 12.0003 7.99999 12.0003C7.68751 12.0003 7.38718 11.8793 7.16199 11.6627C5.10266 9.66734 2.34333 7.43868 3.68866 4.20268C4.41733 2.45268 6.16399 1.33334 7.99999 1.33334C9.83599 1.33334 11.5833 2.45334 12.3113 4.20268C13.6553 7.43401 10.9027 9.67401 8.83799 11.6627Z"
                  stroke="#C0C4C8"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                name="location"
                autoComplete="off"
                onFocus={() =>
                  setActiveInput({ ...activeInput, Location: true })
                }
                onBlur={() =>
                  setActiveInput({ ...activeInput, Location: false })
                }
                className={`location-input-option ${
                  (activeInput?.Location || formDatas?.locations !== "") &&
                  "active-input"
                }`}
                onChange={(e) => {
                  setActiveInput({ ...activeInput, Location: true });
                  setFormDatas({ ...formDatas, locations: e.target.value });
                }}
                value={formDatas?.locations}
                placeholder="Enter Your Location"
              />
            </div>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-offset="0"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="900"
          >
            <p className="section-paragraph margin-bottom-05 search-list-filter-paragraph">
              Date
            </p>
            <div className="date-input-wrapper low-width">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3335 7.99999C1.3335 5.48599 1.3335 4.22866 2.11483 3.44799C2.89616 2.66732 4.15283 2.66666 6.66683 2.66666H9.3335C11.8475 2.66666 13.1048 2.66666 13.8855 3.44799C14.6662 4.22932 14.6668 5.48599 14.6668 7.99999V9.33332C14.6668 11.8473 14.6668 13.1047 13.8855 13.8853C13.1042 14.666 11.8475 14.6667 9.3335 14.6667H6.66683C4.15283 14.6667 2.8955 14.6667 2.11483 13.8853C1.33416 13.104 1.3335 11.8473 1.3335 9.33332V7.99999Z"
                  stroke="#C0C4C8"
                  stroke-width="1.2"
                />
                <path
                  d="M4.66699 2.66666V1.66666M11.3337 2.66666V1.66666M1.66699 5.99999H14.3337"
                  stroke="#C0C4C8"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 11.3333C12 11.5101 11.9298 11.6797 11.8047 11.8047C11.6797 11.9298 11.5101 12 11.3333 12C11.1565 12 10.987 11.9298 10.8619 11.8047C10.7369 11.6797 10.6667 11.5101 10.6667 11.3333C10.6667 11.1565 10.7369 10.987 10.8619 10.8619C10.987 10.7369 11.1565 10.6667 11.3333 10.6667C11.5101 10.6667 11.6797 10.7369 11.8047 10.8619C11.9298 10.987 12 11.1565 12 11.3333ZM12 8.66667C12 8.84348 11.9298 9.01305 11.8047 9.13807C11.6797 9.2631 11.5101 9.33333 11.3333 9.33333C11.1565 9.33333 10.987 9.2631 10.8619 9.13807C10.7369 9.01305 10.6667 8.84348 10.6667 8.66667C10.6667 8.48986 10.7369 8.32029 10.8619 8.19526C10.987 8.07024 11.1565 8 11.3333 8C11.5101 8 11.6797 8.07024 11.8047 8.19526C11.9298 8.32029 12 8.48986 12 8.66667ZM8.66667 11.3333C8.66667 11.5101 8.59643 11.6797 8.4714 11.8047C8.34638 11.9298 8.17681 12 8 12C7.82319 12 7.65362 11.9298 7.5286 11.8047C7.40357 11.6797 7.33333 11.5101 7.33333 11.3333C7.33333 11.1565 7.40357 10.987 7.5286 10.8619C7.65362 10.7369 7.82319 10.6667 8 10.6667C8.17681 10.6667 8.34638 10.7369 8.4714 10.8619C8.59643 10.987 8.66667 11.1565 8.66667 11.3333ZM8.66667 8.66667C8.66667 8.84348 8.59643 9.01305 8.4714 9.13807C8.34638 9.2631 8.17681 9.33333 8 9.33333C7.82319 9.33333 7.65362 9.2631 7.5286 9.13807C7.40357 9.01305 7.33333 8.84348 7.33333 8.66667C7.33333 8.48986 7.40357 8.32029 7.5286 8.19526C7.65362 8.07024 7.82319 8 8 8C8.17681 8 8.34638 8.07024 8.4714 8.19526C8.59643 8.32029 8.66667 8.48986 8.66667 8.66667ZM5.33333 11.3333C5.33333 11.5101 5.2631 11.6797 5.13807 11.8047C5.01305 11.9298 4.84348 12 4.66667 12C4.48986 12 4.32029 11.9298 4.19526 11.8047C4.07024 11.6797 4 11.5101 4 11.3333C4 11.1565 4.07024 10.987 4.19526 10.8619C4.32029 10.7369 4.48986 10.6667 4.66667 10.6667C4.84348 10.6667 5.01305 10.7369 5.13807 10.8619C5.2631 10.987 5.33333 11.1565 5.33333 11.3333ZM5.33333 8.66667C5.33333 8.84348 5.2631 9.01305 5.13807 9.13807C5.01305 9.2631 4.84348 9.33333 4.66667 9.33333C4.48986 9.33333 4.32029 9.2631 4.19526 9.13807C4.07024 9.01305 4 8.84348 4 8.66667C4 8.48986 4.07024 8.32029 4.19526 8.19526C4.32029 8.07024 4.48986 8 4.66667 8C4.84348 8 5.01305 8.07024 5.13807 8.19526C5.2631 8.32029 5.33333 8.48986 5.33333 8.66667Z"
                  fill="#C0C4C8"
                />
              </svg>

              <Calendar
                className={`${formDatas?.DateData !== "" && "active-input"}`}
                onChange={(e) => {
                  setFormDatas({
                    ...formDatas,
                    DateData: e.target.value,
                  });
                }}
                value={formDatas?.DateData}
                minDate={new Date()}
                placeholder="Select a date"
                name="date"
                dateFormat="mm/dd/yy" // Adjust format to fit your DateFormater function
              />
            </div>
          </div>
          <div
            className="position-relative"
            // data-aos="fade-down"
            // data-aos-offset="0"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="1000"
          >
            <p className="section-paragraph search-list-filter-paragraph">
              Price
            </p>
            <input
              type="text"
              className={`price-input ${
                (activeInput?.price || formDatas?.priceRange?.length !== 0) &&
                "active-input"
              }`}
              value={
                formDatas.priceRange !== undefined &&
                formDatas?.priceRange?.length !== 0
                  ? `$${formDatas?.priceRange[0]} - $${formDatas?.priceRange[1]}`
                  : ""
              }
              onClick={(e) => {
                setActiveInput({
                  ...activeInput,
                  price: !activeInput?.price,
                });
                handlePriceFocus();
              }}
              placeholder="Select a price range"
            />

            {priceActive && (
              <PriceRangeSlider
                pricerangeModalRef={pricerangeModalRef}
                setPriceActive={setPriceActive}
                formDatas={formDatas}
                setFormDatas={setFormDatas}
                setFormatedData={setFormatedData}
                searchData={searchData}
                setLoader={setLoader}
              />
            )}
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-offset="0"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="1100"
          >
            <p className="section-paragraph search-list-filter-paragraph ">
              Customer Ratings
            </p>
            <select
              name=""
              id=""
              className={`rating-select active-input`}
              onFocus={(e) => {
                setActiveInput({
                  ...activeInput,
                  rating: !activeInput?.rating,
                });
              }}
              onBlur={(e) => {
                setActiveInput({
                  ...activeInput,
                  rating: !activeInput?.rating,
                });
              }}
              onChange={(e) => {
                console.log(searchData?.selectedPetNames, "selectedPetNames");
                console.log(
                  searchData?.selectedServiceNames,
                  "selectedServiceNames"
                );
                console.log(e.target.value.trim(), "e.target.value");
                setLoader(true);
                setFormDatas({
                  ...formDatas,
                  rating: String(e.target.value).trim(),
                });

                fetch(
                  `https://phplaravel-1332381-4877280.cloudwaysapps.com/api/search-host?pet_type=${String(
                    searchDatas?.selectedPetNames
                  )}&services=${String(
                    searchDatas?.selectedServiceNames
                  )}&price_range=${formDatas?.priceRange[0] || 1}-${
                    formDatas?.priceRange[1] || 100
                  }&rating=${String(e.target.value).trim()}`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                )
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Network response was not ok");
                    }
                    return response.json();
                  })
                  .then((data) => {
                    console.log(data, "datas in the filter rating");

                    if (formDatas?.priceRange?.length > 0) {
                      const sortData = data?.user?.sort((a, b) => {
                        const priceA =
                          parseFloat(a?.price.replace("$", "")) || 0;
                        const priceB =
                          parseFloat(b?.price.replace("$", "")) || 0;

                        return priceA - priceB; // Ascending order sorting
                      });

                      console.log(sortData, "sorted data");

                      setFormatedData(sortData);
                    } else {
                      setFormatedData(data?.user);
                    }

                    setReloadByFilter(!reloadByFilter);
                    setLoader(false);
                  })
                  .catch((error) => {
                    console.log(error);
                    setLoader(false);
                  });
              }}
            >
              <option value="">All</option>
              <option value="4">4 stars and above</option>
              <option value="3-4">Below 4 stars and above 3 stars </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchAndFilterBox;
