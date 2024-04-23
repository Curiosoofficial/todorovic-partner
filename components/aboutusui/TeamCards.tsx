import Image from "next/image"
import React from 'react'

const TeamCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
        <Image
        src="/profile.png"
        alt="Milan Todorovic"
        width={100}
        height={100}
        className="rounded-full object-cover pb-3"
        />

        <h3 className="h3-bold text-primary-1">Milan Todorovic</h3>
        <p className="text-primary-2">Geschäftsführung</p>
    </div>
  )
}

export default TeamCards