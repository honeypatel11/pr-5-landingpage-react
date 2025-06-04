import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Startup from './component/Startup';
import Feature from './component/Feature';

const App = () => {
  return (
    <div>
      <Header />
      <Startup/>
      <Feature/>
    </div>
  )
}

export default App