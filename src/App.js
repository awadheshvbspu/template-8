import './App.css';
import Sidenav from './component/Sidenav';
import Main from './component/Main';
import Work from './component/Work';
import Projects from './component/Projects';
import Contact from './component/Contact';

function App() {
  return (
    <>
    <Sidenav/>
      <Main/>
    
      <Work/>
      <Projects/>
      <Contact/>
      
    </>
  );
}

export default App;
