# AI Image Generator

This AI Image Generator is a React application that utilizes the OpenAI GPT-4 model to generate images based on textual prompts. Users can describe what they want to see, and the AI will create an image matching the description.

## Development Environment Setup

To run this application locally, follow these steps:

1. **Clone this repository**.

2. **Install Dependencies**:
    ```bash
    npm i
    ```

3. **Set Up Your OPENAI API Key**:
   - Create an `.env.development.local` file in the root directory.
   - Open `.env.development.local` and add your OpenAI API key:
     ```plaintext
     REACT_APP_OPENAI_API_KEY=<your-OpenAI-api-key-here>
     ```

4. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

Once the development server is running, open your browser and go to `http://localhost:3000` (or another specified port). In the input field, describe what you want to see in the generated image. Click on the "Generate" button, and wait for the AI model to process your request. A loading indicator will be displayed. Once the image is generated, it will appear in the image display area.
