import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Counter = ({}) => {
  return (
    <section className='py-10'>
        <Container>
            <Flex className={'flex items-center justify-between'}>
                <div className="text-center">
                    <h3 className='font-semibold text-5xl text-black leading-18'>100+</h3>
                    <p className='font-medium text-base text-[#121212] '>PROJECTS</p>
                </div>
                <div className="text-center">
                    <h3 className='font-semibold text-5xl text-black leading-18'>24</h3>
                    <p className='font-medium text-base text-[#121212]'>WINNING AWARD</p>
                </div>
                <div className="text-center">
                    <h3 className='font-semibold text-5xl text-black leading-18'>70+</h3>
                    <p className='font-medium text-base text-[#121212]'>HAPPY CLIENTS</p>
                </div>
                <div className="text-center">
                    <h3 className='font-semibold text-5xl text-black leading-18'>10</h3>
                    <p className='font-medium text-base text-[#121212]'>YEAR EXPERIENCE</p>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Counter
