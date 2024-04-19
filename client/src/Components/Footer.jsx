import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='mt-10 bg-[#f5fcf3] text-center text-[1.05rem] font-[600] p-3 border-t w-full'><span>&#169;</span> {year} | Copyright प्रकृतिवाद</div>
    )
}

export default Footer
