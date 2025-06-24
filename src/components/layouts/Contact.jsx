import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='py-[100px] bg-[url(./assets/contact.png)]'>
        <Container>
            <h3 className='font-semibold text-[50px] leading-17 px-70 text-center text-secondary'>Interested Working With me? Let's connect!</h3>
            <div className="text-center">
            <Button className={'py-4 px-7 text-white mt-12 flex items-center m-auto'} icon1={<FaEnvelope className='text-xl mr-2'/>} btnText={'Contact Me'}/>
            </div>
        </Container>
      
    </section>
  )
}

export default Contact
