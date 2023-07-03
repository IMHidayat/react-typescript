import Greet from "../components/greet";
import { Person } from "../components/person";

export default function Home() {
  const arrayNames = [
    { firstName: "imam", lastName: "Hidayat" },
    { firstName: "John", lastName: "Doe" },
    { firstName: "Fuck", lastName: "You" },
  ];

  return (
    <main className="min-h-screen">
      <article className="max-w-7xl mx-auto bg-base-200 ">
        <Greet name={"imam hidayat"} msgCount={10} isLoggeddIn={false} />
        <Person namesArr={arrayNames} />
      </article>
    </main>
  );
}
