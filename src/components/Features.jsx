import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const Bentotilt=({children,className=""})=>{
  const  [transformStyle,setTransformStyle]=useState("")
  const itemRef=useRef()
  const handleMousemove=(e)=>{
    if(!itemRef.current){
           return
    }
    const {top,left, width,height}=itemRef.current.getBoundingClientRect()
    const relativeX=(e.clientX-left)/width;
    const relativeY=(e.clientY-top)/height;

    const tiltX=(relativeX - 0.5)*5
    const tiltY=(relativeY - 0.5)*-5

    const newTransform=`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3D(0.95,0.95,0.95)`
     setTransformStyle(newTransform)
  }
  const handleMouseLeave=()=>{
    setTransformStyle("")
}
  return(
    <div className={className} ref={itemRef} onMouseMove={handleMousemove} onMouseLeave={handleMouseLeave}
    style={{transform:transformStyle}}>
         {children}
    </div>
  )
}


const BentoCard=({src,title,description,isComingSoon})=>{
    return(
        <div className="relative size-full">
            <video src={src}
            loop 
            muted
            autoPlay
            className="absolute top-0 left-0 size-full object-cover object-center">
              
            </video>
            <div className=" relative z-10 flex flex-col size-full justify-between text-blue-50 p-5">
                <div className="">
                    <h1 className="bento-title special-font">{title}</h1>
                    {
                        description&&(
                            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into The Metagames Layer
          </p>
        
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding ecosystem where a
          vibrant array of products converge into an interconnected universe.
        </p>
        </div>
     
      <Bentotilt className="border-hsla relative mb-7 h-96 w-full
      overflow-hidden rounded-md md:h-[65vh]">
               <BentoCard
                src={"videos/feature-1.mp4"}
                title={<>radia<b>n</b>t</>}
                description={"A cross-platform MetaGame app,turning your activies across Web2 and Web3 Games into rewarding adventure"}
               />
      </Bentotilt>
      <div className=" grid h-[135vh] grid-cols-2 grid-rows-3 gap-4">
        <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
        <BentoCard
                src={"videos/feature-2.mp4"}
                title={<>Zig<b>m</b>a</>}
                description={"An Anime and Gaming-inspired NFT Collection- the IP primed for expansion"}
               />
        </Bentotilt>
        <Bentotilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
        <BentoCard
                src={"videos/feature-3.mp4"}
                title={<>n<b>e</b>xus</>}
                description={"A Gaminfied social hub, adding a new dimension of play to social interaction of web3 communities"}
               />
        </Bentotilt>
        <Bentotilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0  ">
        <BentoCard
                src={"videos/feature-4.mp4"}
                title={<>az<b>u</b>l</>}
                description={"A cross-world A.I agent-elevating your gameplay to be more fun and Productive" }
               />
        </Bentotilt>
        <Bentotilt className="bento-tilt_2">
            <div className=" flex size-full flex-col justify-between bg-violet-500 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">M<b>o</b>re Co<b>m</b>ing S<b>o</b>on!!</h1>
                 <TiLocationArrow className="m-5 scale-[5] self-end"/> 
            </div>
        </Bentotilt>
        <Bentotilt className="bento-tilt_2">
            <video src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"></video>
        </Bentotilt>
      </div> 
      </div>
    </section>
  );
};

export default Features;
