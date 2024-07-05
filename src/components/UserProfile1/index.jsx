import { Heading, Img } from "../../components";
import React from "react";

export default function UserProfile1({
  userTitle = "CEO",
  userProfitLabel = "Прибыль в час",
  userProfitValue = "+1.61K",
  userLevel = "lvl 13",
  userFollowersCount = "2K",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-2 sm:gap-2 bg-white-a700_0f flex-1 rounded-[12px]`}
    >
      <div className="flex items-center justify-center gap-4 self-stretch border-b border-solid border-white-a700_14 p-2">
        <div className="flex flex-col items-center justify-center rounded-[18px] bg-white-a700_33 p-1">
          <Img src="images/img_lock_closed.svg" alt="Ceo" className="h-[24px] w-[24px]" />
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          <Heading as="p">{userTitle}</Heading>
          <div className="flex w-[52%] flex-col items-center">
            <Heading size="textxs" as="p" className="!text-white-a700_7f">
              {userProfitLabel}
            </Heading>
            <div className="flex items-center justify-center gap-1 self-stretch">
              <Img src="images/img_user.svg" alt="161k" className="h-[12px] w-[12px]" />
              <Heading size="headings" as="p" className="tracking-[-0.24px]">
                {userProfitValue}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-2 flex items-center justify-center gap-3 self-stretch">
        <Heading as="p">{userLevel}</Heading>
        <div className="h-full w-px bg-white-a700_33" />
        <div className="flex flex-1 items-center gap-1.5">
          <Img src="images/img_user.svg" alt="2k" className="h-[20px] w-[20px]" />
          <Heading size="headingmd" as="p" className="tracking-[-0.28px]">
            {userFollowersCount}
          </Heading>
        </div>
      </div>
    </div>
  );
}
