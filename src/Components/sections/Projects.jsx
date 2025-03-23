import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Projects = () => {
  function BrainWave(){
    window.open("https://yousefkii.github.io/BrainWave/")
  }
  function Future(){
    window.open("http://localhost:5173/Future-shipping")
  }
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
<div className='max-w-5xl mx-auto px-4'> 
 <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
 Featured projects
 </h2>
 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
<div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
    <h3 className='text-xl font-bold mb-2'>
        Brainwave AI 
    </h3>
    <p className='text-gray-400 mb-4'>
    A responsive user-friendly AI website Created with reuseable componentes like BUttons and Sections
    </p>
    <div className='pt-3'>
        {['React','JavaScript','TailwindCSS'].map((tech,key)=>(
          <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'key={key}>
          {tech}
           </span>
        ))}
    </div>
    <div className='flex justify-between items-center'>
        <button onClick={BrainWave} className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
          View project
        </button>
    </div>
</div>
<div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
    <h3 className='text-xl font-bold mb-2'>
        Future-shipping 
    </h3>
    <p className='text-gray-400 mb-4'>
    A responsive user-friendly AI website Created with reuseable componentes like BUttons and Sections
    </p>
    <div className='pt-3'>
        {['React','JavaScript','CSS','Gsap'].map((tech,key)=>(
          <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'key={key}>
          {tech}
           </span>
        ))}
    </div>
    <div className='flex justify-between items-center'>
        <button onClick={Future} className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
          View project
        </button>
    </div>
</div>
 </div>
</div>
</RevealOnScroll>
    </section>
  )
}

export default Projects
