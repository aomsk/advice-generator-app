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
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-darkBlue">
      <div className="flex flex-col items-center bg-darkGrayishBlue w-[350px] xl:w-[500px] p-[15rem] rounded-[20px] px-10 py-10 relative">
        <div className="text-center">
          <p className="text-neonGreen text-[11px] uppercase tracking-[0.4em] pb-8">
            Advice #{advice?.id}
          </p>
          <h1 className="text-lightCyan text-[28px] pb-8">"{advice?.advice}"</h1>
          <img
            src="../static/images/pattern-divider-desktop.svg"
            alt="pattern-divider-desktop"
            className="pb-8"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={getQoute}
          className="btn p-4 mt-[-30px] fixed ml-[-28px] rounded-full bg-neonGreen"
        >
          <span>
            <img src="../static/images/icon-dice.svg" alt="icon-dice" />
          </span>
        </button>
      </div>
      <div className="mt-20 text-lightCyan">
        <span>Challenge by </span>
        <span className="text-neonGreen">Frontend Mentor.</span>
        <span>Coded by </span>
        <span className="text-neonGreen">AOMSK.</span>
      </div>
    </main>
  );
}

export default App;
