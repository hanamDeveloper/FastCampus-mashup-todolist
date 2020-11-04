import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData = {
    velopert: {
        name: '김영섭',
        description: 'zmf1119@naver.com'
    },
    homer: {
        name: '호머 심슨',
        description : '심슨가족의 아빠역할.',
    }
}

function Profile({ match }){
    const { username } = match.params;
    const profile = profileData[username];

    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
            <WithRouterSample />
        </div>
    )
}

export default Profile;