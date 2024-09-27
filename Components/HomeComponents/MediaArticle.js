import React from "react";
import Link from "next/link"; // Ensure you import Link from next/link

const MediaArticle = () => {
  const articles = [
    {
      articleImg: "/images/article-img.png",
      imageTitle: "Ayush Ministry to launch technical brief on AI in traditional medicine by Oct",
      articleUrl: "https://government.economictimes.indiatimes.com/amp/news/healthcare/ayush-ministry-to-launch-technical-brief-on-ai-in-traditional-medicine-by-oct/113339295?nt"
    },
    {
      articleImg: "/images/article-2-img.png",
      imageTitle: "Catalyst Management Services (CMS) Partners with Piramal Foundation to Advance the Ayushman Digital Bharat Mission",
      articleUrl: "https://aninews.in/news/business/catalyst-management-services-cms-partners-with-piramal-foundation-to-advance-the-ayushman-digital-bharat-mission20240913164203/"
    },
  ];

  return (
    <>
    <div className=" py-10 bg-custom-blue">
      <p className="text-4xl text-white text-center mb-4 font-semibold py-4">
        Media Article 
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4  container mx-auto md:px-52 px-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                className="w-[500px] h-[250px]"
                src={article.articleImg}
                alt={article.imageTitle}
              />
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 font-bold text-xl">
                {article.imageTitle}
              </h3>
              <Link
                href={article.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block"
              >
                <span className="bg-custom-yellow text-black px-4 py-2 mt-4 rounded flex items-center justify-center w-36 mx-auto md:mx-0">
                  Read More &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default MediaArticle;
