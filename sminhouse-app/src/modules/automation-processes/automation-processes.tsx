import { ListWithHeader } from "../../components/list-with-header/list-with-header";
import logo from "../../icons/automation-processes/logo.svg";
import button from "../../icons/automation-processes/round-button.svg";
import "./style.css";

export const AutomationProcesses: React.FC = () => {
  return (
    <div className="mb-20 md:mb-40">
      <div className="md:text-center mb-6 md:mb-9 md:text-5xl text-3xl">
        <h2 className="font-bold mb-4 md:mb-6">Автоматизация процессов</h2>
        <p className="text-xl text-light_dark_font md:w-2/3 md:m-auto">
          SminHOUSE объединяет различные сервисы в одну инфраструктуру, упрощая
          процессы от передачи счетчиков до управления документами – все
          доступно в один клик.
        </p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-9">
        {/* <div className="bg-gray-500 h-36 w-1/2"></div> */}
        <div className="md:w-3/5 flex flex-wrap gap-y-4 md:gap-y-9 ">
          <div className="w-full">
            <ListWithHeader
              title="Широкие возможности"
              items={[
                "Видеонаблюдение",
                "Доступ авто по номеру",
                "Выпуск пропусков",
                "Прием заявок от жильцов и многое другое",
              ]}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-y-4 ">
            <div className="border w-full md:w-2/5 p-5 grow rounded-2xl border-gray_border bg-white md:mr-9">
              <p className="font-bold text-2xl mb-4">Удобный доступ</p>
              <p className="text-light_dark_font mb-3 text-sm md:text-lg md:pl-0 pl-4">
                Вы можете пользоваться полным функционалом как с компьютера так
                и с мобильного приложения
              </p>
            </div>
            <div className="border w-full md:w-3/5 p-5 grow rounded-2xl border-gray_border bg-white">
              <p className="font-bold text-2xl mb-4">Система под ключ</p>
              <p className="text-light_dark_font mb-3 text-sm md:text-lg md:pl-0 pl-4">
                Мы самоcтоятельно поставляем, устанавливаем и настраиваем все
                необходимое оборудование. Полная поддержка по работе системы
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl pt-48 md:p-6 w-2/5 background-container flex flex-col justify-end">
          <div className="p-5 rounded-2xl bg-gray-200 bg-opacity-10 border border-white border-opacity-20 backdrop-blur-md">
            <div className="flex text-white gap-x-4">
              <img className="w-11 md:w-14" src={logo} alt="" />
              <div className="">
                <p>SminHouse Demo</p>
                <p className="font-normal text-sm">
                  Ознакомьтесь со всеми функциями системы
                  <span className="hidden md:block">уже сейчас</span>
                </p>
              </div>
              <button className="w-1/6">
                <img src={button} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
