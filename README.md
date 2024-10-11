# NewsApp

NewsApp is a React-based web application that displays the latest news headlines from the United States. It uses the News API to fetch current news articles and presents them in a responsive, card-based layout.

## Features

- Fetches top headlines from the US using the News API
- Responsive design with a grid layout for various screen sizes
- Implements client-side caching to reduce API calls and improve performance
- Displays article images, titles, descriptions, authors, and publication dates
- Provides links to full articles for further reading

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine
- A News API key (sign up at [https://newsapi.org](https://newsapi.org))

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Gsharp73/Assignment_-I-_LIVE_NEWS.git
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your News API key:
   ```
   VITE_NEWS_API_KEY='your_api_key_here'
   ```

## Usage

To run the application in development mode:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:5173) to view it in the browser.

## Technologies Used

- React
- Axios for API requests
- Tailwind CSS for styling
- News API for fetching news data
