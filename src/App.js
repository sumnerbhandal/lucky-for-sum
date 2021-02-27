import React, {useState, createRef, lazy, Suspense } from "react";
import NavDefault from './nav/navigation';
import HomePage from './home/home';
import { Footer } from './footer/footer';
import { ReadingProgress } from "./read-progress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./index.css";
import "./reset.css";
// import Project from "./project/project";

const Project = lazy(() => import('./project/project'));

export default function App() {
  const target = createRef();
  const [projectPreviewPosition, setProjectPreviewPosition] = useState(null);
  const [hpReferrer, setHpReferrer] = useState(false);
  function focusStates() {
    // Let the document know when the mouse is being used
    document.body.addEventListener('mousedown', function() {
      document.body.classList.add('using-mouse');
    });

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', function(event) {
      if (event.keyCode === 9) {
        document.body.classList.remove('using-mouse');
      }
    });
  }
  focusStates();


  document.title = "Lucky For Sum"
  return (
   <Router>
    <main>
      <NavDefault />
      <Routes>
        <Route path="/" element={ 
            <div>
              <HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}/>
            </div>
        }/>
        <Route path="/project/*" element={
           <div>
            {hpReferrer ? (<HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}  />) : null}
              <div className="project-page">
                <ReadingProgress target={target} />
                <Suspense fallback={<div></div>}>
                  <Project position={projectPreviewPosition}  target={target} />
                  <Footer />
                </Suspense>
              </div>
              </div>
          }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </Router>
  );
}

const NotFound = () => {
  return (
    <div className="section">
      <h1>Error 404 - Page Not Found</h1>
    </div>
  )
}

