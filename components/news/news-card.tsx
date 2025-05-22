"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, User2 } from "lucide-react";
import { News } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  news: News;
  className?: string;
}

const NewsCard = ({ news, className }: NewsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/news/${news.id}`}>
      <Card 
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col cursor-pointer", 
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary">{news.category}</Badge>
          </div>
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{news.title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">{news.excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>{formatDate(news.date)}</span>
            </div>
            <div className="flex items-center">
              <User2 className="mr-1 h-4 w-4" />
              <span>{news.author}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsCard;