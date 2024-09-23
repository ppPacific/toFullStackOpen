import {useState} from "react";

const StatisticLine = ({text,value}) => {
    /// ...
    return <tr>
        <td>{text}</td>
        <td>{value} {text==="positive"&&" %"}</td>
    </tr>
}
const Statistics = ({good, neutral, bad, avg, pos}) => {
    // ...
    if (good === 0 && neutral === 0 && bad === 0) {
        return <>
            <h1>statistics</h1>

            <p>No feedback given</p>
        </>

    }
    return(
        <>
            <h1>statistics</h1>
            <br/>

            <table>
                <tbody>
                <StatisticLine text={"good"} value={good}/>
                <StatisticLine text={"neutral"} value={neutral}/>
                <StatisticLine text={"bad"} value={bad}/>
                <StatisticLine text={"all"} value={good + neutral + bad}/>
                <StatisticLine text={"average"} value={avg}/>
                <StatisticLine text={"positive"} value={pos}/>
                </tbody>
            </table>
        </>
    )
}
const Button=({cb,text})=>{
    return <button onClick={cb}>
        {text}
    </button>
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const avg = (good + bad * (-1)) / (good+neutral+bad);
    const pos = good/(good+neutral+bad)*100;
    return (
        <div>
            <h1>give feedback</h1>
            <Button cb={() => setGood(good + 1)} text={"good"}/>
            <Button cb={() => setNeutral(neutral + 1)} text={"neutral"}/>
            <Button cb={() => setBad(bad + 1)} text={"bad"}/>

            <Statistics good={good} bad={bad} neutral={neutral} avg={avg} pos={pos}/>

        </div>
    )
}

export default App
