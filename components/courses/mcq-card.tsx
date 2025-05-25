"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen } from "lucide-react";
import { MCQ } from "@/lib/types";

interface MCQCardProps {
  mcq: MCQ;
  className?: string;
}

const MCQCard = ({ mcq, className }: MCQCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold line-clamp-2">{mcq.title}</h3>
        </div>
        <p className="text-muted-foreground line-clamp-2 mb-4">{mcq.description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{mcq.timeLimit} minutes</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4" />
            <span>{mcq.questions.length} questions</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/mcqs/${mcq.id}`}>Start Quiz</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MCQCard;