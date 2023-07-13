import './App.css';

import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreHome } from './layouts/Homepage/ExploreHome';
import { Carousel } from './layouts/Homepage/Carousel';
import { Footer } from './layouts/Footer/Footer';




function App() {
  return (
   <div>
    <Navbar/> 
    <ExploreHome/>
    <Carousel/>
    <Footer/>
    </div>
  );
}


export default App;
