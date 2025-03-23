import RevealOnScroll from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import { Result } from "postcss";
import React, { useState } from 'react'

const Contact = () => {

   const [formdata,setformdata] = useState({
    name : "",
    email: "",
    message:"",
   });


   const handleSubmit =(e)=>{
       e.preventDefault();

       console.log(emailjs.sendForm(
        import.meta.env.VITE_ServiceID,
        import.meta.env.VITE_tempID,
        e.target,
        import.meta.env.VITE_PublicKEY))

       emailjs.sendForm(
        import.meta.env.VITE_ServiceID,
        import.meta.env.VITE_tempID,
        e.target,
        import.meta.env.VITE_PublicKEY).then((Result)=>{
       alert("Message sent");
       setformdata({name : "",email:"",message:""})
}).catch(()=>{
    alert("oops! Something went wrong. Please try again")
})
   }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
        <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Get In Touch 
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
<div className="relative">
<input type="text" id="name" value={formdata.name} name="name" required onChange={(e)=>setformdata({...formdata, name: e.target.value})} placeholder='Name...' className="w-[450px] bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 " />
</div>
<div className="relative">
<input type="email" id="email" value={formdata.email} name="email" required onChange={(e)=>setformdata({...formdata, email: e.target.value})}placeholder='Example@gmail.com' className="w-[450px] bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 " />
</div>
<div className="relative">
<textarea  id="message" value={formdata.message} name="message" required rows={5} onChange={(e)=>setformdata({...formdata, message: e.target.value})} placeholder='Your message' className="w-[450px] bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 " />
</div>
<button type="submit" className="w-[450px] bg-blue-500 text-white font-medium rounded py-3 px-6 transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" >
    Send Message
</button>
<span className="text-gray-500 block">
                In case any problem accured here is my email :<span className="text-white ml-2">Youssefhegaze908@gmail.com</span> 
            </span>
            <div className="relative flex flex-row justify-between items-center">
             <div className="text-gray-500">
                <span>
                    You can also find me on : 
                </span>
                <a href="https://github.com/Yousefkii"><i className="fa-brands fa-github text-blue-500 ml-4 text-2xl"></i></a>
                <a href="https://www.linkedin.com/in/youssef-hegazy-0a28741a3/">
                <i className="fa-brands fa-linkedin ml-4 text-2xl text-blue-500"></i>
                </a>
                <a href="https://www.instagram.com/yosef_osama988/">
                <i className="fa-brands fa-instagram ml-4 text-2xl text-blue-500"></i>
                </a>
             </div>
            </div>
            </form>
            
            
        </div>
    </RevealOnScroll>

  </section>
}

export default Contact