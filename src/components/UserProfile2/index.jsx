import { Heading, Img, Button } from "../../components";
import React from "react";

export default function UserProfile2({
  ceoText = "CEO",
  profitPerHourText = "Прибыль в час",
  userGrowthText = "+1.61K",
  levelText = "lvl 13",
  userCountText = "2K",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-2 sm:gap-2 bg-white-a700_0f flex-1 rounded-[12px]`}
    >
      <div className="flex items-center justify-center gap-4 self-stretch border-b border-solid border-white-a700_14 p-2">
        <Button color="white_A700_33" size="md" shape="circle" className="w-[36px] !rounded-[18px]">
          <Img src="images/img_lock_closed.svg" />
        </Button>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          <Heading as="p">{ceoText}</Heading>
          <div className="flex w-[52%] flex-col items-center">
            <Heading size="textxs" as="p" className="!text-white-a700_7f">
              {profitPerHourText}
            </Heading>
            <div className="flex items-center justify-center gap-1 self-stretch">
              <Img src="images/img_user.svg" alt="161k" className="h-[12px] w-[12px]" />
              <Heading size="headings" as="p" className="tracking-[-0.24px]">
                {userGrowthText}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-2 flex items-center justify-center gap-3 self-stretch">
        <Heading as="p">{levelText}</Heading>
        <div className="h-full w-px bg-white-a700_33" />
        <div className="flex flex-1 items-center gap-1.5">
          <Img src="images/img_user.svg" alt="2k" className="h-[20px] w-[20px]" />
          <Heading size="headingmd" as="p" className="tracking-[-0.28px]">
            {userCountText}
          </Heading>
        </div>
      </div>
    </div>
  );
}
