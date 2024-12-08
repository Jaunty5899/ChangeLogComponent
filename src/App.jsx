import "./App.css";

let data = [
  {
    date: "September 3, 2024",
    logData: "Announcing Projects on frontend Roadmap",
  },
  {
    date: "Augugst 28, 2024",
    logData: "Build your learning habits with learning streaks",
  },
  { date: "August 25, 2024", logData: "Git and GitHub Roadmap" },
  {
    date: "August 22, 2024",
    logData: "Submit your project solution and get feedback",
  },
  { date: "August 15, 2024", logData: "Backend project Ideas" },
  { date: "August 10, 2024", logData: "Redis Roadmap" },
  {
    date: "August 1, 2024",
    logData: "Changelog page to help you stay in the loop",
  },
];

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
            {data.map((element) => {
              return <li>{element.date}</li>;
            })}
          </ul>
          <ul className="changeLog">
            {data.map((element) => {
              return <li>{element.logData}</li>;
            })}
          </ul>
        </div>
        <button className="fullChangeLog">Visit Complete Changelog</button>
      </div>
    </>
  );
}

export default App;
