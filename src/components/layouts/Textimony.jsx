import React from 'react'
import Container from '../Container'
import { FaRegStar } from "react-icons/fa";
import Image from '../Image';
import testi from '../../assets/testi.png'
import testi2 from '../../assets/testi2.png'


const Textimony = () => {
  return (
    <section className="py-[140px] bg-[url(./assets/bg-testimony.png)]">
      <Container>
        <div className="text-center">
          <h6 className="font-medium text-base leading-6.5 text-primary">
            TESTIMONY
          </h6>
          <h4 className="font-semibold text-[44px] leading-14 text-black mt-3 mb-3.5">
            What Our Clients Say.
          </h4>
          <p className="font-normal text-base leading-8 text-black opacity-70 px-74">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit velit, at dictum nisl.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className=" mt-8 flex justify-between">
            <div className="w-[560px] h-[369px] rounded-lg shadow-2xl p-18">
              <div className="flex gap-x-2">
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
              </div>
              <p className="font-medium text-lg leading-6 text-black mt-5 mb-6">
                Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
                Vestibulum nisl lorem, porta at mollis varius, tincidunt in
                lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Image imgSrc={testi} />
                  <div className="">
                    <h5 className="font-medium text-lg leading-8 text-black">
                      David Gueta
                    </h5>
                    <h6 className="font-normal text-base leading-6 text-black opacity-50">
                      UI/UX Designer
                    </h6>
                  </div>
                </div>
                <Image imgSrc={testi2} />
              </div>
            </div>
          </div>
          <div className=" mt-8 flex justify-between">
            <div className="w-[560px] h-[369px] rounded-lg shadow-2xl p-18">
              <div className="flex gap-x-2">
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
                <FaRegStar className="text-2xl text-yellow-400 font-bold" />
              </div>
              <p className="font-medium text-lg leading-6 text-black mt-5 mb-6">
                Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
                Vestibulum nisl lorem, porta at mollis varius, tincidunt in
                lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Image imgSrc={testi} />
                  <div className="">
                    <h5 className="font-medium text-lg leading-8 text-black">
                      David Gueta
                    </h5>
                    <h6 className="font-normal text-base leading-6 text-black opacity-50">
                      UI/UX Designer
                    </h6>
                  </div>
                </div>
                <Image imgSrc={testi2} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Textimony
