// import {useEffect, useState} from 'react'

// function Github() {
//     const [data , setData] = useState([])
//    useEffect(() => 
//    {
//     fetch('https://api.github.com/users/amresh012')
//     .then((res)=>{res.json()})
//     .then(data=>{
//       console.log(data)
//       setData(data)
//     })
//    },[])

//   return (
//     <div className='w-full bg-gray-700 h-24 flex justify-center gap-4 items-center'>
//       <h3 className='font-bold text-white text-2xl'>Github Followers:</h3>
//       <p className=''>{}</p>
//       </div>
//   )
// }

// export default Github

import {useEffect, useState} from 'react'

function Github() {
    const [data , setData] = useState([])
   useEffect(() => 
   {
    fetch('https://api.github.com/users/amresh012')
    .then((res)=> res.json()) // return the promise here
    .then(data=>{
      console.log(data)
      setData(data)
    })
   },[])

  return (
    <div className='w-full bg-gray-700 h-auto  justify-center gap-4 items-center flex flex-col p-4'>
      <h3 className='font-bold text-white text-2xl'>Github Profile</h3>
      <div className="h-[200px] bg-gray-900 w-[500px] flex  rounded-md ">
        <div className="profile-image w-[200px]  border-4 border-white overflow-hidden object-fill">
          <img src={data.avatar_url} alt="" className='rounded-md hover:scale-105 duration-300' />
        </div>
        <div className="profile-info px-4 flex flex-col gap-2">
          <h1 className='text-2xl font-bold text-white '>{data.name}</h1>
          <p className=" text-xl font-medium text-gray-100">{data.bio}</p>
          <a href="" className='text-gray-200 font-thin italic'>{data.company}</a>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer" className='text-white'>
          <svg
                                className="w-6 h-6 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
          </a>
        <div className="follower flex justify-around gap-4 items-center">
          <span className='text-lg font-semibold text-white'>Followers {data.followers}</span>
          <span className='text-lg font-semibold text-white'>Following {data.following}</span>
          <span className='text-lg font-semibold text-white'>Repos {data.public_repos}</span>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Github
