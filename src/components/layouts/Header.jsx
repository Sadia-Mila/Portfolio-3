import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import Menu from '../Menu'
import Button from '../Button'
import { FaEnvelope } from "react-icons/fa";


const Header = () => {
  return (
    <section className='py-2'>
        <Container>
            <Flex className={'justify-between'}>
                <div className="">
                    <Image imgSrc={Logo}/> 
                </div>
                <div className="">
                    <Menu className={'flex gap-x-12'}>
                        <li className='text-regular text-lg hover:text-primary hover:text-bold duration-300'>HOME</li>
                        <li className='text-regular text-lg hover:text-primary hover:text-bold duration-300'>ABOUT</li>
                        <li className='text-regular text-lg hover:text-primary hover:text-bold duration-300'>SERVICE</li>
                        <li className='text-regular text-lg hover:text-primary hover:text-bold duration-300'>CONTACT</li>
                    </Menu>
                </div>
                <div className="">
                    <Button className={" flex items-center py-3 px-5 text-white"} btnText={"Hire Me"} icon2={<FaEnvelope className='text-lg ml-2'/>}/>
                </div>
            </Flex>
            
        </Container>
        
    </section>
  )
}

export default Header
