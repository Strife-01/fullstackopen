import Part from './part.jsx'

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map((part) => <Part key={part.id} part={part}/>)}
    </ul>
  );
}

export default Content;
