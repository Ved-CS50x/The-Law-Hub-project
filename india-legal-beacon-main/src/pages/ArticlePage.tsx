
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import RelatedArticles from "@/components/RelatedArticles";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id || "0"));

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <NewsTicker />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Article not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NewsTicker />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-3">
              <span className="bg-legal-gold px-2 py-1 text-xs font-bold rounded-sm text-legal-black">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 ml-4">{article.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">{article.title}</h1>
            
            {article.image && (
              <div className="mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto rounded-md"
                />
                {article.imageCaption && (
                  <p className="text-sm text-gray-500 mt-2 italic">{article.imageCaption}</p>
                )}
              </div>
            )}
            
            <div className="flex items-center mb-8 border-b pb-4">
              {article.authorAvatar && (
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-10 h-10 rounded-full mr-4"
                />
              )}
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-gray-500">{article.authorTitle}</p>
              </div>
            </div>

            <div className="article-content prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        
        <RelatedArticles categoryId={article.categoryId} currentArticleId={article.id} />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
