"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";
import { getInitials, formatDate } from "@/lib/utils";
import { Question } from "@/lib/types";

// Mock data for questions
const mockQuestions: Question[] = [
  {
    id: "q1",
    title: "How do I optimize React performance with useCallback?",
    content: "I'm building a complex React application and noticing some performance issues with my components. I've heard that useCallback can help optimize render performance, but I'm not sure how to implement it correctly. Can someone explain when and how to use useCallback effectively?",
    courseId: "course-1",
    courseName: "Web Development Fundamentals",
    author: "Alex Johnson",
    authorAvatar: "",
    date: "2025-03-10T10:30:00Z",
    tags: ["React", "Performance", "Hooks"],
    answers: [
      {
        id: "a1",
        content: "useCallback is a React Hook that lets you cache a function definition between re-renders. It's useful when you're passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. Here's an example...",
        author: "Sarah Miller",
        authorAvatar: "",
        date: "2025-03-10T14:20:00Z",
        votes: 12,
        isAccepted: true
      }
    ],
    votes: 8,
    views: 156
  },
  {
    id: "q2",
    title: "Understanding data normalization in SQL databases",
    content: "I'm working on designing a database for a web application and trying to understand the best practices for data normalization. Specifically, I'm confused about when to use third normal form (3NF) versus denormalization for performance. Can someone explain the tradeoffs?",
    courseId: "course-2",
    courseName: "Data Science & Machine Learning",
    author: "Emma Wilson",
    authorAvatar: "",
    date: "2025-03-08T16:45:00Z",
    tags: ["SQL", "Database Design", "Normalization"],
    answers: [
      {
        id: "a2",
        content: "Normalization is a database design technique that reduces data redundancy and eliminates undesirable characteristics like Insertion, Update and Deletion Anomalies. 3NF requires that all attributes in a table are only dependent on the primary key...",
        author: "Michael Chen",
        authorAvatar: "",
        date: "2025-03-09T09:15:00Z",
        votes: 15,
        isAccepted: true
      }
    ],
    votes: 10,
    views: 203
  },
  {
    id: "q3",
    title: "Best practices for mobile responsive design in 2025",
    content: "I'm working on a website redesign and want to ensure it follows the latest best practices for mobile responsiveness. With new device sizes and capabilities constantly emerging, what are the current standards for ensuring a site looks great across all devices?",
    courseId: "course-5",
    courseName: "UX/UI Design Principles",
    author: "Jason Brooks",
    authorAvatar: "",
    date: "2025-03-05T11:20:00Z",
    tags: ["Responsive Design", "CSS", "Mobile"],
    answers: [
      {
        id: "a3",
        content: "In 2025, responsive design has evolved beyond just flexible grids and media queries. Here are the current best practices: 1. Use a mobile-first approach, 2. Implement container queries where appropriate, 3. Consider variable fonts for performance...",
        author: "Olivia Parker",
        authorAvatar: "",
        date: "2025-03-06T08:30:00Z",
        votes: 18,
        isAccepted: false
      }
    ],
    votes: 14,
    views: 278
  }
];

const QuestionList = () => {
  const [activeTab, setActiveTab] = useState("recent");
  const questions = mockQuestions;
  
  // In a real application, you would filter/sort based on the activeTab
  
  return (
    <div>
      <Tabs defaultValue="recent" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
          </TabsList>
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{questions.length}</span> questions
          </div>
        </div>
        
        <TabsContent value="recent" className="space-y-6 mt-0">
          {questions.map((question) => (
            <Link href={`/qa/${question.id}`} key={question.id}>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={question.authorAvatar} alt={question.author} />
                    <AvatarFallback>{getInitials(question.author)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold">{question.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {question.author} · {formatDate(question.date)} · In <span className="font-medium">{question.courseName}</span>
                      </p>
                    </div>
                    <p className="line-clamp-2">{question.content}</p>
                    <div className="flex items-center flex-wrap gap-2 pt-2">
                      {question.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-3">
                      <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-4 w-4" />
                        <span>{question.votes} votes</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>{question.answers.length} answers</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="mr-1 h-4 w-4" />
                        <span>{question.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </TabsContent>
        
        <TabsContent value="popular" className="space-y-6 mt-0">
          {/* Same structure as above, but would show popular questions */}
          <div className="text-center py-8">
            <p>Popular questions would appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="unanswered" className="space-y-6 mt-0">
          {/* Same structure as above, but would show unanswered questions */}
          <div className="text-center py-8">
            <p>Unanswered questions would appear here</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
};

export default QuestionList;