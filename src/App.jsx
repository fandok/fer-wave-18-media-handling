import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyUploader from "./components/uploader";
import VideoPlayer from "./components/video-player";
import ImageViewer from "./components/image-viewer";
import PdfViewer from "./components/pdf-viewer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <VideoPlayer />
      <ImageViewer />
      <PdfViewer />
      <a
        href="https://pdfobject.com/pdf/sample.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        klik ini
      </a>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyUploader />
    </>
  );
}

export default App;
