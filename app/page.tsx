import Image from "next/image";
import styles from "./page.module.css";
import ExcursionCard from "./components/ExcursionCard";

export default function Home() {
  return (
    <div className="min-h-screen pt-6 w-fit flex flex-col gap-4">
      <h2 className="text-2xl font-black w-fit underline decoration-success">
        Активни екскурзии:
      </h2>
      <div className="flex flex-row w-fit max-w-3xl mx-auto gap-4 flex-wrap justify-center">
        <ExcursionCard
          img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Двудневна екскурзия в Сахара"
          numberOfParticipants={33}
          id="#4431"
          dateOfDeparture="20.03.2025"
        />
        <ExcursionCard
          img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Двудневна екскурзия в Сахара"
          numberOfParticipants={33}
          id="#4431"
          dateOfDeparture="20.03.2025"
        />
        <ExcursionCard
          img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Двудневна екскурзия в Сахара"
          numberOfParticipants={33}
          id="#4431"
          dateOfDeparture="20.03.2025"
        />
        <ExcursionCard
          img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Двудневна екскурзия в Сахара"
          numberOfParticipants={33}
          id="#4431"
          dateOfDeparture="20.03.2025"
        />
        <ExcursionCard
          img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Двудневна екскурзия в Сахара"
          numberOfParticipants={33}
          id="#4431"
          dateOfDeparture="20.03.2025"
        />
      </div>
    </div>
  );
}
