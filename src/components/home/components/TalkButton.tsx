"use client";

import AppOutlinedButton from "@/components/common/OutlinedButton";
import Strings from "@/constants/strings";

const TalkButton = () => {
  const onHandleClickTalkBtn = () => {
    if (typeof window === "undefined") return;

    window.open(Strings.telegramLink, "_blank");
  };

  return (
    <AppOutlinedButton
      label="Let's Talk"
      onClick={onHandleClickTalkBtn}
      classNames="mt-8 min-w-[10rem]"
    />
  );
};

export default TalkButton;
