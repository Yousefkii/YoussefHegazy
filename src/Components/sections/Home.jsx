import React from 'react'

const Home = () => {
  return (
    <section id='home
    ' className='min-h-screen flex items-center justify-center relative'> 
  <div className='text-center z-10 px-4'>
    <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent '>
      Hi, I'm Youssef Hegazy
    </h1>
    <span className='justify-center flex'>
<p className='text-gray-400 text-lg mb-8 max-w-xl max-auto'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci qui veniam animi quia esse cupiditate, enim tempora explicabo sequi similique. Perferendis ducimus consequuntur vero repellat cupiditate quis inventore deleniti.
</p></span>
<div className='flex justify-center space-x-4'>
<a href='#Projects' className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
    View Projects
</a>
<a href='#Contact' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
    Contact me
</a>
</div>
  </div>
    </section>
  )
}

export default Home