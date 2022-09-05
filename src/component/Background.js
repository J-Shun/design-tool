import { useState } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const colorSet = [
  { name: "Default", bg: "#FFFFFF", text: "#000000" },
  { name: "Asuka", bg: "#F89BB2", text: "#FFFFFF" },
  { name: "Misaki", bg: "#484143", text: "#F6F958" },
  { name: "Mashiro", bg: "#FFF8BD", text: "#D4BE9C" },
  { name: "Rika", bg: "#F3BACD", text: "#995092" },
  { name: "Shindou", bg: "#B3BFFF", text: "#964CE1" },
];

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

  const renderColor = (e) => {
    setColor({
      backgroundColor: e.target.dataset.bg,
      textColor: e.target.dataset.text,
    });
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center ease-linear duration-300"
      style={{ backgroundColor: color.backgroundColor }}
    >
      <h2
        className="text-5xl text-center mb-10"
        style={{ color: color.textColor }}
      >
        Color Matching
      </h2>
      <div className="flex justify-between w-52 mb-10">
        <div className="flex flex-col items-center w-20">
          <label
            className="mb-2 w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
            style={{ backgroundColor: color.backgroundColor }}
          >
            <input
              className="invisible"
              type="color"
              onInput={(e) => {
                setColor({
                  ...color,
                  backgroundColor: e.target.value,
                });
              }}
              value={color.backgroundColor}
            />
          </label>
          <Tooltip
            title="Copy Done!"
            position="bottom"
            trigger="click"
            animation="fade"
            arrow="true"
          >
            <p
              className="text-xl cursor-pointer hover:opacity-60"
              style={{ color: color.textColor }}
              onClick={(e) => {
                copyText(e);
              }}
            >
              {allToUpper(color.backgroundColor)}
            </p>
          </Tooltip>
        </div>
        <div className="flex flex-col items-center">
          <label
            className="mb-2 w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
            style={{ backgroundColor: color.textColor }}
          >
            <input
              className="invisible"
              type="color"
              onInput={(e) => {
                setColor({
                  ...color,
                  textColor: e.target.value,
                });
              }}
            />
          </label>
          <Tooltip
            title="Copy Done!"
            position="bottom"
            trigger="click"
            animation="fade"
            arrow="true"
          >
            <p
              className="text-xl cursor-pointer hover:opacity-60"
              style={{ color: color.textColor }}
              onClick={(e) => {
                copyText(e);
              }}
            >
              {allToUpper(color.textColor)}
            </p>
          </Tooltip>
        </div>
      </div>

      <ol className="flex gap-4">
        {colorSet.map((set) => {
          return (
            <li
              className="flex flex-col justify-center items-center cursor-pointer"
              data-bg={set.bg}
              data-text={set.text}
              onClick={(e) => renderColor(e)}
              key={set.name}
            >
              <div
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full mb-2 pointer-events-none"
                style={{ backgroundColor: set.bg }}
              >
                <div
                  className="w-5 h-5 bg-black rounded-full pointer-events-none"
                  style={{ backgroundColor: set.text }}
                ></div>
              </div>
              <p
                className="pointer-events-none"
                style={{ color: color.textColor }}
              >
                {set.name}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Background;
