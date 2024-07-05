import { Button, Heading, Img, Text } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function MineSpecialsBuycardOne({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[994px]">
      <div className="flex w-full min-w-[994px] justify-center rounded-tl-[40px] rounded-tr-[40px] bg-gray-900 p-6 sm:p-5">
        <div className="mb-1.5 flex w-[42%] flex-col items-center sm:w-full">
          <div className="mx-1.5 flex items-start justify-between gap-5 self-stretch sm:mx-0">
            <Img
              src="images/img_group_34.png"
              alt="Image"
              className="ml-[140px] h-[116px] w-[40%] self-center object-cover"
            />
            <Img src="images/img_cross.svg" alt="Cross" className="h-[24px] w-[24px]" />
          </div>
          <div className="mx-8 mt-4 flex flex-col items-center gap-2 self-stretch sm:mx-0 sm:gap-2">
            <Heading size="heading3xl" as="h1">
              CoinMarketCap CO
            </Heading>
            <Text as="p">
              Для этого нам нужно 10 миллионов подписчиков.
              <br />
              Можем ли мы попросить вас о помощи, CEO?
            </Text>
          </div>
          <Button
            color="cyan_600"
            size="2xl"
            className="mx-[62px] mt-4 w-full rounded-[16px] font-semibold sm:mx-0 sm:px-5 sm:text-[13px]"
          >
            Смотрите наши новые Shorts
          </Button>
          <Heading as="h2" className="mt-[22px]">
            Прибыль в час
          </Heading>
          <div className="mt-1 flex items-center gap-1">
            <Img src="images/img_user.svg" alt="User" className="h-[20px] w-[20px]" />
            <Heading size="headingmd" as="h2">
              +567
            </Heading>
          </div>
          <div className="mt-[18px] flex gap-3">
            <Img src="images/img_user.svg" alt="User" className="h-[32px] w-[32px]" />
            <Heading size="heading2xl" as="h2" className="tracking-[-0.48px] !text-white-a700 sm:text-xl">
              1200
            </Heading>
          </div>
          <Button color="cyan_600" size="5xl" className="mt-7 w-full rounded-[16px] font-bold sm:px-5 sm:text-[17px]">
            Получить
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
