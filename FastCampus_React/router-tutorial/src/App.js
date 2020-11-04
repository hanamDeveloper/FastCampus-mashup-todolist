import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';



function App() {
  return (
    <div>
      <div>
        <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>사용자 목록</Link>
        </li>
        <li>
          <Link to='/history'>예제</Link>
        </li>
        </ul>
      </div>
      <div>
        <Route path = '/' component={Home} exact/>
        <Route path = '/About' component={About} />
        <Route path = '/profiles' component={Profiles} />
        <Route path = '/history' component={HistorySample} />
      </div>
    </div>
  );
}

export default App;
