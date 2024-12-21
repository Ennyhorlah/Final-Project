import React from 'react'

const About = () => {
  return (
    <div>
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675675022077/6af7d0aa-bcb2-4a71-9447-6152695a4465.png" alt="About"
        class="w-full h-full object-cover rounded-md shadow-lg mx-auto"
        style={{width:"1200px", height:"600px"}}/>
      <h1 class="flex justify-center text-2xl text-blue-500 font-bold m-5 rounded-md">About JSONPlaceholder</h1>
      <p class="font-semibold text-xl">JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.I fetch Application Programming Interface(API) from JSONPlaceholder to pass fake information of the Comments of the Users by displaying only 10 Emails out of over 500 Comments and also display 50 Photos of the Users out of over 5000 Photos of the Users to the websites. </p>
    </div>
  )
}

export default About
