import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import GalaryCard from "./GalaryCard";

function Galary() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <GalaryCard bg={borabora} text="Bora Bora" />
      <GalaryCard bg={maldives} text="Maldives" />
      <GalaryCard bg={keywest} text="Key West" />
      <GalaryCard bg={borabora2} text="Thailand" />
      <GalaryCard bg={maldives2} text="Philipens" />
      <GalaryCard bg={borabora} text="Bora" />
    </div>
  );
}

export default Galary;
