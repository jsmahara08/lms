import { latestNews } from "@/lib/data/news";
import NewsCard from "./news-card";

const NewsGrid = () => {
  // In a real application, this would fetch news from an API
  const news = [...latestNews, ...latestNews];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Recent Articles</h2>
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{news.length}</span> articles
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <NewsCard key={`${item.id}-${index}`} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;