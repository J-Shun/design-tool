import { useState } from "react";
import { TbBorderRadius, TbBorderOuter } from "react-icons/tb";

const Button = () => {
  const [word, setWord] = useState("Button");

  const [color, setColor] = useState({
    textColor: "#FFFFFF",
    backgroundColor: "#000000",
  });

  const [showHover, setShowHover] = useState(false);
  const [hoverColor, setHoverColor] = useState({
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

  const handleHoverColor = (e) => {
    if (showHover === false) return;
    const moveType = e.type;
    if (moveType === "mouseenter") {
      e.target.style.backgroundColor = hoverColor.backgroundColor;
      e.target.style.color = hoverColor.textColor;
    } else {
      e.target.style.backgroundColor = color.backgroundColor;
      e.target.style.color = color.textColor;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-5xl mb-10">Button</h2>
      <div className="flex justify-between container mx-auto">
        <div className="flex-1 flex justify-center items-center">
          <button
            className="ease-linear duration-200 cursor-pointer"
            style={{
              backgroundColor: color.backgroundColor,
              color: color.textColor,
              paddingBlock: `${padding.y}px`,
              paddingInline: `${padding.x}px`,
              borderRadius: `${allBorderRadius.topLeft}% ${allBorderRadius.topRight}% ${allBorderRadius.bottomRight}% ${allBorderRadius.bottomLeft}%`,
            }}
            onMouseEnter={(e) => {
              handleHoverColor(e);
            }}
            onMouseLeave={(e) => {
              handleHoverColor(e);
            }}
          >
            {word}
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center text-lg">
          <div className="flex flex-col mx-auto text-center">
            <label htmlFor="text" className="mb-2">
              Text
            </label>
            <input
              type="text"
              className="border p-2 mb-4"
              id="text"
              value={word}
              placeholder="Text Area"
              onChange={(e) => {
                write(e);
              }}
            />
            <div className="flex justify-between mb-4">
              <div className="flex flex-col">
                <label htmlFor="padding-x" className="mb-2">
                  Padding X: {padding.x}
                </label>
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
              </div>
              <div className="flex flex-col">
                <label htmlFor="padding-y" className="mb-2">
                  Padding Y: {padding.y}
                </label>
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
              </div>
            </div>
            <label className="mb-2">
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
                <label className="flex justify-center items-center mb-2">
                  <TbBorderOuter className="w-6 h-6" />: {allBorderRadius.all}%
                </label>
                <input
                  type="range"
                  className="mb-4"
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
                <div className="flex  justify-between mb-4">
                  <div className="flex flex-col">
                    <label className="flex justify-center items-center mb-2">
                      <TbBorderRadius className="w-6 h-6" />:{" "}
                      {allBorderRadius.topLeft} %
                    </label>
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
                    <label className="flex justify-center items-center mb-2">
                      <TbBorderRadius className="w-6 h-6 rotate-90" />:{" "}
                      {allBorderRadius.topRight} %
                    </label>
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
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col">
                    <label className="flex justify-center items-center mb-2">
                      <TbBorderRadius className="w-6 h-6 -rotate-90" />:{" "}
                      {allBorderRadius.bottomLeft} %
                    </label>
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
                    <label className="flex justify-center items-center mb-2">
                      <TbBorderRadius className="w-6 h-6 rotate-180" />:{" "}
                      {allBorderRadius.bottomRight} %
                    </label>
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
            <label htmlFor="hover" className="mb-2">
              Set Hover:
              <input
                type="checkbox"
                className="ml-2"
                id="hover"
                onClick={() => {
                  setShowHover(!showHover);
                }}
              />
            </label>
            <div className="flex mb-4">
              <label
                className="mx-auto w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
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
              <label
                className="mx-auto w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
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
            {showHover && (
              <div className="flex ">
                <label
                  className="mx-auto w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
                  style={{ backgroundColor: hoverColor.backgroundColor }}
                >
                  <input
                    className="invisible"
                    type="color"
                    onInput={(e) => {
                      setHoverColor({
                        ...hoverColor,
                        backgroundColor: e.target.value,
                      });
                    }}
                    value={hoverColor.backgroundColor}
                  />
                </label>
                <label
                  className="mx-auto w-10 h-10 overflow-hidden rounded-full border-2 border-gray-400 cursor-pointer"
                  style={{ backgroundColor: hoverColor.textColor }}
                >
                  <input
                    className="invisible"
                    type="color"
                    onInput={(e) => {
                      setHoverColor({
                        ...hoverColor,
                        textColor: e.target.value,
                      });
                    }}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
