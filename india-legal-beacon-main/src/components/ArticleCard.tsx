
import React from "react";
import { Link } from "react-router-dom";

type ArticleCardProps = {
  id: number;
  title: string;
  excerpt: string;
  image?: string;
  category: string;
  author: string;
  date: string;
  featured?: boolean;
};

const ArticleCard = ({ id, title, excerpt, image, category, author, date, featured = false }: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`}>
      <article className={`border border-gray-300 dark:border-gray-700 hover:border-legal-gold transition-colors ${featured ? '' : 'h-full'}`}>
        {image && (
          <div 
            className="aspect-[4/3] bg-gray-200 dark:bg-gray-800"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        )}
        <div className="p-4">
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-bold text-legal-gold">{category}</span>
            <span className="text-gray-500 dark:text-gray-400">{date}</span>
          </div>
          <h3 className={`font-serif font-bold ${featured ? 'text-xl mb-3' : 'text-base mb-2'}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{excerpt}</p>
          {featured && (
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              By {author}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
