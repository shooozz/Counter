import Count from './Count';
import Btn from './Btn';
import {useState} from 'react'

function Main() {

    const [count, setCount] = useState(0);

    return(
        <div className="main">
            <Count 
                count={count}
                />
            <Btn 
                count={count}
                setCount={setCount}
            />
        </div>
    )
}

export default Main;