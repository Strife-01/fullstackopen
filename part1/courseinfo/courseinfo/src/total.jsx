const Total = (props) => {
    let total = 0;
    props.parts.forEach((part) => {
        total = total + part.exercises;
    });
    return (
        <p>Number of exercises is {total}.</p>
    ); 
}

export default Total;
