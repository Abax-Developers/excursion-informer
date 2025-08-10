import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <main className="min-h-dvh flex items-center justify-center p-8">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Hello, daisyUI</h2>
          <p>Tailwind v4 + daisyUI is working.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </main>
  );
}
