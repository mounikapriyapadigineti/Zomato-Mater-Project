//HOC

import HomeLayoutHOC from './HOC/Home.HOC';
import Temp from './Components/temp';
//Import CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <HomeLayoutHOC path='/:type' exact component={Temp} />
    </>
  );
}

export default App;
