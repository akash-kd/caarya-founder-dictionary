import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const ProductTabs = ({ list, setIndex, selectedIndex }) => {
  return (
    <div className="flex px-6 py-3 items-center gap-4">
      {list.map((item, id) => {
        return (
          <div
            className={`flex px-2 py-4 gap-4 items-center cursor-pointer ${
              id === selectedIndex && "border-b-2 border-orange-500"
            }`}
            onClick={() => {
              setIndex(id);
            }}
          >
            <h1>Product {id + 1} </h1>
            <BsCheckCircle color="#33A329" size="20px" />
            <h1 className="font-inter text-base text-right font-light text-neutral-500">
              (0/5)
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTabs;
