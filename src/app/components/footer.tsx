import Link from "next/link";
import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <div className="bg-gray-600 border-t-2 border-gray-700">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex  flex-wrap title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={("/picture/A3.jpg")}
              alt="logo"
              width={100}
              height={100}
              className="logo  "
            />
            <span className="ml-3 text-white tracking-widest text-xl">ALISHBA</span>
          </a>
          <p className=" text-sm text-white mb-4 md:mb-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
            © 2024 Alishba musharraf | All Right Reserved
          </p>
          <div className="ml-12 ">
            <ul className="footer-text mx-auto flex flex-wrap  ">
            <a href="/" className="line tag  text-white px-2 ">
              FAQ
            </a>
            <a href="/" className="line tag text-white px-2">
              Services
            </a>
            <a href="/" className="line tag text-white px-2">
              Contact
            </a>
            <a href="/" className="line tag text-white px-2">
              Privacy Policy
            </a>
            </ul>
          </div>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-2xl">
            <Link
              href={"https://github.com/alishbamusharraf"}
              className="text-white ml-5"
            >
            
            </Link>

            <Link
              href={
                "https://www.linkedin.com/in/alishba-musharraf-9241012b4/"
              }
              className="ml-5 text-white">
              
            </Link>

            <Link href={"mailto:"} className="ml-5 text-white">
            
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;