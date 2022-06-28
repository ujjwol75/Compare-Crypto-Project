import React from 'react'
import useGetHook from '../../CustomHooks/useGetHooks'
import { FaAngleDown } from 'react-icons/fa'
import { APIS } from '../../pages/api/hello';


const Navbar = () => {
  // Fetch data in pages.

//get navigations list
  const { isLoading: navigationLoading, data: navigationListData } = useGetHook(
    {
      queryKey: 'navigationListData',
      url: APIS.navigation,
    }
  );
  console.log(navigationListData);
  // console.log('aa',navigationListData.results);
  return (
    <>
      <div className='navbar'>
        <ul className="navbar-ul">
          {
            navigationListData?.results?.map((curElem)=>{
              return (
                <>
                  <li>
                    <div className="dropdown" key={curElem.id}>
                      <button className="dropbtn">
                        {curElem.title}
                        <FaAngleDown />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Dropdown
                        <FaAngleDown />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Dropdown
                        <FaAngleDown />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Dropdown
                        <FaAngleDown />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Dropdown
                        <FaAngleDown />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Dropdown
                        <FaAngleDown />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li> */}
                  {/* <li className="navbar-list">
                    <b>{curElem.title}</b>
                  </li> */}
                  <li className="navbar-list">BET&WIN</li>
                </>
              );
            })
          }
          {/* <li>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <FaAngleDown />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <FaAngleDown />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <FaAngleDown />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <FaAngleDown />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <FaAngleDown />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown
                <FaAngleDown />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li className="navbar-list">
            <b>PLAY GAMES</b></li>
          <li className="navbar-list">BET&WIN</li> */}
        </ul>
      </div>
    </>
  );
}

export default Navbar