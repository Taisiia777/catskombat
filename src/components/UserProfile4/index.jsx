import { Heading, Img } from "../../components";
import React from "react";

export default function UserProfile4({
  userImage = "images/img_close_yellow_700.svg",
  userExchangeText = "Exchange",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-1 sm:gap-1`}>
      <Img src={userImage} alt="Exchange" className="mx-1.5 h-[22px]" />
      <Heading size="texts" as="p" className="!text-white-a700_4c">
        {userExchangeText}
      </Heading>
    </div>
  );
}
