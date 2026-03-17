import React from 'react'
import { cocktailLists } from '../../constants'
import { mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Cocktails = () => {
  useGSAP(() => {
    const parallaxtimeline = gsap.timeline({
      scrollTrigger:{
        trigger:"#cocktails",
        start:"top 30%",
        end:"bottom 80%",
        scrub:true,
        markers:true,
      }
    })
    parallaxtimeline.from('#c-left-leaf',{
      x:-100,
      y:100,
    })
    .from('#c-right-leaf',{
      x:100,
      y:100,
     
    })
  })
  return (
    <section id="cocktails" className='noisy'>
      <img src="/images/cocktail-left-leaf.png" id='c-left-leaf' alt="l-leaf" />
      <img src="/images/cocktail-right-leaf.png" id='c-right-leaf' alt="r-leaf" />
      <div className='list'>
        <div className='popular'>
          <h2>Most Popular cocktails:</h2>
          <ul>
            {cocktailLists.map((drink)=>(
              <li key={drink.name}>
                <div className='md:me-28'>
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span className='text-xl font-bold'>-${drink.price}</span>
              </li>
            )
          
            )}
          </ul>
        </div>
         <div className='loved'>
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map((drink)=>(
              <li key={drink.name}>
                <div className='md:me-28'>
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span className='text-xl font-bold'>-${drink.price}</span>
              </li>
            )
          
            )}
          </ul>
        </div>
      </div>
    
    </section>
  )
}

export default Cocktails