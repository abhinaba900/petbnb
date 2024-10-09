import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import SearchListParent from "../components/ui/SearchDetelsPages/SearchListParent";
import LandingPage from "../components/ui/LandingPage/LandingPage";

const MemoizedSearchListParent = memo(SearchListParent);
const MemoizedLandingPage = memo(LandingPage);

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MemoizedLandingPage />} />
        <Route path="/searchlist" element={<MemoizedSearchListParent />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
