import { Heading, Img, Text, Button } from "../../components";
import React from "react";

export default function UserProfile5({
  userName = "Leonid Miller",
  userFollowers = "10,67k",
  additionalUserFollowers = "+175 K",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center p-1.5 border-white-a700_4c border border-solid bg-gray-900_4c flex-1 rounded-[12px]`}
    >
      <div className="flex flex-1 items-center justify-center gap-3.5">
        <Button size="xl" shape="round" className="w-[42px] self-end">
          <Img src="images/img_settings.svg" />
        </Button>
        <div className="flex flex-1 flex-col items-start gap-1">
          <Text size="text3xl" as="p">
            {userName}
          </Text>
          <div className="flex items-center gap-1.5 self-stretch">
            <Img src="images/img_user.svg" alt="1067k" className="h-[20px] w-[20px]" />
            <Heading size="headingmd" as="p">
              {userFollowers}
            </Heading>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-1">
        <Img src="images/img_user.svg" alt="175 k" className="h-[20px] w-[20px]" />
        <Heading size="headingmd" as="p" className="tracking-[-0.28px]">
          {additionalUserFollowers}
        </Heading>
      </div>
    </div>
  );
}
