import React from "react";
import Gap from "../../components/atoms/Gap";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline decoration-sky-600">
        Hello this is zgram.zikriakmal.my.id
      </h1>
      <Gap height={20} />
      <button className={"rounded-lg bg-indigo-500 p-3 hover:text-red-800 hover:bg-black"}>
        Sebentar lagi akan launching !
      </button>
    </div>
  );
};

export default HomePage;
