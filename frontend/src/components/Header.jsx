import React, { useState } from 'react'

const Header = (params) => {
  return (
    <header className='p-2  '>
      <button onClick={()=>params.setAdmin(!params.admin)} className='text-center text-white font-semibold p-1 pl-12' >
        {params.admin ? <div className='bg-[#ff6923]  rounded-md p-3 ' >View Submitted FeedBack</div> :  <div className='bg-[#6C63FF]  rounded-md p-3' >Submit Another FeedBack</div>}
      </button>

    </header>
  )
}

export default Header
