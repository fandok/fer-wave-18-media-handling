import { Worker } from "@react-pdf-viewer/core";
import ViewerComponent from "./viewer";

const PdfViewer = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <ViewerComponent />
    </Worker>
  );
};

export default PdfViewer;
