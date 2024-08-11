import Part from './part.jsx'

const Content = (props) => {
    return (
        <> 
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part2} exercises={props.exercises2} />
        </>
    );
}

export default Content;
