import React from 'react';

import { SocialIcon } from 'react-social-icons'
import { Button } from './ui/button';

const textZinc400 = 'text-zinc-400';
const bgZinc900 = 'bg-[#151218]';
const maxW7xl = 'max-w-7xl';
const mxAuto = 'mx-auto';
const gridCols1 = 'grid-cols-1';
const gridCols4 = 'grid-cols-4';
const gap8 = 'gap-8';
const mb4 = 'mb-4';
const mt4 = 'mt-4';
const spaceX4 = 'space-x-4';
const spaceY1 = 'space-y-1';
const borderT = 'border-t';
const borderZinc700 = 'border-zinc-700';
const pt4 = 'pt-4';
const textSm = 'text-sm';
const textCenter = 'text-center';
const mdTextLeft = 'md:text-left';
const flex = 'flex';
const flexCol = 'flex-col';
const flexRow = 'flex-row';
const justifyBetween = 'justify-between';



const Footer = () => {
  return (
    <div className={`py-8 px-4 ${bgZinc900} text-white mt-32 w-full z-40`}>
        <div className="bg-white w-[1188px] h-[490px] my-[120px] ml-[135px] rounded-[24px] py-[24px] align-middle b-dark flex flex-col items-center justify-center">
            <h1 className="mb-16 leading-[55px] text-[48px] font-bold">You can grow faster than you think!</h1>
            <p className="mb-8 text-center w-[60%]">Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and <br/>technologies of large global companies to help brands of all sizes scale.</p>
            <Button className="bg-black text-white hover:bg-[grey]"> Get Started with Crest </Button>
        </div>
      <div className={`${maxW7xl} ${mxAuto}  grid grid-cols-4 md:${gridCols4} ${gap8}`}>
        <div>
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png" alt="Crest Logo" className={mb4} width={150} height={80}/>
          <p className={textZinc400}>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className={`${textZinc400} ${spaceY1}`}>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Learn</h3>
          <ul className={`${textZinc400} ${spaceY1}`}>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact Crest</h3>
          <p className={textZinc400}>sales@getcrest.ai</p>
          <p className={`${textZinc400} ${mt4}`}>Registered Office:<br />
            1507, Incubex, 11th cross road,<br />
            19th Main Road, Bengaluru,<br />
            India. 560102</p>
          <p className={`${textZinc400} ${mt4}`}>Corporate Office:<br />
            291, All Time Space, 4th Floor,<br />
            15th A Cross, Sector - 6,<br />
            HSR Layout, Bengaluru,<br />
            India. 560102</p>
          <div className={`${flex} ${spaceX4} ${mt4}`}>
            <SocialIcon url="https://twitter.com"href="#" className='max-w-[30px] max-h-[30px]'/>
            <SocialIcon url="https://facebook.com"href="#" className='max-w-[30px] max-h-[30px]'/>
            <SocialIcon url="https://instagram.com"href="#" className='max-w-[30px] max-h-[30px]'/>
            <SocialIcon url="https://linkedin.com"href="#" className='max-w-[30px] max-h-[30px]'/>
          </div>
        </div>
      </div>
      <div className={`${borderT} ${borderZinc700} mt-8 ${pt4} ${textZinc400} ${textSm} ${textCenter} ${mdTextLeft}`}>
        <div className={`${maxW7xl} ${mxAuto} ${flex} ${flexCol} md:${flexRow} ${justifyBetween}`}>
          <div className={mb4}>
            <p>Copyright 2024 Crest</p>
            <p>Conifer Innovations Private Limited</p>
            <p>CIN: U72900KA2022PTC163144</p>
          </div>
          <div className={`${flex} ${spaceX4}`}>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
