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

  const birthsPerYear = 3659289;
  const stillBirthsPerYear = 24000;
  const miscarriagePercentage = 0.26;
  const yearlyAbortionsWomen = 629898;

  const totalPregnanciesPerYear = birthsPerYear / (1 - miscarriagePercentage);
  const yearlyMiscarriageGod = totalPregnanciesPerYear - birthsPerYear;
  const yearlyAbortionsGod = yearlyMiscarriageGod + stillBirthsPerYear;

  const daysInAYear = 366;
  const minutesInAYear = daysInAYear * 24 * 60;
  const secondsInAYear = minutesInAYear * 60;

  setTimeout(() => {
    calculate();
  }, 1);

  useInterval(() => {
    calculate();
  }, 1000);

  function calculate() {
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

    let secondsThisYear = getTotalSecondsThisYear();
    calculateCurrentGodCount(secondsThisYear);
    calculateCurrentWomenCount(secondsThisYear);
    setCurrentYear(new Date().getFullYear());
  }

  return (
    <main className="flex w-full flex-1 flex-col items-center mt-10 px-20 text-center overflow-hidden">
      <h1 className="text-7xl font-bold mb-10">{currentYear} Abortions By:</h1>
      <div className="my-6 flex max-w-6xl flex-wrap items-center justify-around sm:w-full">
        <div className="w-full md:w-6/12 mt-10">
          <h2 className="text-7xl font-bold">GOD</h2>
          <div className="relative mt-4">
            <p className="text-6xl absolute w-full">
              {godCount.toLocaleString()}
            </p>
            <p
              className={`text-6xl ${
                godCountEffect && "animate-ping"
              } relative`}
              onAnimationEnd={() => setGodCountEffect(false)}
            >
              {godCount.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="w-full md:w-6/12 mt-10">
          <h2 className="text-7xl font-bold">Women</h2>

          <div className="relative mt-4">
            <p className="text-6xl absolute w-full">
              {womenCount.toLocaleString()}
            </p>
            <p
              className={`text-6xl ${
                womenCountEffect && "animate-ping"
              } relative`}
              onAnimationEnd={() => {
                setWomenCountEffect(false);
              }}
            >
              {womenCount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Counts;
