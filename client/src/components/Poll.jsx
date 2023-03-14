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

  return (
    <div>
        <div>
            <div>
                <h2 className='text-2xl'>{poll[0].pollQuestion}</h2>
                {poll[0].pollOptions.map((option) => (
                    <div key={option._id}>
                        <input type='radio' name='poll' value={option} />
                        <label>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Poll