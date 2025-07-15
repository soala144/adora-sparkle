import React from 'react'

const Checkout = () => {
  return (
    <div className='pt-20 w-[90%] mx-auto max-w-[1440px]'>
      <h1 className='uppercase lg:capitalize font-5xl lg:text-4xl text-center font-bold my-10'>Billing Details</h1>
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder='your first name...' className='outline-none bg-[#F5F5F5]' />
        </div>
      </form>
    </div>
  )
}

export default Checkout