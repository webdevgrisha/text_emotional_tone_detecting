# Emotional Tone Detection Web App

This project is a web application built with React and Vite that analyzes the emotional tone of text using the Google Cloud Natural Language API—specifically, the Analyzing Sentiment API. The application allows users to input text and determine its overall emotional tone, identifying it as positive, negative, or neutral. The result is visually represented with a color corresponding to the detected emotion and a dynamic sine wave graphic, illustrating the amplitude of the sentiment.

In addition to displaying the overall tone, the application provides a detailed breakdown for each sentence within the text, offering insights into sentence-specific emotions. This comprehensive approach helps users understand the nuances in emotional tone across the text.

The backend is powered by Firebase Cloud Functions for seamless API integration, and the project is deployed on Firebase Hosting for reliable and scalable performance.

## Web page

[Emotional Tone Detection Web App](https://emotional-tone-detector.web.app)

## Project Overview

- **Frontend:** React, Vite, TypeScript
- **Backend:** Firebase Cloud Functions (Node.js)
- **API Integration:** Google Cloud Natural Language API for tone analysis
- **Hosting:** Firebase Hosting
- **Functionality:** Analyze emotional tone of text, classifying it as positive, negative, or neutral. The result is displayed with color representation for each emotion and a sine wave graphic showing the sentiment's intensity. A sentence-level breakdown of emotions is also provided for a more detailed analysis.

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

Replace the values in the firebaseConfig object within the firebaseСonfig.js file with your new Firebase project credentials.

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

- Go to the [Google Cloud Console](https://console.cloud.google.com/), select the project that you created in firebase in the previous step and enable the **Natural Language API**.

Once everything is set up, you can deploy the backend and frontend using Firebase.

```bash
cd functions
firebase deploy --only functions
```


## API Integration

The app integrates with the **Google Cloud Natural Language API** to analyze the emotional tone of the text inputted by the user. When a user submits text, a backend Firebase Cloud Function processes the request and calls the API to determine the primary emotional tone. The response includes two key metrics: **magnitude** and **score**, which help interpret and display the sentiment:

- **Magnitude** represents the overall intensity or strength of the emotion, regardless of whether it is positive or negative. This value is displayed through an animated sine wave, where the amplitude visually reflects the intensity of the sentiment.
  
- **Score** indicates the direction and polarity of the sentiment:
  - A **positive score** (ranging from 0.1 to 1.0) represents a **positive emotion**, displayed with the color **green**.
  - A **negative score** (ranging from -1.0 to -0.1) represents a **negative emotion**, displayed with the color **red**.
  - A **score near 0** (between -0.1 and 0.1) represents a **neutral emotion**, displayed with the color **gray**.

These values are returned to the frontend, where the corresponding emotional tone is displayed with both the color and the animated sine wave graphic to enhance user experience and understanding of the sentiment.

## Firebase Cloud Functions

Cloud Functions handle requests from the frontend, call the Google Cloud Natural Language API to detect the emotional tone, and return the results to the user.

- The Cloud Functions are written in **Node.js**, and Firebase uses environment variables for secure handling of the API key.

## Usage

1. Enter text into the input field.
2. Click the "Check" button to send the text to the backend for processing.
3. The emotional tone of the text (positive, negative, or neutral) will be displayed below the input field, along with the corresponding color.
4. Alongside the emotional tone, an animated **sine wave** will appear to visually represent the **magnitude** of the sentiment. The wave's intensity and amplitude will change based on how strong or mild the emotion is, providing a dynamic way to understand the emotional depth of the text.


### Color Visualization Algorithm using Linear Interpolation
<details> <summary>Algorithm</summary>

Linear interpolation is used to smoothly transition the color based on the emotional score (score), which ranges from -1 (negative emotion) to +1 (positive emotion).

#### Formula:

`result = a + (b - a) * x`

where:
- **a** and **b** are the starting and ending colors,
- **x** is the interpolation factor, ranging from 0 to 1, based on the score value.

### 1. Negative Color (Red -> Gray)

- **Red component (r):** from 255 (red) to 128 (gray).
  - Formula: `r = 127 * |score| + 128`
- **Green and Blue components (g, b):** from 0 (red) to 128 (gray).
  - Formula: `g = b = 128 - 128 * |score|`

**Example:** With `score = -0.8`, the color will be: `rgb(204, 26, 26)`.

### 2. Positive Color (Gray -> Green)

- **Green component (g):** from 128 (gray) to 255 (green).
  - Formula: `g = 127 * score + 128`
- **Red and Blue components (r, b):** from 128 (gray) to 0 (green).
  - Formula: `r = b = 128 - 128 * score`

**Example:** With `score = 0.8`, the color will be: `rgb(26, 205, 26)`.

### Conclusion

Linear interpolation smoothly adjusts the color from one value to another based on the score. This helps visualize the emotional tone of the text (positive, negative, or neutral).

</details>

## Documentation

- [Google Cloud Natural Language API Documentation](https://cloud.google.com/natural-language/docs)
- [Analyzing Sentiment doc](https://cloud.google.com/natural-language/docs/analyzing-sentiment#language-sentiment-file-nodejs)
- [Sentiment object](https://cloud.google.com/natural-language/docs/reference/rest/v2/Sentiment)
- [Build your first web app with Firebase](https://firebase.google.com/learn/pathways/firebase-web)

## Version Control

This project is managed using Git. You can find the repository on GitHub:

- [GitHub Repository Link](https://github.com/your-username/emotional-tone-detection)
