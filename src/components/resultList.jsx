import { ResultListItem } from "./resultListItem.jsx";

export function ResultList() {
  // handle result state etc

  const sampleResult = {
    question:
      "What is the first thing you should do if you find yourself stranded on a deserted island?",

    answered: "Find or build shelter",
  };

  function respondToChildEventHappened(dataFromChild){
    console.log("its ok I know JS is weird, what do you say?" + dataFromChild)
  }

  return (
    <main>
      <article>
        <ResultListItem resultData={sampleResult} childEventHappened={respondToChildEventHappened}></ResultListItem>
      </article>
    </main>
  );
}
