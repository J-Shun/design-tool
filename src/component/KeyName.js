import { useState } from "react";

const KeyName = () => {
  const [key, setKey] = useState({ keyName: "", keyCode: "" });
  const [trigger, setTrigger] = useState(false);

  const showKeyName = (e) => {
    const keyName = e.key;
    const keyCode = e.keyCode;
    setKey({ keyName: keyName, keyCode: keyCode });
    setTrigger(!trigger);
    e.target.value = "";
  };

  return (
    <div className="relative flex w-full h-screen justify-center items-center flex-col">
      <h2 className="text-5xl mb-10">Key Name</h2>
      <input
        type="text"
        className="bg-transparent border-none outline-0 absolute inset-0 cursor-default caret-transparent text-transparent"
        onKeyDown={(e) => {
          showKeyName(e);
        }}
      />

      {trigger && (
        <div className="z-10 opacity-0 pointer-events-none animate-fadeout">
          <p className="text-4xl flex justify-between mb-2 bg-blue-200">
            <span className="mr-2">KeyCode:</span>
            <span className="mx-auto">{key.keyCode}</span>
          </p>
          <p className="text-4xl flex justify-between mb-2 bg-blue-200">
            <span className="mr-2">KeyName:</span>
            <span className="mx-auto">{key.keyName}</span>
          </p>
        </div>
      )}
      {trigger || (
        <div
          className={`z-10 opacity-0 pointer-events-none ${
            key.keyName.length >= 1 ? "animate-fadeout" : ""
          }`}
        >
          <p className="text-4xl flex justify-between mb-2 bg-blue-200">
            <span className="mr-2">KeyCode:</span>
            <span className="mx-auto">{key.keyCode}</span>
          </p>
          <p className="text-4xl flex justify-between mb-2 bg-blue-200">
            <span className="mr-2">KeyName:</span>
            <span className="mx-auto">{key.keyName}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default KeyName;
