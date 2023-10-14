import React from "react";

const CardTitle = ({ img, title, imgSize = 6, icon = <></>, color }) => {
  return (
    <div className="flex flex-col flex-start gap-2">
      <div className={`flex items-center p-1 w-fit rounded ${color}`}>
        {img && (
          <img src={img} alt="" className={`w-${imgSize} h-${imgSize}`} />
        )}
        {icon}
      </div>
      <h1 className="font-inter text-lg font-semibold text-neutral-800">
        {title}
      </h1>
    </div>
  );
};

export default CardTitle;
