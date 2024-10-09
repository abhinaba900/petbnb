import React from "react";
import "../../css/ListAndMapHolder.css";
import MapContainer from "./MapContainer";
import ListContainer from "./ListContainer";

function ListAndMapHolder({ formatedData, loader }) {
  return (
    <section className="list-and-map-holder-wrapper container-fluid mt-2 position-relative">
      <div className="row w-100 mx-auto g-0 gap-3">
        <div className="col-md-12 g-0 col-lg-6 col-xl-6 col-sm-12 list-wrapper-w">
          <ListContainer formatedData={formatedData} loader={loader} />
        </div>
        <div className="col-md-12 g-0 col-lg-6 col-xl-6 col-sm-12 map-wrapper-w">
          <MapContainer />
        </div>
      </div>
    </section>
  );
}

export default ListAndMapHolder;
