"use client";

import { useState } from "react";
import { 
  Search, 
  SlidersHorizontal,
  X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const CoursesHeader = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = [
    "Development", 
    "Design", 
    "Marketing", 
    "Business", 
    "Data Science", 
    "IT & Security"
  ];

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="bg-muted/60 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-muted-foreground text-lg">
            Discover our comprehensive catalog of courses designed to help you achieve your learning goals
          </p>
        </div>

        <div className="bg-background rounded-lg shadow-sm p-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              className="pl-10" 
              placeholder="Search for courses..." 
            />
          </div>
          
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Courses</SheetTitle>
                  <SheetDescription>
                    Refine your course search with these filters
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category}`} 
                            onCheckedChange={(checked) => {
                              if (checked) addFilter(category);
                              else removeFilter(category);
                            }}
                            checked={activeFilters.includes(category)}
                          />
                          <label 
                            htmlFor={`category-${category}`}
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Level</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {levels.map(level => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`level-${level}`} 
                            onCheckedChange={(checked) => {
                              if (checked) addFilter(level);
                              else removeFilter(level);
                            }}
                            checked={activeFilters.includes(level)}
                          />
                          <label 
                            htmlFor={`level-${level}`}
                            className="text-sm cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <Slider 
                      defaultValue={[0, 100]} 
                      max={100} 
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {activeFilters.map(filter => (
              <Badge variant="secondary" key={filter} className="px-3 py-1">
                {filter}
                <X 
                  className="ml-1 h-3 w-3 cursor-pointer" 
                  onClick={() => removeFilter(filter)}
                />
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setActiveFilters([])}
              className="h-7 text-xs"
            >
              Clear All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesHeader;