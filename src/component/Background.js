import { useState } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const colorSet = {
  default: { name: "Default", bg: "#FFFFFF", text: "#000000" },
  asuka: { name: "Asuka", bg: "#F89BB2", text: "#FFFFFF" },
  misaki: { name: "Misaki", bg: "#484143", text: "#F6F958" },
  mashiro: { name: "Mashiro", bg: "#FFF8BD", text: "#7C50A5" },
  rika: { name: "Rika", bg: "#F3BACD", text: "#995092" },
  shindou: { name: "Shindou", bg: "#B3BFFF", text: "#964CE1" },
};

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
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color.backgroundColor }}
    >
      <h2
        className="text-5xl text-center mb-10"
        style={{ color: color.textColor }}
      >
        Background & Text Color Matching
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
              className="text-xl cursor-pointer"
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
              className="text-xl cursor-pointer"
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

      <div className="flex gap-4">
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          data-bg={colorSet.default.bg}
          data-text={colorSet.default.text}
          onClick={(e) => renderColor(e)}
        >
          <div
            className="flex justify-center items-center w-8 h-8 bg-white rounded-full mb-2 pointer-events-none"
            style={{ backgroundColor: colorSet.default.bg }}
          >
            <div
              className="w-5 h-5 bg-black rounded-full pointer-events-none"
              style={{ backgroundColor: colorSet.default.text }}
            ></div>
          </div>
          <p className="pointer-events-none" style={{ color: color.textColor }}>
            {colorSet.default.name}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          data-bg={colorSet.asuka.bg}
          data-text={colorSet.asuka.text}
          onClick={(e) => renderColor(e)}
        >
          <div
            className="flex justify-center items-center w-8 h-8 bg-white rounded-full mb-2 pointer-events-none"
            style={{ backgroundColor: colorSet.asuka.bg }}
          >
            <div
              className="w-5 h-5 bg-black rounded-full pointer-events-none"
              style={{ backgroundColor: colorSet.asuka.text }}
            ></div>
          </div>
          <p className="pointer-events-none" style={{ color: color.textColor }}>
            {colorSet.asuka.name}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          data-bg={colorSet.misaki.bg}
          data-text={colorSet.misaki.text}
          onClick={(e) => renderColor(e)}
        >
          <div
            className="flex justify-center items-center w-8 h-8 bg-white rounded-full mb-2 pointer-events-none"
            style={{ backgroundColor: colorSet.misaki.bg }}
          >
            <div
              className="w-5 h-5 bg-black rounded-full pointer-events-none"
              style={{ backgroundColor: colorSet.misaki.text }}
            ></div>
          </div>
          <p className="pointer-events-none" style={{ color: color.textColor }}>
            {colorSet.misaki.name}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          data-bg={colorSet.mashiro.bg}
          data-text={colorSet.mashiro.text}
          onClick={(e) => renderColor(e)}
        >
          <div
            className="flex justify-center items-center w-8 h-8 bg-white rounded-full mb-2 pointer-events-none"
            style={{ backgroundColor: colorSet.mashiro.bg }}
          >
            <div
              className="w-5 h-5 bg-black rounded-full pointer-events-none"
              style={{ backgroundColor: colorSet.mashiro.text }}
            ></div>
          </div>
          <p className="pointer-events-none" style={{ color: color.textColor }}>
            {colorSet.mashiro.name}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          data-bg={colorSet.rika.bg}
          data-text={colorSet.rika.text}
          onClick={(e) => renderColor(e)}
        >
          <div
            className="flex justify-center items-center w-8 h-8 bg-white rounded-full mb-2 pointer-events-none"
            style={{ backgroundColor: colorSet.rika.bg }}
          >
            <div
              className="w-5 h-5 bg-black rounded-full pointer-events-none"
              style={{ backgroundColor: colorSet.rika.text }}
            ></div>
          </div>
          <p className="pointer-events-none" style={{ color: color.textColor }}>
            {colorSet.rika.name}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          data-bg={colorSet.shindou.bg}
          data-text={colorSet.shindou.text}
          onClick={(e) => renderColor(e)}
        >
          <div
            className="flex justify-center items-center w-8 h-8 bg-black rounded-full mb-2 pointer-events-none"
            style={{ backgroundColor: colorSet.shindou.bg }}
          >
            <div
              className="w-5 h-5 bg-white rounded-full pointer-events-none"
              style={{ backgroundColor: colorSet.shindou.text }}
            ></div>
          </div>
          <p className="pointer-events-none" style={{ color: color.textColor }}>
            {colorSet.shindou.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
