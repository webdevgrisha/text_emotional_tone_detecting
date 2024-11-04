# Emotional Tone Detection Web App

This project is a simple web application built with React and Vite, designed to detect the emotional tone of text using the **Google Cloud Natural Language API**. The application allows users to input text and check the emotional tone (positive, negative, or neutral) using the Google Cloud AI-powered service. Additionally, the emotional tone is represented visually with corresponding colors for each emotion.

The backend is powered by Firebase Cloud Functions, and the project is hosted using Firebase Hosting.

## Web page

[Emotional Tone Detection Web App](https://emotional-tone-detector.web.app)

## Project Overview

- **Frontend:** React, Vite
- **Backend:** Firebase Cloud Functions (Node.js)
- **API Integration:** Google Cloud Natural Language API for tone analysis
- **Hosting:** Firebase Hosting
- **Functionality:** Analyze emotional tone of text and display the result in a user-friendly format with color representation for each emotion.

## Features

- Text input field for user input.
- "Check" button to trigger the emotional tone analysis.
- Display of the primary emotional tone (positive, negative, neutral) after processing the text.
- Results are displayed in a clear and easy-to-understand format with a color corresponding to the emotion:
  - **Positive:** Green
  - **Negative:** Red
  - **Neutral:** Gray
- User-friendly design with visual cues for emotional tone.

## Getting Started

### Prerequisites

Before starting the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Vite](https://vitejs.dev/) (for React project setup)
- [Firebase CLI](https://firebase.google.com/docs/cli) (to deploy the project and functions)
- A **Google Cloud** account with access to the **Natural Language API**.

### Installation


## Getting Started

### Prerequisites

Before starting the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Vite](https://vitejs.dev/) (for React project setup)
- [Firebase CLI](https://firebase.google.com/docs/cli) (to deploy the project and functions)
- A **Google Cloud** account with access to the **Natural Language API**.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/emotional-tone-detection.git
cd emotional-tone-detection
```

2. Install frontend dependencies:

```bash
npm install
```

3. Set up Firebase:

**Important:** To use Cloud Functions, you need to be on the Blaze plan in Firebase, as free-tier plans do not support Cloud Functions.

- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new Firebase project or select an existing one.
- Add a web app to your Firebase project.
- Switch to the Blaze plan to enable Cloud Functions.
- Copy the Firebase configuration object provided for your web app.

Then, run the following commands:

```bash
npm install -g firebase-tools
firebase login
firebase init
```

- During Firebase initialization, select, **Functions**, and **Hosting** as the services you want to use.
- Choose your Firebase project and make sure you're using the **Blaze plan** for Cloud Functions.

4. Set up the backend:

```bash
cd functions
npm install
```

5. Set up the Google Cloud Natural Language API:

- Go to the [Google Cloud Console](https://console.cloud.google.com/), create a new project, and enable the **Natural Language API**.

Once everything is set up, you can deploy the backend and frontend using Firebase.

```bash
cd functions
firebase deploy --only functions
```

### Integrating Your Firebase API Key

1. Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and add a web app to your project.
2. Copy the Firebase configuration object provided by Firebase for your new project. It should look like this:

```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
```

Replace the firebaseConfig values in the firebase-config.js file with your new Firebase project credentials.

Now each developer or user who wants to use the project will need to follow the same steps to integrate their own API keys and use Firebase services.

## API Integration

The app integrates with the **Google Cloud Natural Language API** to analyze the emotional tone of the text inputted by the user. The backend Firebase Cloud Function processes the request and calls the API to get the primary emotional tone, which is returned to the frontend along with a color representing the emotion:

- **Green** for positive
- **Red** for negative
- **Gray** for neutral

## Firebase Cloud Functions

Cloud Functions handle requests from the frontend, call the Google Cloud Natural Language API to detect the emotional tone, and return the results to the user.

- The Cloud Functions are written in **Node.js**, and Firebase uses environment variables for secure handling of the API key.

## Usage

1. Enter text into the input field.
2. Click the "Check" button to send the text to the backend for processing.
3. The emotional tone of the text (positive, negative, or neutral) will be displayed below the input field, along with the corresponding color:
   - **Positive:** Green
   - **Negative:** Red
   - **Neutral:** Gray

## Documentation

- [Google Cloud Natural Language API Documentation](https://cloud.google.com/natural-language/docs)

## Version Control

This project is managed using Git. You can find the repository on GitHub:

- [GitHub Repository Link](https://github.com/your-username/emotional-tone-detection)
