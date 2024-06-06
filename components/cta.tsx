import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {


    const data =[
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-1080.png",title:"Deep Domain Expertise",desc:"Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",title:"Ease of use, for everyone",desc:"With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg",title:"A focus on KPIs that matter",desc:"Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.",
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",title:"Purpose-built & ever-improving tech",desc:"Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.",
        },
    ]

  return (
    <Carousel className="w-full max-w-[85vw] pb-10 h-[80%] z-0  mx-24 px-32 mt-20 mb-11">
      <CarouselContent>
        {data.map((item,idx) => (
          <CarouselItem key={idx}>
            <div className="p-1">
              <Card>
                <CardContent className=" max-h-[552px]">
                  <div className="container p-0 flex flex-row justify-between items-left">
                     <div>
                        <img src={item.imgSrc} alt="" width={370} height={382}/>
                     </div>
                     <div className="flex flex-col justify-center max-w-[370px] items-left ml-20">
                        <div className="my-0 text-[28px] font-semibold leading-10 text-black">{item.title}</div>
                        <div className="direction-ltr text-left object-fill flex-none self-center text-base leading-6 text-black">{item.desc}</div>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}



