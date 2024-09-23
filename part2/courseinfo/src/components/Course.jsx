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
            {parts.map((item)=>{
                return <Part key={item.id} part={item.name} ex={item.exercises}/>
            })}

        </div>
    )
}

const Total = ({parts}) => {
    const totalamount = parts.reduce((accumulator ,item) => {
        return accumulator += item.exercises;
    },0)
    return <p><b>total of {totalamount} exercises</b></p>
}
const Course =({course})=> {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>

            <Total parts={course.parts}/>
        </div>
    )
}
export default Course
