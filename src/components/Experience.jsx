/* eslint-disable react/prop-types */

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experiences }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experiences.date}
      iconStyle={{
        background: experiences.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experiences.icon}
            alt={experiences.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3>{experiences.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold "
        style={{ margin: 0 }}
      >
        {experiences.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experiences.points.map((points, index) => (
          <li
            key={`experiences-points-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {points}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Have Done So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
