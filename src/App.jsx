import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="Title">Changelog</h1>
        <span className="SubTitle">
          Here's everything we have shipped in the past few days
        </span>
        <div className="changeLogContainer">
          <ul className="changeLogDate">
            <li>September 3, 2024</li>
            <li>Augugst 28, 2024</li>
            <li>August 25, 2024</li>
            <li>August 22, 2024</li>
            <li>August 15, 2024</li>
            <li>August 10, 2024</li>
            <li>August 1, 2024</li>
          </ul>
          <ul className="changeLog">
            <li>Announcing Projects on frontend Roadmap</li>
            <li>Build your learning habits with learning streaks</li>
            <li>Git and GitHub Roadmap</li>
            <li>Submit your project solution and get feedback</li>
            <li>Backend project Ideas</li>
            <li>Redis Roadmap</li>
            <li>Changelog page to help you stay in the loop</li>
          </ul>
        </div>
        <button className="fullChangeLog">Visit Complete Changelog</button>
      </div>
    </>
  );
}

export default App;
