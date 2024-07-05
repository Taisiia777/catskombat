import { Button, Text, Heading, Img } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function MineSpecialsBuycard({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[994px]">
      <div className="flex w-full min-w-[994px] justify-center rounded-tl-[40px] rounded-tr-[40px] bg-gray-900 p-6 sm:p-5">
        <div className="mb-1.5 flex w-[42%] flex-col items-center sm:w-full">
          <div className="mx-1.5 flex items-start justify-between gap-5 self-stretch sm:mx-0">
            <Img
              src="images/img_3d_space_rocket.png"
              alt="3dspacerocket"
              className="ml-[134px] mt-[18px] h-[116px] w-[116px] self-end object-cover"
            />
            <Img src="images/img_cross.svg" alt="Cross" className="h-[24px] w-[24px]" />
          </div>
          <Heading size="heading5xl" as="h1" className="mt-8 text-center leading-[120%] sm:text-[27px]">
            Увеличте вашу
            <br />
            прибыль
          </Heading>
          <Text as="p" className="mt-[30px] text-center leading-[120%]">
            Перейдите в меню добычи и купите
            <br />
            улучшения для вашей биржи, что бы увеличить
          </Text>
          <Text as="p" className="mt-[46px]">
            Зарабатывайте в оффлайне в течении 3 часов
          </Text>
          <Button
            color="cyan_600"
            size="5xl"
            className="mt-[54px] w-full rounded-[16px] font-bold sm:px-5 sm:text-[17px]"
          >
            Начать добычу
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
