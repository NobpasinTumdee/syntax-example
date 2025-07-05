import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Projects from './Page/Projects';
import Experience from './Page/Experience';
import Skill from './Page/Skill';
import Contact from './Page/Contact';
import Rootlayout from './Layout/Rootlayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <h1>Not found this page...</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "skill", element: <Skill /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
