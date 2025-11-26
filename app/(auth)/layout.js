import React from 'react'

// layout files for each next.js folder is common to all the files in the next.js folder
const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center pt-40'>
      {children}
    </div>
  )
}

export default AuthLayout
