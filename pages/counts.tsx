import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useInterval from "use-interval";

const Counts: NextPage = () => {
  const [currentYear, setCurrentYear] = useState(0);
  const [godCount, setGodCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  const [godCountEffect, setGodCountEffect] = useState(false);
  const [womenCountEffect, setWomenCountEffect] = useState(false);
  const [effect, setEffect] = useState(false);

  //   useEffect(() => {
  setCurrentYear(new Date().getFullYear());
  console.log("set current year = ", currentYear);

  // 2021
  const birthsPerYear = 3659289; // USA
  // const birthsPerYear = 3659289; // Worldwide

  // Post-20 weeks
  const stillBirthsPerYear = 24000; // USA
  // const stillBirthsPerYear = 24000; // Worldwide

  // Pre-20 weeks
  const miscarriagePercentage = 0.26;
  const yearlyMiscarriageGod = Math.floor(
    birthsPerYear * miscarriagePercentage
  );

  let yearlyAbortionsGod = yearlyMiscarriageGod + stillBirthsPerYear;
  yearlyAbortionsGod *= 10; // Testing only

  // 2020
  let yearlyAbortionsWomen = 930160; // USA
  // const yearlyAbortionsWomen = 930160; // Worldwide
  yearlyAbortionsWomen *= 10; // Testing only

  const daysInAYear = 366;
  const minutesInAYear = daysInAYear * 24 * 60;
  const secondsInAYear = minutesInAYear * 60;

  calculate();
  useInterval(() => {
    calculate();
  }, 5000);

  function calculate() {
    let secondsThisYear = getTotalSecondsThisYear();
    calculateCurrentGodCount(secondsThisYear);
    calculateCurrentWomenCount(secondsThisYear);
  }

  function getTotalSecondsThisYear(): number {
    var dateTime_start = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
    var datetime_end = new Date();

    let difference =
      Math.abs(dateTime_start.getTime() - datetime_end.getTime()) / 1000;
    return difference;
  }

  function calculateCurrentGodCount(secondsThisYear: number) {
    let newGodCount = Math.floor(
      (secondsThisYear / secondsInAYear) * yearlyAbortionsGod
    );
    if (godCount !== newGodCount) {
      console.log(
        `godCount ${godCount} !== to ${newGodCount}, so setEffect = true now`
      );
      setGodCount(newGodCount);
      setGodCountEffect(true);
    }
  }

  function calculateCurrentWomenCount(secondsThisYear: number) {
    let newWomenCount = Math.floor(
      (secondsThisYear / secondsInAYear) * yearlyAbortionsWomen
    );
    if (womenCount !== newWomenCount) {
      setWomenCount(newWomenCount);
      setWomenCountEffect(true);
    }
  }
  //   }, []);

  return (
    <main className="flex w-full flex-1 flex-col items-center mt-10 px-20 text-center">
      <h1
        className={`${effect && "animate-ping"} text-6xl font-bold mb-10`}
        onClick={() => {
          setEffect(true);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        {currentYear} Abortions By:
      </h1>

      <div className="mt-6 flex max-w-6xl flex-wrap items-center justify-around sm:w-full">
        <div className="w-full md:w-6/12 mt-10">
          <h2 className="text-5xl font-bold">GOD</h2>
          <p
            className={`mt-4 text-4xl ${godCountEffect && "animate-ping"}`}
            onAnimationEnd={() => setGodCountEffect(false)}
          >
            {godCount.toLocaleString()}
          </p>
        </div>
        <div className="w-full md:w-6/12 mt-10">
          <h2 className="text-5xl font-bold">Women</h2>
          <p
            className={`mt-4 text-4xl ${womenCountEffect && "animate-ping"}`}
            onAnimationEnd={() => {
              setWomenCountEffect(false);
              //   alert(`${womenCountEffect}`);
            }}
          >
            {womenCount.toLocaleString()}
          </p>
        </div>
      </div>

      <button
        className={`${
          effect && "animate-ping"
        } bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
        onClick={() => {
          setEffect(true);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        Wiggle wiggle...
      </button>
    </main>
  );
};

export default Counts;
