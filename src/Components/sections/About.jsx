import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {

   const frontendSkills = ['React','Next JS','JavaScript','TypeScript','TailwindCSS','Git','CSS','Bootstrap','HTML','AJAX']

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
<div className='max-w-3xl mx-auto px-4'>
    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
        About me
    </h2>
    <div className=' rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all '>
        <p className='text-gray-300 mb-6'>
Front-End Developer with proven experience building responsive React applications using modern 
JavaScript, Tailwind CSS, and Git with knowledge of TypeScript and Next.js. Computer Science student eager to 
contribute technical skills and problem-solving abilities to dynamic teams.         <div className='items-center justify-center flex'>
            <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 justify-center flex'>
                Skills
              </h3>
              <div className='flex flex-wrap gap-2'>
{frontendSkills.map((tech,key)=>(
    <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'key={key}>
   {tech}
    </span>
))}
              </div>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-1  mt-8'>
<div className='p-6 roounded-xl border-white/10  flex border h-auto flex-col gap-5 hover:-translate-y-1 transition-all '>
<h3 className='text-xl font-bold mb-6 items-start justify-center flex'>
    Education
</h3>
<ul className='items-end list-disc'>
    <li className='mb-6'>
        <strong>B.S. in Computer Science (Ongoing)</strong> - Kielce University of Technology (2024-Ongoing)
    </li>
    <li>
        <strong>B.S. in Computer Science (Incomplete)</strong> - El Shorouk Academy (2022-2024)
    </li>
</ul>
</div>
<div className='p-6 roounded-xl border-white/10  flex border h-auto flex-col gap-5 hover:-translate-y-1 transition-all '>
<h3 className='text-xl font-bold mb-4 flex justify-center'>
    Work Experiance
</h3>
<div className='space-y-4 text-gray-300'>
    <div>
       <h4 className='font-semibold'>
        Front-end developer at Malay Satu Software (07-2025 - Present)
       </h4>
       <p>
       • Developed and maintained React-based user interfaces with modern JavaScript (ES6+) 
       • Ensured responsiveness across 5+ devices, reducing mobile bugs by 40% 
       • Collaborated with designers to translate wireframes and mockups into functional web pages 
       • Utilized Git for version control and collaborated with team members through GitHub 
       • Implemented API fetching and AJAX for dynamic data retrieval and display
       </p>
    </div>
</div>
</div>
    </div>
</div>
</RevealOnScroll>
    </section>
  )
}

export default About
