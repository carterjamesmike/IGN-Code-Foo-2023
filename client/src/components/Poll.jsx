import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { VictoryBar, VictoryChart } from 'victory'

import { GET_POLL } from '../utils/queries'
import { ADD_VOTE } from '../utils/mutations'

const Poll = () => {
    const { loading, data, error } = useQuery(GET_POLL)
    
    const [addVote, { error: mutationError }] = useMutation(ADD_VOTE)
    const { register, handleSubmit, errors } = useForm()
    
    //Victory bar data



    if (loading) {
        return <div>Loading...</div>    
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (mutationError) {
        return <div>Error: {mutationError.message}</div>
    }

    const poll = data?.polls
    const pollData = poll[0].pollOptions.map((option) => {
        return {x: option.option, y: option.votes}
    })
    //console.log(poll[0])

    //Function to increase the vote by 1
    const onClick = async (e) => {
        e.preventDefault()
        try {
            const { data } = await addVote({
                variables: { 
                    option: e.target.value,
                    pollId: poll[0]._id
                 }
            })
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }




  return (
    <div>
        <div>
            <div>
                <h2 className='text-2xl'>{poll[0].pollQuestion}</h2>
                {poll[0].pollOptions.map((option) => (
                    <div key={option.option}>
                        <input onClick={onClick} type='radio' name='poll' value={option.option} />
                        <label>{option.option}</label>
                    </div>
                ))}
            </div>
            
        </div>
        <VictoryChart domainPadding={20}>
        <VictoryBar
            data={pollData}
        />            
        </VictoryChart>

    </div>
  )
}

export default Poll