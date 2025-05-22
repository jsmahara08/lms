import { Suspense } from "react";
import CourseList from "@/components/courses/course-list";
import CoursesHeader from "@/components/courses/courses-header";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Courses | EduPortal",
  description: "Browse our comprehensive catalog of courses across various subjects",
};

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-16">
      <CoursesHeader />
      <div className="container mx-auto max-w-6xl px-4 mt-12">
        <Suspense fallback={<CourseListSkeleton />}>
          <CourseList />
        </Suspense>
      </div>
    </div>
  );
}

function CourseListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array(6).fill(0).map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden border">
          <Skeleton className="h-48 w-full" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-28" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}