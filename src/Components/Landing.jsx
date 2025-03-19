import CVpic from '../assets/CVpic.png'
import './Landing.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



const Landing = () => {
   

  return (
    <div >
      <div id='container' className='backdrop-blur'>
        <div>
        <div className="w-full relative">
    <img 
        src={CVpic} 
        className="absolute rounded-full h-[15rem] -mt-20 left-1/2 -translate-x-1/2 
                   md:w-[18rem] md:mb-5 md:h-[20rem] 
                   lg:left-[80%] lg:translate-y-1/2" 
    />
</div> 

        </div>
      <div className='font-mono absolute gap-10 mt-40 ml-8 md:mt-60 lg:mt-20'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl mb-4 text-white font-bold lg:mb-7'>
            Hello!
        </h1>
         
        <p id='qoute' className='max-w-[25rem] text-xl md:max-w-[35rem] lg:max-w-[50rem] text-white'>
        My name is Youssef Hegazy, passionate success seeker computer science student.
        My knowledge hunger motivates me to dive deeper and deeper in the programming world, you will get to know more about me right down
        </p>
      </div>
      <div className='h-[70rem]'>

      </div>
      </div>
    </div>
  )
}

export default Landing