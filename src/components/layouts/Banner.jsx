import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Sakib from '../../assets/image.png'
import { FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Button from '../Button'

const Banner = () => {
  return (
    <section className='py-10'>
      <Container>
        <Flex>
          <div className="">
            <h6 className='font-medium text-base text-primary'>SAKIB AL HASAN</h6>
            <h1 className="w-[480px] font-bold text-6xl leading-19 text-secondary mt-4 mb-8">Hello, my name is Sakib. I’m MERN Stack Developer.</h1>
            <div className="flex">
              <Button className='flex items-center mr-6 py-5 px-6 text-white font-medium text-sm' icon1={<FaEnvelope className='text-xl mr-2'/>} btnText= {`Contact Me`}/>
              <Button className='flex items-center mr-6 py-5 px-6 text-white font-medium text-sm' icon1={<FiDownload className='text-xl mr-2'/>} btnText= {`Download CV`}/>

            </div> 
          </div>
          <div className="">
            <Image className={'w-[700px] h-[686px] mt-4'} imgSrc={Sakib}/>
          </div>
        </Flex>

      </Container>
      
    </section>
  )
}

export default Banner
