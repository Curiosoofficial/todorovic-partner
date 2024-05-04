import Footer from "@/components/Footer"
import AboutUsSec1 from "@/components/aboutusui/AboutUsSec1"
import AboutUsSec2 from "@/components/aboutusui/AboutUsSec2"
import AboutUsSec3 from "@/components/aboutusui/AboutUsSec3"
import AboutUsSec4 from "@/components/aboutusui/AboutUsSec4"
import Headline from "@/components/aboutusui/Headline"
import React from 'react'

const page = () => {
  return (
    <main>
        <Headline/>
        <AboutUsSec1/>
        <AboutUsSec2/>
        <AboutUsSec3/>
        <AboutUsSec4/>

        <Footer/>
    </main>
  )
}

export default page