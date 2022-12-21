import { useState } from "react";

function Dark() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`bg-white shadow-md text-center flex justify-center items-center ${ dark && 'bg-black'} `}>
      <h1>Hello</h1>
      <button
        className="bg-slate-100"
        onClick={() => 
          setDark(!dark)
        }
      >
        Toogle
      </button>
    </div>
  );
}

export default Dark;
