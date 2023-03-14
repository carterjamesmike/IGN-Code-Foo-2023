import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_POLL } from '../utils/queries'

const Poll = () => {
    const { loading, data, error } = useQuery(GET_POLL)
    const poll = data?.poll || {}
    console.log(poll)


  return (
    <div>
        <h1 className='text-4xl'>Poll</h1>
    </div>
  )
}

export default Poll