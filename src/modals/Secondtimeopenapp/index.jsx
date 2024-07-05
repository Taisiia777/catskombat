import { Button, Heading, Img } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function Secondtimeopenapp({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[430px]">
      <div className="w-full min-w-[430px] rounded-tl-[40px] rounded-tr-[40px] bg-cyan-400_01">
        <div className="flex flex-col gap-4 rounded-tl-[40px] rounded-tr-[40px] bg-gray-900 px-4 py-6 sm:py-5">
          <div className="flex flex-col items-end">
            <Img src="images/img_cross.svg" alt="Cross" className="mr-2 h-[24px] w-[24px]" />
            <div className="relative mt-[-8px] flex flex-col items-center self-stretch">
              <Button color="white_A700_0f" size="4xl" className="w-[70px] rounded-[34px]">
                <Img src="images/img_close.svg" />
              </Button>
              <div className="relative mt-[-34px] flex h-[182px] items-end justify-center self-stretch bg-[url(/public/images/img_group_55.svg)] bg-cover bg-no-repeat p-[26px] sm:p-5">
                <div className="mt-8 flex w-[78%] flex-col items-center gap-5">
                  <div className="mx-[38px] flex items-center justify-center gap-3 self-stretch">
                    <Img src="images/img_user.svg" alt="User" className="h-[52px] w-[52px]" />
                    <Heading size="heading6xl" as="h1" className="!text-white-a700">
                      50.29K
                    </Heading>
                  </div>
                  <Heading size="headingxl" as="h2">
                    Биржа начала работать для вас
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button color="cyan_600" size="5xl" className="mb-1 w-full rounded-[16px] font-bold sm:px-5">
          Получить
        </Button>
      </div>
    </ModalProvider>
  );
}
