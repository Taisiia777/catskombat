import { Heading, Img } from "../../components";
import React from "react";

export default function DailyReward({ rewardText = "Ежедневная награда", timeText = "14:13", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-[32%] gap-1 p-2 sm:gap-1 rounded-[12px]`}
    >
      <div className="flex flex-col items-center self-stretch">
        <div className="relative z-[2] h-[6px] w-[6px] self-end rounded-[3px] bg-white-a700_01" />
        <Img
          src="images/img_calendar_3981416_3297354.png"
          alt="Ежедневная"
          className="relative mt-[-2px] h-[36px] object-cover"
        />
        <Heading size="headingxs" as="p" className="mt-1.5">
          {rewardText}
        </Heading>
      </div>
      <Heading size="textlg" as="p" className="!text-white-a700_66">
        {timeText}
      </Heading>
    </div>
  );
}
