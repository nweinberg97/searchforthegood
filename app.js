// App.js
import React from "react"; // Import React library for building UI
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Main container for the landing page */}

      {/* Header Section */}
      <header className="header">
        <div className="logo">Search for the Good</div>
        <h1 className="tagline">Search for the Good</h1>
      </header>

      {/* Video Embed Section */}
      <main className="main">
        <div className="video-container">
          {/* Embedding a YouTube video */}
          <iframe
            className="video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video link
            title="Search for the Good"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Button below the video */}
        <div className="button-container">
          <a
            className="button"
            href="https://forms.google.com/example" // Replace with your Google Form link
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <a href="mailto:example@example.com" className="footer-link">
          Contact Us
        </a>
        <a
          href="https://linkedin.com/in/example" // Replace with your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://forms.google.com/team-join" // Replace with your team join link
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Join the Team
        </a>
      </footer>
    </div>
  );
}

export default App;
