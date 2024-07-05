import { Img, Heading, Text } from "../../components";
import React from "react";

export default function TaskList({
  prop = "Список заданий",
  taskImage = "images/img_1384060_1.png",
  dailyNewsText = "Ежедневные новости",
  taskCount = "+567",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start gap-4 sm:gap-4 flex-1`}>
      <Heading size="text5xl" as="p">
        {prop}
      </Heading>
      <div className="flex items-center justify-center self-stretch rounded-[12px] border border-solid border-white-a700_4c bg-gray-900_4c p-2">
        <div className="flex flex-1 items-center justify-center gap-3.5">
          <Img src={taskImage} alt="Список заданий" className="h-[42px] w-[42px] object-cover" />
          <div className="flex flex-1 flex-col items-start gap-0.5">
            <Text size="text3xl" as="p">
              {dailyNewsText}
            </Text>
            <div className="flex items-center self-stretch">
              <Img src="images/img_user.svg" alt="Image" className="h-[20px] w-[20px]" />
              <Heading size="headingmd" as="p">
                {taskCount}
              </Heading>
            </div>
          </div>
        </div>
        <Img src="images/img_arrow_right.svg" alt="Ежедневные" className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
}
