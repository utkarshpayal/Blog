import React from 'react'
import { Link } from 'react-router-dom';


function Logo({width = '100px'}) {
  return (
    <div>
       <Link to="/">
      <img src="https://imgs.search.brave.com/H8fbGZmMu7w6CT1K8v_R7USrVPJi9OW8yMUw7pvMmqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0Jsb2dnZXItTG9n/by01MDB4MjgxLnBu/Zw" className='w-20' alt="logo" />
      </Link>
    </div>
  )
}

export default Logo