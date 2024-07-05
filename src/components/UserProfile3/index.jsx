import { Img, Heading, Text } from "../../components";
import React from "react";

export default function UserProfile3({
  telegramLogoImage = "images/img_telegram_logo_1.png",
  telegramSubscriptionText = "Подписывайся на наш Telegram",
  userFollowerCount = "+567",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center p-2 border-white-a700_4c border border-solid bg-gray-900_4c flex-1 rounded-[12px]`}
    >
      <div className="flex flex-1 items-center justify-center gap-3.5">
        <Img src={telegramLogoImage} alt="Image" className="h-[42px] w-[42px] object-cover" />
        <div className="flex flex-1 flex-col items-start gap-0.5">
          <Text size="text3xl" as="p">
            {telegramSubscriptionText}
          </Text>
          <div className="flex items-center self-stretch">
            <Img src="images/img_user.svg" alt="Image" className="h-[20px] w-[20px]" />
            <Heading size="headingmd" as="p">
              {userFollowerCount}
            </Heading>
          </div>
        </div>
      </div>
      <Img src="images/img_arrow_right.svg" alt="Image" className="h-[16px] w-[16px]" />
    </div>
  );
}
