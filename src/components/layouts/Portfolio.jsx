import React from 'react'
import Container from '../Container'
import Image from '../Image'
import portfolio from '../../assets/portfolio.png'

const Portfolio = () => {
  return (
    <section className='py-18'>
        <Container>
            <div className="flex ">
                <div className="w-1/2">
                    <h6 className='font-medium text-base leading-6.5 text-primary'>PORTFOLIO</h6>
                    <h4 className='font-semibold text-[44px] text-black mt-2.5'>Selected Works.</h4>

                </div>
                <div className="w-1/2">
                    <p className='font-normal text-base leading-8 text-three'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
                </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-10">
                <div className="w-[560px] h-[532px] rounded-lg shadow-2xl">
                    <Image imgSrc={portfolio}/>
                    <div className="pt-8 pl-12">
                        <h5 className='font-medium text-[20px] leading-8 text-black'>Creativa - Elementor Template Kit</h5>
                        <h6 className='font-medium text-base leading-6 text-black opacity-50'>UI/UX Design</h6>

                    </div>
                    

                </div>
                    <div className="w-[560px] h-[532px] rounded-lg shadow-2xl">
                    <Image imgSrc={portfolio}/>
                    <div className="pt-8 pl-12">
                        <h5 className='font-medium text-[20px] leading-8 text-black'>Nusapp - Elementor Template Kit</h5>
                        <h6 className='font-medium text-base leading-6 text-black opacity-50'>UI/UX Design</h6>

                    </div>
                    

                </div>
                    <div className="w-[560px] h-[532px] rounded-lg shadow-2xl">
                    <Image imgSrc={portfolio}/>
                    <div className="pt-8 pl-12">
                        <h5 className='font-medium text-[20px] leading-8 text-black'>Webina - Elementor Template Kit</h5>
                        <h6 className='font-medium text-base leading-6 text-black opacity-50'>UI/UX Design</h6>

                    </div>
                    

                </div>
                    <div className="w-[560px] h-[532px] rounded-lg shadow-2xl">
                    <Image imgSrc={portfolio}/>
                    <div className="pt-8 pl-12">
                        <h5 className='font-medium text-[20px] leading-8 text-black'>Marketin - Elementor Template Kit</h5>
                        <h6 className='font-medium text-base leading-6 text-black opacity-50'>UI/UX Design</h6>

                    </div>
                    

                </div>

            </div>
            
        </Container>
      
    </section>
  )
}

export default Portfolio
