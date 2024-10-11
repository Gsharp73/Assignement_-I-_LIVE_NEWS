# NewsApp

NewsApp is a React-based web application that displays the latest news headlines from the United States using the News API. This project uses Vite as the build tool.

## Installation and Running the App

Follow these steps to set up and run the NewsApp:

1. Clone the repository:
   ```
   git clone https://github.com/Gsharp73/Assignment_-I-_LIVE_NEWS.git
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory of your project and add your News API key:
   ```
   KEY=your_api_key_here
   ```
   Replace `your_api_key_here` with your actual News API key.

   Note: In Vite, environment variables must start with `VITE_` to be exposed to your React application.

4. Run the React app:
   ```
   npm run dev
   ```

5. Open the URL shown in your terminal (usually http://localhost:5173) in your browser to view the app.

## Important Notes on Environment Variables in Vite

- For Vite to expose environment variables to your application, they must be prefixed with `VITE_`.
- You can access these variables in your code using `import.meta.env.VITE_VARIABLE_NAME`.
- Vite's environment variables are available at runtime, so you don't need to restart the server when you change them.
- Only variables that start with `VITE_` will be exposed to your Vite-processed code.

## Features

- Fetches top headlines from the US using the News API
- Responsive design with a grid layout
- Implements client-side caching to reduce API calls
- Displays article images, titles, descriptions, authors, and publication dates
- Provides links to full articles

## Technologies Used

- React
- Vite (as build tool)
- Axios for API requests
- Tailwind CSS for styling
- News API for fetching news data

## Environment Variables

This project uses the following environment variables:

- `KEY`: Your News API key

Make sure to keep your `.env` file private and never commit it to version control. Add `.env` to your `.gitignore` file.

## Troubleshooting

If your environment variables are not being recognized:
1. Ensure they are prefixed with `VITE_`
2. Check that the `.env` file is in the root directory of your project
3. Verify that you're accessing the variable correctly in your code: `import.meta.env.VITE_NEWS_API_KEY`
4. If using TypeScript, you may need to add type definitions for `import.meta.env`

## License

This project is licensed under the MIT License.