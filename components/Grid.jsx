import React from "react";
import Wrapper from "./Wrapper";

const Grid = () => {
  return (
    <Wrapper styles="grid grid-cols-2 max-w-5xl mx-auto py-20 relative">
      <div className="flex flex-col gap-3 py-12">
        <h1 className="text-4xl font-bold">University of Amsterdam</h1>
        <p className="text-2xl">Inspiring generations since 1632.</p>
      </div>
      <div className="relative">
        <img
          className="max-w-3xl w-[650px] "
          src="https://www.uva.nl/webfiles/1676992405662/includes/home-herobanner-nl/img/Universiteit+van+Amsterdam+shoot+17012023-0176-flip-cropped-hi.jpg"
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default Grid;
