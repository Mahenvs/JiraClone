import React from 'react'

const AlphaLetter = ({ letter, key }: { letter: string, key: number }) => {
    return (
        <div className=' inline-block '>
            <strong key={key} className='inline p-1 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-900'>{letter}</strong>
        </div>
    )
}

export default AlphaLetter