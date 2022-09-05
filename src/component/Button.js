import { useState } from "react";

const Button = () => {
  const [word, setWord] = useState("Button");

  const [color, setColor] = useState({
    textColor: "#FFFFFF",
    backgroundColor: "#000000",
  });

  const [padding, setPadding] = useState({
    x: 25,
    y: 25,
  });

  const [showAll, setShowAll] = useState(false);
  const [allBorderRadius, setAllBorderRadius] = useState({
    all: 0,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  const write = (e) => {
    setWord(e.target.value);
  };

  const changePadding = (e) => {
    const name = e.target.name;
    if (name === "x") setPadding({ ...padding, x: e.target.value });
    if (name === "y") setPadding({ ...padding, y: e.target.value });
  };

  const changeRadius = (e) => {
    const direction = e.target.name;
    if (direction === "all") {
      setAllBorderRadius({
        all: e.target.value,
        topLeft: e.target.value,
        topRight: e.target.value,
        bottomLeft: e.target.value,
        bottomRight: e.target.value,
      });
    } else {
      setAllBorderRadius({
        ...allBorderRadius,
        [direction]: e.target.value,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-5xl mb-10">Button</h2>
      <div className="flex justify-between container mx-auto">
        <div className="flex-1 flex justify-center items-center">
          <button
            className="cursor-pointer"
            style={{
              backgroundColor: color.backgroundColor,
              color: color.textColor,
              paddingBlock: `${padding.y}px`,
              paddingInline: `${padding.x}px`,
              borderRadius: `${allBorderRadius.topLeft}% ${allBorderRadius.topRight}% ${allBorderRadius.bottomRight}% ${allBorderRadius.bottomLeft}%`,
            }}
          >
            {word}
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col mx-auto text-center">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="border p-2"
              id="text"
              value={word}
              placeholder="Text Area"
              onChange={(e) => {
                write(e);
              }}
            />
            <label htmlFor="padding-x">Padding X: {padding.x}</label>
            <input
              type="range"
              id="padding-x"
              name="x"
              min="0"
              max="50"
              value={padding.x}
              onChange={(e) => {
                changePadding(e);
              }}
            />
            <label htmlFor="padding-y">Padding Y: {padding.y}</label>
            <input
              type="range"
              id="padding-y"
              name="y"
              min="0"
              max="50"
              value={padding.y}
              onChange={(e) => {
                changePadding(e);
              }}
            />
            <label>
              Border-All:
              <input
                type="checkbox"
                className="ml-2"
                onClick={() => {
                  setShowAll(!showAll);
                }}
              />
            </label>
            {showAll ? (
              <>
                <label>Border-radius: {allBorderRadius.all}%</label>
                <input
                  type="range"
                  name="all"
                  min="0"
                  max="50"
                  value={allBorderRadius.all}
                  onChange={(e) => {
                    changeRadius(e);
                  }}
                />
              </>
            ) : (
              <>
                <div className="flex">
                  <div className="flex flex-col">
                    <label>Top-Left: {allBorderRadius.topLeft} %</label>
                    <input
                      type="range"
                      name="topLeft"
                      min="0"
                      max="50"
                      value={allBorderRadius.topLeft}
                      onChange={(e) => {
                        changeRadius(e);
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Top-Right: {allBorderRadius.topRight} %</label>
                    <input
                      type="range"
                      name="topRight"
                      min="0"
                      max="50"
                      value={allBorderRadius.topRight}
                      onChange={(e) => {
                        changeRadius(e);
                      }}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    <label>Bottom-Left: {allBorderRadius.bottomLeft} %</label>
                    <input
                      type="range"
                      name="bottomLeft"
                      min="0"
                      max="50"
                      value={allBorderRadius.bottomLeft}
                      onChange={(e) => {
                        changeRadius(e);
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Bottom-Right: {allBorderRadius.bottomRight} %</label>
                    <input
                      type="range"
                      name="bottomRight"
                      min="0"
                      max="50"
                      value={allBorderRadius.bottomRight}
                      onChange={(e) => {
                        changeRadius(e);
                      }}
                    />
                  </div>
                </div>
              </>
            )}
            <div>Background Color</div>
            <label
              className="mb-2 mx-auto w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
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
            <div>Text Color</div>
            <label
              className="mb-2 mx-auto w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
