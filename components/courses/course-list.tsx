import { popularCourses } from "@/lib/data/courses";
import CourseCard from "./course-card";

const CourseList = () => {
  // In a real application, this would fetch courses from an API
  const courses = popularCourses;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">All Courses</h2>
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{courses.length}</span> courses
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;