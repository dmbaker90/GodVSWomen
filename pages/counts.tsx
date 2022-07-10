import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const Counts: NextPage = () => {
  const [currentYear, setCurrentYear] = useState(0);
  const [godCount, setGodCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const USABirthsPerYear = 3659289; // 2021
    const USAStillBirthsPerYear = 24000; // Post-20 weeks
    const USAMiscarriagePercentage = 0.26; // Pre-20 weeks
    const yearlyMiscarriageGod = Math.floor(
      USABirthsPerYear * USAMiscarriagePercentage
    );

    const yearlyAbortionsGod = yearlyMiscarriageGod + USAStillBirthsPerYear;
    const yearlyAbortionsWomen = 930160; // 2020

    const daysInAYear = 366;
    const minutesInAYear = daysInAYear * 24 * 60;
    const secondsInAYear = minutesInAYear * 60;

    calculate();
    const myInterval = setInterval(() => {
      calculate();
    }, 5000);

    function calculate() {
      let secondsThisYear = getTotalSecondsThisYear();
      setGodCount(calculateCurrentGodCount(secondsThisYear));
      setWomenCount(calculateCurrentWomenCount(secondsThisYear));
    }

    function getTotalSecondsThisYear(): number {
      var dateTime_start = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
      var datetime_end = new Date();

      let difference =
        Math.abs(dateTime_start.getTime() - datetime_end.getTime()) / 1000;
      return difference;
    }

    function calculateCurrentGodCount(secondsThisYear: number): number {
      return Math.floor(
        (secondsThisYear / secondsInAYear) * yearlyAbortionsGod
      );
    }

    function calculateCurrentWomenCount(secondsThisYear: number): number {
      return Math.floor(
        (secondsThisYear / secondsInAYear) * yearlyAbortionsWomen
      );
    }

    //return () => clearInterval(myInterval);
  }, []);

  return (
    <main className="flex w-full flex-1 flex-col items-center mt-10 px-20 text-center">
      <h1 className="text-6xl font-bold mb-10">{currentYear} Abortions By:</h1>

      <div className="mt-6 flex max-w-6xl flex-wrap items-center justify-around sm:w-full">
        <div className="w-full md:w-6/12 mt-10">
          <h2 className="text-5xl font-bold">GOD</h2>
          <p className="mt-4 text-4xl">{godCount.toLocaleString()}</p>
        </div>
        <div className="w-full md:w-6/12 mt-10">
          <h2 className="text-5xl font-bold">Women</h2>
          <p className="mt-4 text-4xl">{womenCount.toLocaleString()}</p>
        </div>
      </div>
    </main>
  );
};

export default Counts;
