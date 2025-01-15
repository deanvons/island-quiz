export function ResultListItem(props) {
    // handle result state etc

    // we need the question data

    function callParent(){
        props.childEventHappened("JS is really cool")
    }
  
    return (
      <div>
      <h1>{props.resultData.question}</h1>
      <h2>{props.resultData.answered}</h2>
      <h3></h3>
      <button onClick={callParent}>Call parent event</button>
      </div>
    );
  }