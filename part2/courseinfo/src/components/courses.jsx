import Course from './course.jsx'

const Courses = ({courses}) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      <ul>
        {courses.map((course) => <Course key={course.id} course={course}/>)}
      </ul>
    </>
  );
};

export default Courses;
