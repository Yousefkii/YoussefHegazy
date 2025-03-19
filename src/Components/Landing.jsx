import CVpic from '../assets/CVpic.png'
import './Landing.css'




const Landing = () => {
    
  return (
    <div >
        <div className='absolute content-center align-middle left-[10rem] -mt-10 md:left-[15rem] lg:left-[50rem]'>
        <img src={CVpic} alt='personal picture'className=' rounded-full h-[16rem] w-[14rem] ' width={200} height={150}/>
        </div>
      <div className='font-mono absolute gap-10 mt-60 ml-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl mb-4'>
            Hello!
        </h1>
         
        <p id='qoute' className='max-w-[25rem] text-xl md:max-w-[35rem] lg:max-w-[50rem]'>
        My name is Youssef Hegazy, passionate success seeker computer science student.
        My knowledge hunger motivates me to dive deeper and deeper in the programming world, you will get to know more about me right down
        </p>
      </div>
      


    </div>
  )
}

export default Landing