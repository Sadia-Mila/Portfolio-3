import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import Menu from '../Menu'
import Button from '../Button'


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
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICE</li>
                        <li>CONTACT</li>
                    </Menu>
                </div>
                <div className="">
                    <Button className={"py-3 px-5 text-white font-bold"} btnText={"Hire Me"}/>
                </div>
            </Flex>
            
        </Container>
        
    </section>
  )
}

export default Header
