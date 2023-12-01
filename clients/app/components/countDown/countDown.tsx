import Countdown, {CountdownRendererFn} from "react-countdown";
import CountDownRenderer from "./countDownRenderer";

interface Props {
    className?:string;
    duration: number;
    title:string;
}

export default function CountDown(props: Props) {
    const countDown : CountdownRendererFn =({
        days,
        hours,
        minutes,
        seconds,
    })=> {
        return (
            <CountDownRenderer days={days} hours={hours} minutes={minutes} seconds={seconds}/>
        )
    }
    return <div className={`text-center ${props.className}`}>
        <p className="text-[#ffffff] my-3 text-xs">{props.title}</p>
        <Countdown date={props.duration} renderer={countDown}/>
    </div>
}