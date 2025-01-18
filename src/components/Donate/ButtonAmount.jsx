import React from 'react'

function ButtonAmount({amount,setAmount,customAmount}) {
    return (
        <button className='py-2 px-4 bg-gray-300 rounded-sm'
            onClick={(e) => {
                e.preventDefault();
                setAmount(amount);
                customAmount(false);
            }}
        >{amount}</button>
    )
}

export default ButtonAmount
