import { useState, useEffect } from "react";
import axios from "axios";

type QouteObject = {
  id: number;
  advice: string;
};

function App() {
  const [advice, setAdvice] = useState<QouteObject | null>(null);

  async function getQoute() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQoute();
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-darkBlue">
      <div className="flex flex-col items-center bg-darkGrayishBlue w-[350px] h-[375px] md:w-[450px] xl:w-[500px] xl:h-[375px] rounded-[20px] px-10 py-10 relative">
        <div className="mb-9">
          <p className="text-neonGreen text-[11px] uppercase tracking-[0.4em]">
            Advice #{advice?.id}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lightCyan text-[24px] text-center">"{advice?.advice}"</h1>
        </div>
        <div className="absolute top-[280px] px-10">
          <img src="../static/images/pattern-divider-desktop.svg" alt="" />
        </div>
        <div className="absolute top-[340px]">
          <button
            type="button"
            onClick={getQoute}
            className="btn w-[60px] h-[60px] rounded-full bg-neonGreen flex justify-center items-center"
          >
            <img src="../static/images/icon-dice.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
