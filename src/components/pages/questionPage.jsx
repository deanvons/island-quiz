import { Hoc } from "../hoc";
import { Question } from "../question";

export function QuestionPage(){
    return <>
    <Hoc>
        <h3>This is wrapped by the hoc</h3>
        <h3>This is wrapped by the hoc</h3>
        <h3>This is wrapped by the hoc</h3>
    </Hoc>
    <Question></Question>
    
    
    </>
}