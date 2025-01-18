"use client"

import React, { useState } from 'react'
import Image from 'next/image'

//css
import style from "./metaDonate.module.css"

//component
import ButtonAmount from "./ButtonAmount"
import RadioBtn from "./RadioBtn"
import Username from "./Username"
import CreditCard from './CreditCard'
import DonateBtn from "./DonateBtn"

//icons
import { FaArrowLeft } from "react-icons/fa";

function MetaDonation({setDonatePage}) {
  const amountList = [10, 25, 50, 100, 250, 500]
  const [Amount, setAmount] = useState(0)


  //for custome amount
  const [customAmount, setCustomAmount] = useState(false)
  const customeAmount = () => {
    setCustomAmount(true)
  }

  return (
    <>
      <div className='mx-20 my-4'>
        <button className='flex items-center text-red-400' onClick={() => setDonatePage(false)}><FaArrowLeft className='mr-3'/> Go Back</button>
      </div>
      <form className='flex flex-col items-center justify-center'>
        <div className='bg-white w-2/3 py-4 px-5 mt-4'>
          {/* notice section */}
          <div className='notice bg-gray-300 py-2 px-4 flex items-center rounded-lg'>
            <Image
              src={'/Image/logo.png'}
              width={30}
              height={30}
              alt='logo'
              className='mr-2'
            />
            <p>Please note that this is just a demo of our future donation page {`don't`} use it for donation purpose yet</p>
          </div>

          {/* select amount section */}
          <div className='callToAction mt-5 flex flex-col space-y-2'>
            <p className='text-gray-400 text-sm'>Please donate call to action</p>
            <div className='amountInput'>
              <select defaultValue={'USD'} className='py-2 px-4 bg-gray-300 rounded-sm'>
                <option value='USD'>USD</option>
                <option value='NRS'>NRS</option>
              </select>
              <input type='number' className='py-1 px-2 outline-none border-2' value={customAmount ? null : Amount} />
              <div className='amtBtns mt-2 flex space-x-2 space-y-3 md:space-y-0 lg:space-y-0 flex-wrap'>
                {
                  amountList.map((amountInList, index) => (
                    <ButtonAmount
                      key={index}
                      amount={amountInList}
                      setAmount={setAmount}
                      customAmount={setCustomAmount}
                    />
                  ))
                }
                <button className='py-2 px-4 bg-gray-300 rounded-sm'
                  onClick={(e) => {
                    e.preventDefault();
                    customeAmount()
                  }}
                >Custom Amount</button>
              </div>
            </div>
          </div>

          {/* payment method section */}
          <div className='method mt-4'>
            <p className='font-semibold'>Select payment method</p>
            <p className={style.line}></p>
            <div className='radio flex items-center gap-x-4'>
              <RadioBtn />
            </div>
          </div>

          {/* personal info */}
          <div className='info'>
            <p className='font-semibold'>Personal info</p>
            <p className={style.line}></p>
            <div className='userField flex space-x-0 md:space-x-2 lg:space-x-2 items-center space-y-8 md:space-y-0 lg:space-y-0 flex-wrap'>
              <Username />
            </div>
          </div>

          {/* Credit card info */}
          <div className='info mt-12 md:mt-8 lg:mt-8'>
            <p className='font-semibold'>Credit card info</p>
            <p className={style.line}></p>
            <div className='userField flex space-x-0 md:space-x-2 lg:space-x-2 items-center space-y-2 md:space-y-0 lg:space-y-0 flex-wrap'>
              <CreditCard />
            </div>
          </div>

          {/* donate button */}
          <div className='mt-3'>
            <DonateBtn />
          </div>
        </div>
      </form>
    </>
  )
}

export default MetaDonation
