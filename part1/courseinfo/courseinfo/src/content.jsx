import Part from './part.jsx'

const Content = (props) => {
    return (
        <>
            {props.parts.map((part) => {
                return <Part part={part.name} exercises={part.exercises}/>
            })}
        </>
    );
}

export default Content;
