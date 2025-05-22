export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  duration: string;
  lessons: number;
  students: number;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export interface Question {
  id: string;
  title: string;
  content: string;
  courseId: string;
  courseName: string;
  author: string;
  authorAvatar: string;
  date: string;
  tags: string[];
  answers: Answer[];
  votes: number;
  views: number;
}

export interface Answer {
  id: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  votes: number;
  isAccepted: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor' | 'admin';
  enrolledCourses: string[];
  completedCourses: string[];
}