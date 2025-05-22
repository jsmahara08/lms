import { Suspense } from "react";
import NewsGrid from "@/components/news/news-grid";
import NewsHeader from "@/components/news/news-header";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "News | EduPortal",
  description: "Stay updated with the latest news and announcements",
};

export default function NewsPage() {
  return (
    <div className="pt-24 pb-16">
      <NewsHeader />
      <div className="container mx-auto max-w-6xl px-4 mt-12">
        <Suspense fallback={<NewsGridSkeleton />}>
          <NewsGrid />
        </Suspense>
      </div>
    </div>
  );
}

function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array(6).fill(0).map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden border">
          <Skeleton className="h-48 w-full" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}