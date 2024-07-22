import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ViewerComponent = () => (
  <Viewer fileUrl="https://pdfobject.com/pdf/sample.pdf" />
);

export default ViewerComponent;
