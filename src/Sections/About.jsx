import Card from "../Components/Card";
// import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
// import { GiCpu } from "react-icons/Gi";
// import { GiRadioTower } from "react-icons/Gi";
// import { GiEagleHead } from "react-icons/Gi";
// import { LuBinary } from "react-icons/Lu";
// import { GiDeliveryDrone } from "react-icons/Gi";
// import { SiElectron } from "react-icons/si";
// import { SiArduino } from "react-icons/si";
// import { BsAndroid2 } from "react-icons/bs";
// import { FaRobot } from "react-icons/fa";
// import { SiMaterialdesign } from "react-icons/si";
// import { BiSolidMicrochip } from "react-icons/Bi";
// import { BiLogoPython } from "react-icons/Bi";
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiGraphql,
//   SiKotlin,
//   SiVercel,
// } from "react-icons/si";
// import { BsGit } from "react-icons/bs";
// import { FaNodeJs, FaJava } from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";

const About = function () {
  return (
    <div
      id="about"
      className="grid shrink  h-auto w-[95%] md:w-[85%] lg:h-screen mb-16 max-w-[80%] mx-auto "
    >
      {/* introduction section */}
      <blockquote className=" flex flex-col justify-between gap-5 md:gap-1 max-w-2xl mx-auto text-gray-500  dark:text-gray-400">
        <h3 className="text-4xl my-2 font-semibold  text-gray-700 dark:text-gray-300 text-center">
          About Me{" "}
        </h3>
        <p className="mb-6 text-center">
          I am an ECE Undergradute With Hands on experience of embedded and IoT
          System!{" "}
        </p>
        <h1 className="text-4xl mb-8   text-gray-800 dark:text-white text-center font-semibold bg-gradient-to-r from-gray-300 to-gray-950 bg-clip-text text-transparent ">
          {" "}
          My Tech Stack
        </h1>
      </blockquote>

      {/* 4 grid cards */}

      <div className="grid grid-cols-1 grid-flow-row  place-content-center align-center dark:border-gray-700 mb-4 sm:mb-12 sm:grid-cols-2 gap-8 ">
        <Card heading="Core Tech Skills">
          {/* <a href="#" class="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-medium whitespace-nowrap dark:text-white">
						Heismanish
					</span>
				</a> */}
          <ul role="list" className=" flex flex-col space-y-4 my-3 ">
            <li className="flex space-x-2 ">
              {/* <BiSolidMicrochip className="text-2xl dark:text-gray-300 text-gray-700"></BiSolidMicrochip> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Microcontroller
              </span>
            </li>
            <li className="flex space-x-3 items-center text-left">
              {/* <GiCpu className="text-2xl   dark:text-gray-300 text-gray-700"></GiCpu> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Embedded System
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <GiRadioTower className="text-2xl   dark:text-gray-300 text-gray-700"></GiRadioTower> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Internet of Things
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <GiDeliveryDrone className="text-2xl   dark:text-gray-300 text-gray-700"></GiDeliveryDrone> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Drones{" "}
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <FaRobot className="text-2xl  dark:text-gray-300 text-gray-700"></FaRobot> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Robotics
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <SiElectron className="text-2xl  dark:text-gray-300 text-gray-700"></SiElectron> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Electronics Hardware Design
              </span>
            </li>
          </ul>
        </Card>

        <Card heading="Tools">
          <ul role="list" className="space-y-4 my-3">
            <li className="flex space-x-2 items-center">
              {/* <BsAndroid2 className="text-2xl dark:text-gray-300 text-gray-700"></BsAndroid2> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                Android Studio
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <GiEagleHead className="text-2xl   dark:text-gray-300 text-gray-700"></GiEagleHead> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                Eagle
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <LuBinary className="text-2xl   dark:text-gray-300 text-gray-700"></LuBinary> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                Xilinix
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <SiArduino className="text-2xl   dark:text-gray-300 text-gray-700"></SiArduino> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Arduino IDE
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <SiGraphql className="text-2xl  dark:text-gray-300 text-gray-700"></SiGraphql> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                EDA Playground
              </span>
            </li>
          </ul>
        </Card>
        <Card heading="Programming Languages">
          <ul role="list" className="space-y-4 my-3">
            <li className="flex space-x-2 items-center">
              {/* <FaJava className="text-2xl dark:text-gray-300 text-gray-700"></FaJava> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                Java
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <BiLogoPython className="text-2xl   dark:text-gray-300 text-gray-700"></BiLogoPython> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                Python
              </span>
            </li>
          </ul>
        </Card>
        <Card heading="Hands on Skills">
          <ul role="list" className="space-y-4 my-3 ">
            <li className="flex space-x-2 items-center">
              {/* <BsGit className="text-2xl dark:text-gray-300 text-gray-700"></BsGit> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                PCB desin
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <SiMaterialdesign className="text-2xl   dark:text-gray-300 text-gray-700"></SiMaterialdesign> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                3D Design
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              {/* <SiVercel className="text-2xl   dark:text-gray-300 text-gray-700"></SiVercel> */}
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                Simulation
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;
