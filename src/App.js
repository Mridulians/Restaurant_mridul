import './App.css';
import { Header , AboutUs , SpecialMenu , Chef , Intro , Laurels , Gallery , FindUs , Footer} from './container'
import {Navbar} from './components'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <AboutUs /> 
     <SpecialMenu />
     <Chef/>
     <Intro />
     <Laurels />
     <Gallery />
     <FindUs />
     <Footer />
    </div>
  );
}


export default App;
