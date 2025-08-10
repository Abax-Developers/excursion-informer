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
        <ExcursionCard />
        <ExcursionCard />
        <ExcursionCard />
        <ExcursionCard />
      </div>
    </div>
  );
}
