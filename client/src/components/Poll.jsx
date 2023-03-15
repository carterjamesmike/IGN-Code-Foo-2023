import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useForm } from 'react-hook-form'

import { GET_POLL } from '../utils/queries'

const Poll = () => {
    const { loading, data, error } = useQuery(GET_POLL)
    const poll = data?.polls



    if (loading) {
        return <div>Loading...</div>
    }

    console.log(poll)


  return (
    <div>
        <div>
            <div>
                <h2 className='text-2xl'>{poll[0].pollQuestion}</h2>
                {poll[0].pollOptions.map((option) => (
                    <div key={option.option}>
                        <input type='radio' name='poll' value={option.option} />
                        <label>{option.option}</label>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Poll