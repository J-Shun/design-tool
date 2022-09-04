import { useState } from "react";

const Background = () => {
  const [color, setColor] = useState({
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
  });

  const copyText = (e) => {
    const copyTarget = e.target.textContent;
    navigator.clipboard.writeText(copyTarget);
  };

  const allToUpper = (word) => {
    return word
      .split("")
      .map((alphabet) => alphabet.toUpperCase())
      .join("");
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color.backgroundColor }}
    >
      <h2
        className="text-5xl text-center mb-10"
        style={{ color: color.textColor }}
      >
        Background & Text Color Matching
      </h2>
      <div className="flex justify-between w-52">
        <div className="mb-5 flex flex-col items-center">
          <input
            className="mb-2 w-10 h-10 cursor-pointer"
            type="color"
            onInput={(e) => {
              setColor({
                ...color,
                backgroundColor: e.target.value,
              });
            }}
            value={color.backgroundColor}
          />
          <p
            className="text-xl cursor-pointer"
            style={{ color: color.textColor }}
            onClick={(e) => {
              copyText(e);
            }}
          >
            {allToUpper(color.backgroundColor)}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="mb-2 w-10 h-10 cursor-pointer"
            type="color"
            onInput={(e) => {
              setColor({
                ...color,
                textColor: e.target.value,
              });
            }}
          />
          <p
            className="text-xl cursor-pointer"
            style={{ color: color.textColor }}
            onClick={(e) => {
              copyText(e);
            }}
          >
            {allToUpper(color.textColor)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
