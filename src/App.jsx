import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVTemplate from "./components/CVTemplate";

function App() {
  return (
    <>
      <main>
        <div className="sidebar">
          <GeneralInfo />
          <Education />
          <Experience />
        </div>
        <div className="content">
          <CVTemplate />
        </div>
      </main>
    </>
  );
}

export default App;
