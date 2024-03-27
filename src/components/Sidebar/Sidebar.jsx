import ButtonMobile from "../ButtonMobile/ButtonMobile";
import ButtonPC from "../ButtonPC/ButtonPC";
import ButtonPlatformPC from "../ButtonPlatformPC/ButtonPlatformPC";
import CounterUP from "../CounterUp/CounterUp";

export default function Sidebar() {
    return (
        <>
            <ButtonMobile />
            <ButtonPC />
            <ButtonPlatformPC />
            <CounterUP />
        </>
    )
}