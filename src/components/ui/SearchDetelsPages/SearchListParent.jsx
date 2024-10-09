import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import FooterWavePattrn from "../LandingPage/FooterWavePattrn";
import { Navigate, useLocation } from "react-router-dom";
import SearchAndFilterBox from "./SearchAndFilterBox";
import ListAndMapHolder from "./ListAndMapHolder";
import Aos from "aos";
import "aos/dist/aos.css";
import { use } from "framer-motion/client";

function SearchListParent() {
  useEffect(() => {
    Aos.init({ once: true });

    // Optionally, refresh AOS to catch newly added elements or on rerender
    window.addEventListener("scroll", Aos.refresh);

    return () => {
      window.removeEventListener("scroll", Aos.refresh); // Cleanup listener on unmount
    };
  }, []);
  const { state } = useLocation(); // Get state from navigation
  const [formatedData, setFormatedData] = useState([]); // Holds formatted data from state
  const [searchData, setSearchData] = useState({}); // Holds search data from state

  const [loader, setLoader] = useState(false);
  const [localStorageData, setLocalStorageData] = useState(
    JSON.parse(localStorage.getItem("state"))
  );
  console.log(localStorageData, "local storage data");

  useEffect(() => {
    setLocalStorageData(JSON.parse(localStorage.getItem("state")));
  }, []);

  useEffect(() => {
    if (localStorageData) {
      setFormatedData(localStorageData?.data?.user); // Set the user data from state
    }
  }, [localStorageData]);

  // Update data based on the passed state
  useEffect(() => {
    if (state?.data?.user) {
      setFormatedData(state?.data?.user); // Set the user data from state
    }

    if (state?.search) {
      setSearchData(state?.search); // Set the search data from state
    }
  }, [state]);

  console.log(formatedData, "formated data in parent");

  // Navigate back if there's no state or relevant data
  // if (!state || !localStorageData) {
  //   return <Navigate to={"/"} />; // Navigate back to the previous route
  // }

  return (
    <div>
      <Navbar />
      {/* Pass searchData and setter for formatedData to SearchAndFilterBox */}
      <SearchAndFilterBox
        searchData={searchData}
        setFormatedData={setFormatedData}
        setLoader={setLoader}
      />
      {/* Display the formatted data */}
      <ListAndMapHolder formatedData={formatedData} loader={loader} />
      <FooterWavePattrn />
      <Footer />
    </div>
  );
}

export default SearchListParent;
