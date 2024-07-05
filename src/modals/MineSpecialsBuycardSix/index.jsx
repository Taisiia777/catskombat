import { Text, Img, Button, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function MineSpecialsBuycardSix({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[430px]">
      <div className="flex w-full min-w-[430px] flex-col items-center rounded-tl-[12px] rounded-tr-[12px] bg-black-900_01">
        <div className="flex items-center justify-center self-stretch">
          <div className="flex">
            <Text size="body_regular" as="p">
              Cancel
            </Text>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="md:px-5 flex flex-1 flex-col items-start px-11">
              <Heading size="text4xl" as="h1" className="!font-inter">
                Kurilian Bobtail
              </Heading>
              <Text as="p" className="ml-[50px] !font-sfprodisplay !font-medium !text-blue_gray-400">
                bot
              </Text>
            </div>
            <Button shape="square" className="w-[20px]">
              <Img src="images/defaultNoData.png" />
            </Button>
          </div>
        </div>
        <Img
          src="images/img_arrow_left.svg"
          alt="Arrowleft"
          className="ml-10 mt-[120px] h-[24px] w-[24px] self-start"
        />
        <Text as="p" className="mt-[116px] !text-white-a700_99">
          558,99K / 1M
        </Text>
        <div className="relative mx-4 mb-1 mt-7 h-[12px] self-stretch rounded-md border border-solid border-white-a700_4c bg-white-a700_1e">
          <div style={{ width: "44%" }} className="absolute h-full rounded-md bg-gradient5" />
        </div>
      </div>
    </ModalProvider>
  );
}
