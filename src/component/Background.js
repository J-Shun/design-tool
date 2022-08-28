import { useState } from "react";

const Background = () => {
  const [color, setColor] = useState({ backgroundColor: null, color: null });
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color.backgroundColor }}
    >
      <h1 className="text-5xl mb-5" style={{ color: color.textColor }}>
        Background & Text Color Testing
      </h1>
      <div className="flex gap-5">
        <input
          type="color"
          onInput={(e) => {
            setColor({
              ...color,
              backgroundColor: e.target.value,
            });
          }}
        />
        <input
          type="color"
          onInput={(e) => {
            setColor({
              ...color,
              textColor: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Background;
