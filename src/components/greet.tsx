type greetProps = {
  name: string;
  msgCount: number;
  isLoggeddIn: boolean;
};

export default function Greet(p: greetProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl">{p.isLoggeddIn ? `Hey ${p.name}, you have 10 unread messages!` : "Welcome Guest!"} </h1>
    </div>
  );
}
