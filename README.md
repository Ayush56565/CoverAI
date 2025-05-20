# CoverAI Chrome Extension

CoverAI is a powerful Chrome extension that automatically generates personalized cover letters for job applications on LinkedIn and Indeed using the Gemini Pro API.

## Features

- **Automated Job Detail Extraction**: Web scraping capabilities to extract relevant information from job descriptions on LinkedIn and Indeed
- **AI-Powered Cover Letter Generation**: Integration with Google's Gemini Pro API to create tailored cover letters based on job requirements
- **Seamless User Experience**: View generated cover letters directly within the extension interface
- **Time-Saving Solution**: Streamline your job application process by eliminating manual cover letter writing

## Technology Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini Pro API
- **Browser Integration**: Chrome Extensions API

## Installation

1. Clone this repository
```
git clone https://github.com/yourusername/CoverAI.git
cd CoverAI
```

2. Install dependencies
```
npm install
```

3. Build the extension
```
npm run build
```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `build` directory

## Usage

1. Navigate to a job posting on LinkedIn or Indeed
2. Click the CoverAI extension icon in your browser toolbar
3. Review the automatically extracted job details
4. Click "Generate Cover Letter"
5. Customize the generated cover letter as needed
6. Copy the cover letter to use in your application

## Configuration

To use the Gemini Pro API, you'll need to:

1. Obtain an API key from the [Google AI Studio](https://ai.google.dev/)
2. Create a `.env` file in the project root with:
```
GOOGLE_API_KEY=your_api_key_here
```

## Development

To run the extension in development mode:
```
npm start
```

For testing:
```
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
