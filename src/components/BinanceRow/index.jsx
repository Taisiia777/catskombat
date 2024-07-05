import { Img, Text } from "../../components";
import React from "react";

export default function BinanceRow({ closeIcon = "images/img_close.svg", binanceText = "Binance", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center p-3.5 border-white-a700_4c border border-solid bg-gray-900_4c flex-1 rounded-[12px]`}
    >
      <div className="flex flex-1 items-center gap-3.5">
        <Img src={closeIcon} alt="Binance" className="h-[36px] w-[36px]" />
        <Text size="text3xl" as="p" className="!font-medium">
          {binanceText}
        </Text>
      </div>
      <Img src="images/img_arrow_right.svg" alt="Binance" className="h-[16px] w-[16px]" />
    </div>
  );
}
