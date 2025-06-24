import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { FaEnvelope } from "react-icons/fa";


const Graphic = () => {
  return (
    <section className='py-[110px] bg-[url(./assets/bg-graphics.png)]'>
      <Container>
        <div className="">
          <h4 className='mt-[109px] font-medium text-base text-primary uppercase '>GRAPHIC</h4>
          <h3 className='w-[482px] font-bold text-[60px] leading-20 text-[#333333] mt-6 mb-4'>Graphic Designer With 10 Years Of Experience.</h3>
          <p className='w-[584px] font-normal text-base leading-8 text-[#333333] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
          <Button className={' flex items-center py-4 px-6 text-white font-medium text-sm'} icon1={<FaEnvelope className='text-xl mr-2'/>}btnText={'Contact Me'}/>
        </div>
        
      </Container>
      
    </section>
  )
}

export default Graphic
