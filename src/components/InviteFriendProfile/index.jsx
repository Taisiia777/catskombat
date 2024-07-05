import { Text, Heading, Img } from "../../components";
import React from "react";

export default function InviteFriendProfile({
  inviteFriendText = "Пригласить друга",
  rewardText = "+5 000",
  inviteDescriptionText = "для вас и вашего друга",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center gap-2.5 p-2 bg-gray-900_66 flex-1 rounded-[12px]`}
    >
      <Img src="images/img_realistic_3d_gi.png" alt="Пригласить" className="h-[46px] w-[46px] object-cover" />
      <div className="flex flex-1 flex-col items-start gap-0.5">
        <Text size="text3xl" as="p">
          {inviteFriendText}
        </Text>
        <div className="flex flex-wrap items-center gap-1.5">
          <Img src="images/img_user.svg" alt="Image" className="h-[20px] w-[20px]" />
          <Heading size="headingmd" as="p" className="!text-orange-a200">
            {rewardText}
          </Heading>
          <Text as="p" className="self-end">
            {inviteDescriptionText}
          </Text>
        </div>
      </div>
    </div>
  );
}
