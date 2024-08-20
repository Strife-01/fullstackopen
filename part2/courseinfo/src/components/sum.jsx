const Sum = ({parts}) => <h3>total of {parts.reduce((acc, curr) => {
  acc += curr.exercises;
  return acc;
}, 0)} exercises</h3>;

export default Sum;
