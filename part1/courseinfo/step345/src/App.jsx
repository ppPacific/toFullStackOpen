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
const Content =({parts})=> {
    return (
        <div>
            <Part part={parts[0].name} ex={parts[0].exercises}/>
            <Part part={parts[1].name} ex={parts[1].exercises}/>
            <Part part={parts[2].name} ex={parts[2].exercises}/>

        </div>
    )
}
const Total = ({parts}) => {

    return <p>Number of exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
}

function App() {
    const course = {
        name: 'Half Stack application development',
        parts: [{
            name: 'Fundamentals of React',
            exercises: 10
        },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }]
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>

            <Total parts={course.parts}/>
        </div>
    )
}

export default App
