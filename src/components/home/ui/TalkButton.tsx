import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href={'https://wa.me/923072787581/'}
      target="_blank"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
