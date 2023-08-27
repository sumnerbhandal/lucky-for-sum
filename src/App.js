import React, {useState, createRef, lazy, Suspense } from "react";
import NavDefault from './nav/navigation';
import { Footer } from './footer/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./index.css";
import "./reset.css";
import background from "./Speckle-3x.png";


const ThemeToggle = lazy(() => import('./dark-light-toggle'));
const Project = lazy(() => import('./project/project'));
const HomePage = lazy(() => import('./home/home'));
const WorkPage = lazy(() => import('./home/work'));
const Blog = lazy(() => import('./blog/blog'));
const ReadingProgress = lazy(() => import('./read-progress'));
const Error = lazy(() => import('./404/index'));

const App = () => {

  const target = createRef();
  const [projectPreviewPosition, setProjectPreviewPosition] = useState(null);
  const [hpReferrer, setHpReferrer] = useState(false);
  function focusStates() {
    document.body.addEventListener('mousedown', function() {
      document.body.classList.add('using-mouse');
    });
    document.body.addEventListener('keydown', function(event) {
      if (event.keyCode === 9) {
        document.body.classList.remove('using-mouse');
      }
    });
  }
  focusStates();

  const hide = {
    display: "none"
  }

  return (
   <Router>
      {/* {loading === false ? ( */}
      <main id="main" style={{ backgroundImage: `url(${background})` }}>
        <div aria-hidden="true" className="loader-wipe"></div>
        <div aria-hidden="true" className="loader-wipe-black"></div>
        <div aria-hidden="true" className="loader-wipe-fixed"><img className="loader-image" src={require('./nav/icons/lucky-for-sum-logo.svg')} alt="Home"/></div>

        <NavDefault />
        <Suspense fallback={<div className="header-side-container"></div>}>
          <ThemeToggle />
        </Suspense>
        <Routes>
          <Route exact strict path="/" element={ 
              <div>
                <Suspense fallback={<div></div>}>
                  <HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}/>
                </Suspense>
              </div>
          }/>
          <Route path="/project/*" element={
            <div>
                <div className={`project-page ${!hpReferrer ? "direct-link" : "" }`} id="project-page" tabIndex="0">
                  <Suspense fallback={<div></div>}>
                    <ReadingProgress target={target} />
                  </Suspense>
                  <Suspense fallback={<div></div>}>
                    <Project position={projectPreviewPosition}  target={target} />
                    <Footer />
                  </Suspense>
                </div>
                <Suspense fallback={<div></div>}>
                    {hpReferrer ? (
                        <div tabIndex="0" style={hide}>
                          <HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}  />
                        </div>
                      ) : null}
                  </Suspense>

              </div>
            }/>
            {/* <Route path="/about" element={ 
              <div>
                <Suspense fallback={<div></div>}>
                  <AboutPage position={projectPreviewPosition}  target={target} />
                </Suspense>
              </div>
            }/> */}
            <Route exact path="/work" element={
                  <div>
                    <Suspense fallback={<div></div>}>
                        <WorkPage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)} />
                    </Suspense>
                  </div>}
                />
            <Route exact path="/blog" element={
                  <div>
                    <Suspense fallback={<div></div>}>
                        <Blog HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)} />
                    </Suspense>
                  </div>}
                />

            <Route path="/blog/article/*"
                  element={
                      <div>
                          <div className={`project-page ${!hpReferrer ? "direct-link" : "" }`} id="project-page" tabIndex="0">
                            <Suspense fallback={<div></div>}>
                              <ReadingProgress target={target} />
                            </Suspense>
                            <Suspense fallback={<div></div>}>
                              <Project position={projectPreviewPosition}  target={target} />
                              <Footer />
                            </Suspense>
                          </div>
                          <Suspense fallback={<div></div>}>
                              {hpReferrer ? (
                                  <div tabIndex="0" style={hide}>
                                    <HomePage HpReferrer={(value) => setHpReferrer(value)} PreviewPosition={(value) => setProjectPreviewPosition(value)}  />
                                  </div>
                                ) : null}
                            </Suspense>
                        </div>
                      }
                />

             <Suspense fallback={<div></div>}>
                <Route path="*" element={<Error />} />
            </Suspense>
        </Routes>
      </main>
      {/* ) : (
        <div className="loader-wipe"></div>
      )} */}
  </Router>
  );
}



export default App;