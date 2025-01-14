

export function Question() {
 
    // question data
    const sampleQuestion = {
        question: "What is the first thing you should do if you find yourself stranded on a deserted island?",
        options: [
          "Look for food",
          "Find or build shelter",
          "Signal for help",
          "Explore the island",
          "Explore the island"
        ],
        correctAnswer: "Find or build shelter"
      }

      const optionList = sampleQuestion.options.map(option => <li>{option}</li>)

    // way to answer the question

    // way to store the results

  return (
    <div>
        <h1>{sampleQuestion.question}</h1>
        <ul>
            {optionList}
        </ul>
      
    </div>
  );
}
