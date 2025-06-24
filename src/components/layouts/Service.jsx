import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

const Service = () => {
  return (
    <section className='my-20'>
        <Container>
            <div className="text-center mb-16">
                    <h6 className='font-medium text-base text-primary leading-6 '>SERVICES</h6>
                    <h4 className='font-semibold text-4xl leading-18'>What I Do For My Customer.</h4>
                    <p className='font-regular text-base text-[#121212] px-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
                </div>
            <Flex>
                
                <div className="flex gap-x-10">
                    <div className="w-[376px] h-[286px] shadow-xl rounded-xl ">
                        <Image className='m-auto mt-[51px]' imgSrc={service1}/>
                        <h4 className='font-medium text-xl mt-9 mb-6 text-center text-black'>UI/UX Design</h4>
                        <p className='font-regular text-base leading-8 text-center text-three px-18'>lorem ipsum dolor sit amet consectur adi pising leo</p>

                    </div>
                    <div className="w-[376px] h-[286px] shadow-xl rounded-xl ">
                        <Image className='m-auto mt-[51px]' imgSrc={service2}/>
                        <h4 className='font-medium text-xl mt-9 mb-6 text-center text-black'>Product Design</h4>
                        <p className='font-regular text-base leading-8 text-center text-three px-18'>lorem ipsum dolor sit amet consectur adi pising leo</p>

                    </div>
                    <div className="w-[376px] h-[286px] shadow-xl rounded-xl ">
                        <Image className='m-auto mt-[51px]' imgSrc={service3}/>
                        <h4 className='font-medium text-xl mt-9 mb-6 text-center text-black'>Motion Graphics</h4>
                        <p className='font-regular text-base leading-8 text-center text-three px-18'>lorem ipsum dolor sit amet consectur adi pising leo</p>

                    </div>
                </div>
            </Flex>
        </Container>
      
    </section>
  )
}

export default Service
