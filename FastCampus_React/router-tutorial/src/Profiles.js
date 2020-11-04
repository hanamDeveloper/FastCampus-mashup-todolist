import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';



function Profiles() {


    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to ="/profiles/velopert">벨로퍼트</Link>
                </li>
                <li>
                    <Link to ="/profiles/homer">호머</Link>
                </li>
            </ul>
            <Route path ='/profiles' exact render={() => <div>사용자를 선택해 주세요</div>} />
            <Route path ='/profiles/:username' component={Profile} />
            
        </div>
    )
}

export default Profiles