import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

const Hero = () => {
    useGSAP(() => {
        const HeroSplit =new SplitText(".title", { type: "chars , words" });
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

        </>
    )
}

export default Hero