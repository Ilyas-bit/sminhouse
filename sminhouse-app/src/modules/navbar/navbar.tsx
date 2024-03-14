import logo from "../../icons/navbar/logo.svg";
import button from "../../icons/navbar/button.svg";
import arrow_input from "../../icons/navbar/arrow-input.svg";
import "./style.css";

export const Navbar: React.FC = () => {
  return (
    <div className=" z-30 navbar pt-6">
      <div className="z-30  bg-white m-auto px-4 mdpx-11 mb-10 py-5 flex justify-between items-center border rounded-2xl border-gray_border">
        <button>
          <img src={logo} alt="" />
        </button>

        <div className="flex justify-center items-center">
          <div className="hidden lg:flex">
            <button className="px-4">Решения</button>
            <button className="px-4">Проекты</button>
            <button className="px-4">Партнеры</button>
            <button className="px-4">О нас</button>
          </div>
        </div>

        <div className=" text-accent_font hidden lg:flex">
          <button className="mr-6">+7(800)800-80-80</button>
          <button className="flex px-6 py-3.5 items-center border rounded-2xl border-accent_border">
            <p className="mr-3">Войти</p>
            <img src={arrow_input} alt="" />
          </button>
        </div>
        <button className="lg:hidden ">
          <img src={button} alt="" />
        </button>
      </div>
    </div>
  );
};
