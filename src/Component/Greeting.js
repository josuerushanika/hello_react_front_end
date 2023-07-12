import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { fetchGreeting } from "../redux/GreetingSlice/greetingSlice";

function Greeting() {
    const greeting = useSelector((state) => state.greeting.greetingstore);
    const dispatch = useDispatch ();
    useEffect(() =>{
        dispatch(fetchGreeting())
    }, [dispatch])

    return <div> <h1>{greeting.message}</h1></div>
}

export default Greeting;