import React, { useEffect, useState } from "react";
import homeautomation from "../assets/homeautomation.jpg";
import lpg from "../assets/lpg.jpg";
import drone from "../assets/drone.jpg";
import fire from "../assets/fire.jpg";

const projectSources = [
  {
    id: 1,
    name: "Home Automation ESP32",
    image: homeautomation,
    description:
      "ESP32 based Home automation can control 4 appliance with mobile from anywhere using internet",
    demoLink: "",
  },
  {
    id: 2,
    name: "Multi utility Drone",
    image: drone,
    description:
      "multi utility drone can use for multiple purposes like Arial cinematograpgy, medicine delivery",

    demoLink: "",
  },
  {
    id: 3,
    name: "LPG Gas detector with E-mail alert",
    image: lpg,
    description:
      "IoT based LPG gas detector can give a alert SOS email if there is any gas leakage",

    demoLink: "",
  },
  {
    id: 4,
    name: "IoT Fire Safety device",
    image: fire,
    description:
      "IoT based Fire safety device can ALert and monitor if there is any smoke around the device",

    demoLink: "",
  },
];

// export default projectSources;

function ProjectCards(props) {
  const projectData = props.dataArray;

  return (
    <div
      // className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-wrap"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-project-layout grid-rows-project-row gap-x-2 gap-y-3  place-content-center 	 "
    >
      {projectSources.map((element) => (
        <div
          key={element.id}
          className="max-w-sm flex flex-wrap f-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          // className="max-w-sm h-full  cursor-pointer justify-self-center self-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 "
        >
          <img
            className="rounded-t-lg object-cover h-80 w-full"
            src={element.image}
            alt="project image"
          />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {element.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {element.description}
            </p>

            <button
              type="button"
              className="text-white text-lg border border-gray-950 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <a href="">Github</a>
            </button>
            <button
              type="button"
              className="text-gray-900 text-lg bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <a href="">Demo</a>
              <svg
                className="w-3.5 h-3.5 ml-2 inline-block -rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
