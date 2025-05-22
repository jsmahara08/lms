import { Suspense } from "react";
import QaHeader from "@/components/qa/qa-header";
import QuestionList from "@/components/qa/question-list";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Q&A Forum | EduPortal",
  description: "Ask questions, get answers, and engage with our learning community",
};

export default function QaPage() {
  return (
    <div className="pt-24 pb-16">
      <QaHeader />
      <div className="container mx-auto max-w-6xl px-4 mt-12">
        <Suspense fallback={<QuestionListSkeleton />}>
          <QuestionList />
        </Suspense>
      </div>
    </div>
  );
}

function QuestionListSkeleton() {
  return (
    <div className="space-y-6">
      {Array(5).fill(0).map((_, i) => (
        <div key={i} className="border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-3 flex-1">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex gap-2 pt-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}