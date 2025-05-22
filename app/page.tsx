import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Users, MessageSquare, TrendingUp } from "lucide-react";
import FeatureCard from "@/components/home/feature-card";
import CourseCard from "@/components/courses/course-card";
import NewsCard from "@/components/news/news-card";
import { popularCourses } from "@/lib/data/courses";
import { latestNews } from "@/lib/data/news";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn Without Limits
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Expand Your Knowledge
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover courses, stay updated with the latest news, and engage in meaningful discussions on our modern learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/courses">
                    Explore Courses <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/signup">Join Community</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src="https://images.pexels.com/photos/5428263/pexels-photo-5428263.jpeg"
                  alt="Students learning online"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduPortal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform offers comprehensive learning solutions designed to help you achieve your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
              title="Quality Courses"
              description="Access hundreds of high-quality courses taught by industry experts"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-10 w-10 text-green-600 dark:text-green-400" />}
              title="Track Progress"
              description="Monitor your learning journey with detailed progress tracking"
            />
            <FeatureCard 
              icon={<MessageSquare className="h-10 w-10 text-orange-600 dark:text-orange-400" />}
              title="Interactive Q&A"
              description="Get answers to your questions through our interactive Q&A platform"
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />}
              title="Community"
              description="Join a community of learners and expand your network"
            />
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Courses</h2>
            <Button variant="outline" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Button variant="outline" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Learning?</h2>
                <p className="text-white/80 text-lg">
                  Join thousands of students already learning on our platform. Get unlimited access to all courses.
                </p>
                <Button size="lg" variant="secondary" asChild className="mt-4">
                  <Link href="/signup">Get Started Today</Link>
                </Button>
              </div>
              <div className="lg:flex justify-end hidden">
                <Image 
                  src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg" 
                  alt="Student learning" 
                  width={400} 
                  height={300}
                  className="rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}