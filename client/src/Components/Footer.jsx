import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='mt-10 text-center text-[1.05rem] font-[600] p-3 border-t'><span>&#169;</span> {year} | Copyright Prakritiwad</div>
    )
}

export default Footer
