export function hoc(Loc) {
  const someData = "secret";

  return function Hoc() {
    return (
      <div>
        <h1>I am an hoc {someData}</h1>
        <Loc></Loc>
        <h1>I am an hoc {someData}</h1>
      </div>
    );
  };
}
