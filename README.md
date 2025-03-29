# Travel Buddy - AI Travel Recommendation Chatbot

A React-based chatbot that uses Google's Gemini API to provide personalized travel recommendations.

## Features

- Modern, responsive UI with Tailwind CSS
- Real-time chat interface with user/bot avatars
- Loading indicators while waiting for responses
- Message formatting with basic Markdown support
- Context-aware responses using chat history
- Component-based architecture for easy maintenance

## Project Structure

```
travel-buddy-react/
├── public/               # Static files
├── src/                  # Source code
│   ├── components/       # React components
│   ├── services/         # API services
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React context
│   ├── App.jsx           # Main app component
│   └── index.jsx         # Entry point
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## Getting Started

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   REACT_APP_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
   ```
4. Start the development server
   ```
   npm start
   ```

## How to Use

Simply type your travel preferences in the chat input and ask for recommendations. The chatbot will analyze your preferences and suggest suitable destinations based on:

- Climate preferences
- Activities you enjoy
- Budget constraints
- Travel duration and season

## Customization

You can easily customize the chatbot by:

- Modifying the UI components in the `components` folder
- Adjusting the Tailwind theme in `tailwind.config.js`
- Changing the API parameters in `geminiService.js`

## Technologies Used

- React
- Tailwind CSS
- Heroicons
- Google Gemini API

## License

MIT