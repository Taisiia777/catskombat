import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import DailyReward from "../../components/DailyReward";
import React, { Suspense } from "react";

const data = [
  { data: "images/img_calendar_3981416_3297354.png", rewardText: "Ежедневная награда", timeText: "14:13" },
  { data: "images/img_calendar_3981416_3297354.png", rewardText: "Ежедневная награда", timeText: "14:13" },
  { data: "images/img_calendar_3981416_3297354.png", rewardText: "Ежедневная награда", timeText: "14:13" },
];

export default function MainscreenPage() {
  return (
    <div>
      <Helmet>
        <title>Savelli's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black_900_02">
        <div className="md:px-5 relative mt-[50px] h-[882px] px-[282px]">
          <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[804px] w-[92%] rounded-tl-[12px] rounded-tr-[12px] bg-gray-900_02" />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-3.5 rounded-tl-[12px] rounded-tr-[12px] bg-black-900_01 sm:gap-3.5">
            <div className="mx-4 mt-2 sm:mx-0">
              <div className="flex items-center justify-center sm:mx-0">
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex">
                    <Text size="body_regular" as="p" className="sm:text-sm">Cancel</Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center sm:text-sm">
                  <Heading size="text4xl" as="h1" className="font-inter sm:text-sm">Kurilian Bobtail</Heading>
                  <Text as="p" className="ml-[50px] !font-sfprodisplay !font-medium !text-blue_gray-400 sm:ml-0">bot</Text>
                </div>
                <Button shape="square" className="w-[20px]">
                  <Img src="images/img_defaultNoData.png" />
                </Button>
              </div>
              <div className="mx-4 mt-5 flex items-center gap-2 sm:mx-0">
                <Button size="sm" shape="round" className="w-[32px]">
                  <Img src="images/img_settings.svg" />
                </Button>
                <Heading as="h2" className="mb-1.5 self-end">Name (CEO)</Heading>
              </div>
            </div>
            <div className="relative mt-2 h-[762px] sm:h-auto">
              <div className="flex flex-1 flex-col items-end">
                <div className="relative z-[1] ml-4 flex w-[64%] items-center justify-center rounded-[20px] border border-solid border-white-a700_4c bg-white-a700_1e sm:mr-0 sm:w-full">
                  <Img src="images/img_close.svg" alt="Close" className="h-[24px] w-[24px]" />
                  <div className="ml-2.5 h-[28px] w-px bg-white-a700_28" />
                  <div className="flex w-[72%] flex-col items-end px-[30px] sm:px-5">
                    <Heading size="textxs" as="h3" className="mr-[-18px] text-white-a700_7f sm:mr-0">Прибыль в час</Heading>
                    <Heading size="headings" as="h4" className="self-end">+37,71k</Heading>
                    <Img src="images/img_info.svg" alt="Info" className="h-[20px] w-[20px]" />
                  </div>
                  <Img src="images/img_gear.svg" alt="Gear" className="ml-2.5 h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="relative mt-[-20px] h-[760px] self-stretch rounded-tl-[40px] rounded-tr-[40px] bg-cyan-400_01 blur-[180.00px] backdrop-opacity-[0.5]" />
              <div className="absolute bottom-0 left-0 right-0 m-auto flex-1 rounded-tl-[40px] rounded-tr-[40px] bg-cyan-400_01" />
              <div className="flex flex-col gap-1.5 rounded-tl-[40px] bg-gray-900 px-3.5 sm:gap-1.5">
                <Suspense fallback={<div>loading feed...</div>}>
                  {data.map((d, index) => (
                    <DailyReward {...d} key={`mainscreen` + index} className="bg-white_a700_0f" />
                  ))}
                </Suspense>
              </div>
              <div className="relative h-[584px]">
                <div className="absolute bottom-0 left-0 right-0 top-0 mx-[34px] my-auto h-max flex-1 rounded-[50%] bg-cyan-400_4c px-3 py-4 blur-[400.00px] backdrop-opacity-[0.5] sm:mx-0">
                  <div className="flex mx-[72px] items-center justify-center gap-3 sm:mx-0">
                    <Img src="images/img_user.svg" alt="User" className="h-[38px] w-[38px]" />
                    <Heading size="heading4xl" as="h5" className="tracking-[-0.56px] text-white-a700 sm:text-[23px]">507,981</Heading>
                  </div>
                  <div className="rounded-[152px] bg-gradient3 p-3">
                    <div className="relative h-[276px] rounded-[138px] bg-gradient4 p-[22px] sm:h-auto sm:p-5">
                      <Img src="images/img_somecat_1.png" alt="Somecatone" className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[228px] w-[228px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[25.00px] left-0 right-0 m-auto flex-1 flex-col items-center justify-between gap-5 sm:gap-[30px]">
                <div className="flex items-center gap-2">
                  <Img src="images/img_vector.png" alt="Vector" className="h-[28px] object-cover" />
                  <Heading size="headinglg" as="h6" className="tracking-[-0.32px] sm:text-[13px]">4471 / 5000</Heading>
                </div>
                <div className="flex items-center gap-[9px]">
                  <Img src="images/img_home.png" alt="Home" className="h-[32px] object-cover" />
                  <Heading size="headinglg" as="h6" className="tracking-[-0.32px] sm:text-[13px]">Boost</Heading>
                </div>
                <div className="flex rounded-[12px] bg-gray-900_cc p-1">
                  <div className="flex w-full flex-col items-center justify-center gap-1 p-1.5 sm:gap-1">
                    <Img src="images/img_close_yellow_700.svg" alt="Close" className="h-[22px] w-[22px]" />
                    <Heading size="textxs" as="p">Exchange</Heading>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-1 p-1 sm:gap-1">
                    <Img src="images/img_cut.svg" alt="Cut" className="h-[22px] w-[22px]" />
                    <Heading size="textxs" as="p">Mine</Heading>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-1 p-1 sm:gap-1">
                    <Img src="images/img_thumbsup.svg" alt="Thumbsup" className="h-[22px] w-[22px]" />
                    <Heading size="textxs" as="p">Friends</Heading>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-1 p-1 sm:gap-1">
                    <Img src="images/img_settings_white_a700_01.svg" alt="Settings" className="h-[22px] w-[22px]" />
                    <Heading size="textxs" as="p">Earn</Heading>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-1 p-1 sm:gap-1">
                    <Img src="images/img_user_yellow_400.svg" alt="User" className="h-[22px] w-[22px]" />
                    <Heading size="textxs" as="p">Airdrop</Heading>
                  </div>
                </div>
                <div className="flex w-[28%] gap-7 sm:w-full">
                  <div className="flex flex-1 items-center">
                    <Heading size="textmd" as="p">Platinum</Heading>
                    <Img src="images/img_angle_arrow_small.svg" alt="Anglearrow" className="h-[12px] w-[12px]" />
                  </div>
                  <Heading size="textmd" as="p">
                    <span className="text-white_a700_01">&nbsp;</span>
                    <span className="text-white_a700_7f">10</span>
                  </Heading>
                </div>
                <div className="relative h-[8px] w-[28%] rounded border-solid border-white-a700_4c bg-white-a700_1e">
                  <div style={{ width: "44%" }} className="absolute h-full rounded bg-gradient5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
