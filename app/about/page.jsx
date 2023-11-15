import React from 'react'


async function onlineEvents() {
  const res = await fetch('http://127.0.0.1:8000/api/events')

  if (!res.ok) {
    throw new Error('Failed fetch data')
  }
  return res.json()
}


async function  page() {
  
  const datas = await onlineEvents() 

  return (
    <>
      {datas.map((data) => (
        <div key={data.id}>
          {data.title}
        </div>
      ))}
    </>
  )
}

export default page