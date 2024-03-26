import { FC } from "react";
import "./style.css";

interface ButtonProps {
  children: string;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "outline";
}

export const Button: FC<ButtonProps> = ({ children, type }) => {
  if (type === "outline") {
    return (
      <div
        className="border-button-half  border-accent_border min-h-14 md:min-h-16 text-accent_font w-full md:w-auto p-0 md:py-4 md:px-10 rounded-lg text-lg md:text-xl hover:bg-accent_background hover:bg-opacity-10 active:bg-opacity-30 duration-300"
        // style={{ borderWidth: "1.5px" }}
        // onClick={onClick}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className="bg-accent_background min-h-14 md:min-h-16 text-white w-full  p-0 md:py-4 md:px-10 rounded-lg text-lg md:text-xl active:bg-button_click hover:bg-button_hover duration-300"
      // onClick={onClick}
    >
      {children}
    </div>
  );
};
