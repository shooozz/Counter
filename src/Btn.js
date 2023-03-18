import plus from './plus.png';
import re from './re.png';
import minus from './minus.png';


function Btn(props) {

    return (
        <div className="btn">
            <button className='plus' onClick={counter}><img src={plus} alt=""/></button>
            <button className='reset' onClick={reset}><img src={re} alt=""/></button>
            <button className='minus' onClick={deduct}><img src={minus} alt=""/></button>
        </div>
    )

    function counter() {
        props.setCount(props.count + 1)
    }
    function deduct() {
        if (props.count > 0) {
            props.setCount(props.count - 1)
        }
        else {
            props.setCount(0)
        }
    }
    function reset() {
        props.setCount(0)
    }
}

export default Btn;