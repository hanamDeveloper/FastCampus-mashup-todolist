import React, { useEffect } from 'react';

function HistorySample({ history }){
    const goback = () => {
        history.goBack();
    }

    const goHome = () => {
        history.push('/')
    }

    useEffect(() => {
        console.log(history)
        const unblock = history.block('정말 떠날거야?');
        return () => {
            unblock();
        };
    }, [history])

    const replaceToHome = () => {
        history.replace('/')
    }

    return(
        <div>
            <button onClick={goback}>뒤로가기</button>
            <button onClick={goHome}>홈</button>
            <button onClick={replaceToHome}>홈 (Replace)</button>
        </div>
    )
}

export default HistorySample;