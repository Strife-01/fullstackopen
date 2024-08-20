import Header from './header.jsx'
import Content from './content.jsx'

const Course = ({course}) => {
  return (
    <>
      <Header key={course.id} name={course.name}/>
      <Content parts={course.parts}/>
    </>
  );
}

export default Course;
