import { useGSAP } from '@gsap/react'
import React from 'react'
import { useRef } from 'react'
import{useMediaQuery} from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Hero = () => {
    const Videoref = useRef()
    const ismobile = useMediaQuery({maxWidth:767})
    useGSAP(() => {
        const HeroSplit =new SplitText(".title", { type: "chars, words" });
        const ParaSplit =new SplitText(".subtitle", { type: "lines" });
        const ParaSplitRight =new SplitText(".subtitleRight", { type: "lines" });


        HeroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.from(HeroSplit.chars,{
            yPercent:60,
            duration:1.9,
            ease:'expo.out',
            stagger:0.04,
        })
        gsap.from(ParaSplit.lines,{
            opacity:0,
            xPercent:-100,
            duration:1.9,
            ease:'expo.out',
            stagger:0.04,
            delay:0.3
        })
        gsap.from(ParaSplitRight.lines,{
            xPercent:100,
            duration:1.9,
            ease:'expo.out',
            stagger:0.04,
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true,
            }

        })
        
        .to(".left-leaf",{
            y:-200
        },0)
        .to(".right-leaf",{
            y:200
        },0)
        const startValue = ismobile ? 'top 50%' : 'center center';
        const endValue = ismobile? '120% top' :'bottom top';
         const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",      
                start: startValue,  
                pin: true,      
                end: endValue,
                scrub: 1,
                          
            }
        })
        Videoref.current.onloadedmetadata = () => {
            tl.to(Videoref.current,{
                currentTime: Videoref.current.duration,
            })
        }
    },[])
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>Jano Soda</h1>
                <img src="images\hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="images\hero-right-leaf.png" alt="right-leaf" className='right-leaf' />
                <div className="body">
                    <div className='content'>
                        <div className=' space-y-5 hidden md:block'>
                            <p className='subtitle'>Cool.Crisp.Classic</p>
                            <p className='subtitle'>
                                Sip the sprit <br /> of summer
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitleRight'>Every cocktail on our menu is a
                                blend of premium ingredients,
                                creative flair, and timeless recipes
                                — designed to delight your senses.</p>
                                <a href="#cocktails">View Cocktials</a>


                        </div>
                    </div>
                </div>
            </section>
             <div className='video absolute inset-0'>
                <video src="videos/output.mp4"
                ref={Videoref}
                muted
                 playsInline 
                 preload='auto'
                 
                 ></video>
            </div>
           

        </>
    )
}

export default Hero