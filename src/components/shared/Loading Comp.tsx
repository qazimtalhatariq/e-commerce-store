import Image from "next/image";
import { FC } from "react";
import { PreLoader } from "../assets";

const LoadingComp: FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`${size}`}>
      <Image src={PreLoader} alt="Pre loader" width={500} height={500} />
    </div>
  );
};

export default LoadingComp;
