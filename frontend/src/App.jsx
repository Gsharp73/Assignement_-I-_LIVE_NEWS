import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '1d9cc04746014ab78e264df1a725cdce';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const CACHE_KEY = 'GMINOR';
const CACHE_TIME = 15 * 60 * 1000;

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      
      // Check if cache exists and is not expired
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cacheTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
      
      if (cachedData && cacheTimestamp && (new Date().getTime() - cacheTimestamp < CACHE_TIME)) {
        // If valid cache exists, use it
        setNews(JSON.parse(cachedData));
        setLoading(false);
      } else {
        // If no cache or expired cache, fetch fresh data
        const response = await axios.get(API_URL);
        setNews(response.data.articles);

        // Store the response in localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify(response.data.articles));
        localStorage.setItem(`${CACHE_KEY}_timestamp`, new Date().getTime());
      }
    } catch (error) {
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Latest News</h1>
      </header>

      <main className="container mx-auto p-4">
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600">
            <p>{error}</p>
            <button
              onClick={fetchNews}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600">{article.description?.substring(0, 100)}...</p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">By: {article.author || 'Unknown'}</p>
                    <p className="text-sm text-gray-500">
                      Published: {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-4 block"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 NewsApp</p>
      </footer>
    </div>
  );
};

export default NewsApp;