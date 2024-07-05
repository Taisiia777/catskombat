import { Img } from "components/Img";
import React from "react";

export default function UserProfile({...props}) {
    return(
        <div
        {...props}
        className={`${props.className} flex justify-center items-center w-[32%] p6 sm:p-5 border-cyan-400_01 border-t border-r border-solid bg-gradient1 rounded-[12px]`}
        >
            <Img src="images/img_laptop.svg" alt="Laptop" className="h-[50px] w-[68%]"/>
        </div>
    )
}