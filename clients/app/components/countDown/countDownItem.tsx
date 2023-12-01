import {zeroPad} from "react-countdown";

interface ItemProps {
    value: number,
    label: string,
}
export default function CountDownItem(props : ItemProps){
    return (
        <div className="flex items-center">
            <div className="flex flex-col text-center">
                <span className="text-xl font-bold text-[#ffffff]">{zeroPad(props.value, 2)}</span>
                <span className="text-xs font-light text-[#ffffff]">{zeroPad(props.label, 2)}</span>
            </div>
            {props.label !== 'Detik' && <span className="mx-5 text-xl text-[#ffffff] self-start">:</span>}
        </div>
    );
}