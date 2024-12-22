import React from 'react'

const ContactUs = () => {
  return (
    <>
    <h1 className="flex justify-center font-bold text-2xl m-5 rounded-md text-black">ContactUs</h1>
    <section id="contact"  className="py-20 bg-gray-100 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <form className="max-w-md mx-auto">
        <div className="container mx-auto px-4">
       < div className="mb-4">
          <label for="name" className="block font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-gray-600 border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500 required"/>
      </div>
      < div className="mb-4">
          <label for="email" className="block font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-gray-600 border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500 required"/>
      </div>
      < div className="mb-4">
          <label for="message" className="block font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full bg-gray-600 border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500 required"></textarea>
      </div>
      <button type="submit" className="w-full bg-gray-600 border-gray-500 rounded-md py-2 px-3 transition-colors duration-300">Send Message</button>
         
        </div>
      </form>
    </section>
    
    </>
  
  )
}

export default ContactUs
