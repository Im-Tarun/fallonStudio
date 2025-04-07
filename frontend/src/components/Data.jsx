import React from 'react'

const Data = ({ allFeedbacks }) => {

  return (
    <div className=' flex gap-4 p-4 rounded-lg flex-col overflow-y-auto w-full bg-[#F2EFE7]'>
      {allFeedbacks.map((feedback, ind) => {
        return <div key={ind} className='bg-[#e1faf5] shadow-sm rounded-2xl p-4 transition hover:shadow-xl border border-gray-200  '>
          <div className="text-lg font-semibold text-gray-800 capitalize">By : {feedback.name}
          </div>
          <div className="text-sm text-gray-500 ">{feedback.email}</div>
          <div className="mt-2 text-gray-700  ">
            {feedback.message}
          </div>
        </div>
      })}
    </div>
  )
}

export default Data
