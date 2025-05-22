import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewsHeader = () => {
  const categories = [
    "All Categories",
    "Course Updates",
    "Partnerships",
    "Events",
    "Student Success",
    "Technology",
    "Industry Trends",
  ];

  return (
    <div className="bg-muted/60 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest announcements, events, and stories from our community
          </p>
        </div>

        <div className="bg-background rounded-lg shadow-sm p-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              className="pl-10" 
              placeholder="Search news articles..." 
            />
          </div>
          
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem 
                    key={category} 
                    value={category === "All Categories" ? "all" : category.toLowerCase().replace(" ", "-")}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;