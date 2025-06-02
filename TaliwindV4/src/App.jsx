import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { twMerge } from "tailwind-merge";

import "./App.css";

const bgMap = [
    [500, "bg-amber-800"],
    [400, "bg-amber-700"],
    [300, "bg-amber-600"],
    [200, "bg-amber-500"],
    [150, "bg-amber-400"],
    [100, "bg-amber-300"],
    [50, "bg-amber-200"],
    [5, "bg-amber-100"],
];

const getCountStyle = (count) => {
    const bgClass = bgMap.find(([value]) => (count >= 5 ? count >= value : count <= value))?.[1];

    return twMerge("text-blue-500 font-semibold text-[3rem] border-2 p-3 rounded-2xl", bgClass);
};

function App() {
    const [count, setCount] = useState(0);
    const plusButton = "w-[5rem] bg-amber-300 hover:bg-amber-100 transition duration-500 rounded-2xl";
    const minusButton = "w-[5rem] bg-emerald-800 hover:bg-emerald-100 transition duration-500 rounded-2xl";

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center flex-col">
                <div className={getCountStyle(count)}> count : {count}</div>

                <div className="flex gap-3 p-2.5">
                    <button onClick={() => setCount((prev) => prev + 5)} className={plusButton}>
                        +5
                    </button>
                    <button onClick={() => setCount((prev) => prev + 50)} className={plusButton}>
                        +50
                    </button>
                    <button onClick={() => setCount((prev) => prev + 500)} className={plusButton}>
                        +500
                    </button>
                </div>
                <div className="flex gap-3 p-2.5">
                    <button onClick={() => setCount((prev) => prev - 5)} className={minusButton}>
                        -5
                    </button>
                    <button onClick={() => setCount((prev) => prev - 50)} className={minusButton}>
                        -50
                    </button>
                    <button onClick={() => setCount((prev) => prev - 500)} className={minusButton}>
                        -500
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
