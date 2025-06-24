import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import footerLogo from "../../assets/footerLogo.png";
import Menu from "../Menu";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="pt-28 pb-11 bg-secondary rounded-t-4xl">
      <Container>
        <Flex className={"flex justify-between"}>
          <div className="w-1/2 ">
            <Image imgSrc={footerLogo} />
            <p className="w-[369px] font-normal text-base leading-8 text-white mt-5.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit.
            </p>
          </div>
          <div className="w-1/2">
            <div className="flex items-center mb-5">
              <div className="">
                {<FaEnvelope className="text-xl mr-3 text-white " />}
              </div>
              <p className="font-normal text-base text-white">
                inquiry@portostar.com
              </p>
            </div>
            <div className="flex items-center  mb-8">
              <div className="">
                {<FaPhoneAlt className="text-xl mr-3 text-white " />}
              </div>
              <p className="font-normal text-base text-white">
                inquiry@portostar.com
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <FaFacebook className="text-2xl mr-3 text-white " />
              <FaInstagram className="text-2xl mr-3 text-white " />
              <FaLinkedinIn className="text-2xl mr-3 text-white " />
              <FaGlobe className="text-2xl mr-3 text-white " />
            </div>
          </div>
        </Flex>
      </Container>
      <Container>
        <hr className="text-[#404040] mt-12" />
         <div className="flex justify-between items-center mt-6">
            <div className="">
              <Menu className={"flex gap-x-12 text-white "}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>CONTACT</li>
              </Menu>
            </div>
            <p className="font-normal text-base text-white opacity-60">© All Right Reserved</p>
          </div>
        
      </Container>
    </section>
  );
};

export default Footer;
