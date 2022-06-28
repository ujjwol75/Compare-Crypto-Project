import React, { useState } from 'react'
import Sidelist from './sidebarcontent/Sidelist';
import {AiOutlineDown, AiOutlineRight} from 'react-icons/ai'

const Sidebar = () => {
  const [show,setShow] = useState(false)
  return (
    <>
      <div className="accordian" onClick={() => setShow(!show)}>
        <div className="accordian-inner">
          <p>BITCOIN</p>
          {show ? <AiOutlineRight /> : <AiOutlineDown />}
        </div>
        {show && <Sidelist />}
      </div>
    </>
  );
}

export default Sidebar