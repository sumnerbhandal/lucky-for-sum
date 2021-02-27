import React, {useState, createRef, lazy, Suspense } from "react";
import NavDefault from './nav/navigation';
import { Footer } from './footer/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./index.css";
import "./reset.css";

const Project = lazy(() => import('./project/project'));
const HomePage = lazy(() => import('./home/home'));
const ReadingProgress = lazy(() => import('./read-progress'));

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
              <Suspense fallback={<div></div>}>
                <HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}/>
              </Suspense>
            </div>
        }/>
        <Route path="/project/*" element={
           <div>
            {hpReferrer ? (
              <Suspense fallback={<div></div>}>
                <HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}  />
              </Suspense>
              ) : null}
              <div className="project-page" id="project-page">
                <Suspense fallback={<div></div>}>
                  <ReadingProgress target={target} />
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

