
const Header =(props)=>{
    const {course} = props;

    return <h1>{course}</h1>
}
const Content =(props)=> {
    const {part, ex} = props;

    return <p>
        {part} {ex}
    </p>
}
const Total = (props) => {
    const {total} = props;

    return <p>Number of exercises {total}</p>
}

function App() {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content part={part1} ex={exercises1}/>
            <Content part={part2} ex={exercises2}/>
            <Content part={part3} ex={exercises3}/>
            <Total total={exercises1+exercises2+exercises3}/>
        </div>
    )
}

export default App
