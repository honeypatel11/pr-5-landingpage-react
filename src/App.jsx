import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Startup from './component/Startup';
import Feature from './component/Feature';
import Responsive from './component/Responsive';
import Future from './component/Future';
import Team from './component/Team';

const App = () => {
  return (
    <div>
      <Header />
      <Startup/>
      <Feature/>
      <Responsive/>
      <Future/>
      <Team/>
    </div>
  )
}

export default App