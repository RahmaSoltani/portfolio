import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import { SectionWrapper } from "../hoc";
import {fadeIn ,textVariant} from '../utils/motion'
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full flex-center'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
  <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] '
    >   Soltani Rahma,I am a third-year computer science student at ESI -higher national school of computer science- with a knack for collaborative work, sharp critical thinking, and a constant thirst for learning. I am passionate about deciphering the complexities of technology and leveraging it to craft innovative solutions. Rooted in effective problem-solving and curious to keep up with the latest developments, I am passionate about making meaningful contributions to the ever-evolving world of computer science. And I recently started a journey in the background of web development, excited to delve into this exciting field.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
