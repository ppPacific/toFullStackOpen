const Part =(props)=>{
    const {part, ex} = props;

    return <p>
        {part} {ex}
    </p>
}
const Header =(props)=>{
    const {course} = props;

    return <h1>{course}</h1>
}
const Content =({p1,e1,p2,e2,p3,e3})=> {
    return (
        <div>
            <Part part={p1} ex={e1}/>
            <Part part={p2} ex={e2}/>
            <Part part={p3} ex={e3}/>

        </div>
    )
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
            <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3}/>
            {/*<Content part={part2} ex={exercises2}/>*/}
            {/*<Content part={part3} ex={exercises3}/>*/}
            <Total total={exercises1+exercises2+exercises3}/>
        </div>
    )
}

export default App
