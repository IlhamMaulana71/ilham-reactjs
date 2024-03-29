import { useDispatch, useSelector } from "react-redux";
import {  decrementWicthCheckingAction, increment } from "../../app/features/Counter/action";

const Counter = () => {

    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(decrementWicthCheckingAction(1))}>-</button>
            {''} <span>{count}</span> {''}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;