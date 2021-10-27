import React, { useState } from 'react';
import './style.css';
import Header from './header'
import HeaderMobile from './header-mobile';
import Modal from './modal'
import Main from './main';

function App() {
  const [input0, setInput0] = useState(0);
  const [input1, setInput1] = useState(25);
  const [input2, setInput2] = useState(75);
  const [totalAchived, setTotalAchived] = useState(90000)
  const [totalBackers, setTotalBackers] = useState(5007)
  const [optionRemainings, setOptionRemainings] = useState([0, 101, 1])
  const [burger, setBurger] = useState(false)
  const handleBurger = () => setBurger(!burger)
  const [position, setPosition] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = () => setCheckbox(!checkbox)
  const [congrats, setCongrats] = useState(false)
  const handleCongrats = () => {
    setCongrats(false)
    setPopUp(false)
    setPosition(false)
  }
  const [popUp, setPopUp] = useState(false)
  const handlePopUp = (e) => {
    setPopUp(!popUp)
    setPosition(!position)
  }

  const handleSubmit = (e) => {
    let option = e.target.dataset.option
    if (option == 0) {
      var input = parseFloat(input0)
    } else if (option == 1) {
      var input = parseFloat(input1)
    } else {
      var input = parseFloat(input2)
    }
    let archive = parseFloat(totalAchived)
    setTotalAchived(archive + input)
    setTotalBackers(totalBackers + 1)
    let newArr = [...optionRemainings];
    newArr[option] -= 1;
    setOptionRemainings(newArr)
    setCongrats(true)
    setPopUp(false)
  }


  return (
    <div className="App">
      {<Header />}
      {<HeaderMobile burger={burger} handleBurger={handleBurger} />}
      <div className={"shadow" + (burger ? ' active' : '')}></div>
      <div className="hero-img"></div>

      {<Main 
        handlePopUp={handlePopUp}
        optionRemainings={optionRemainings}
        handlePopUp={handlePopUp}
        checkbox={checkbox}
        handleCheckbox={handleCheckbox}
        totalAchived={totalAchived}
        totalBackers={totalBackers}
      />}
      {<Modal
        position={position}
        popUp={popUp}
        handlePopUp={handlePopUp}
        input0={input0}
        setInput0={setInput0}
        handleSubmit={handleSubmit}
        optionRemainings={optionRemainings}
        setOptionRemainings={setOptionRemainings}
        input1={input1}
        input2={input2}
        setInput1={setInput1}
        setInput2={setInput2}
        congrats={congrats}
        handleCongrats={handleCongrats}
      />}
    </div>
  );
}

export default App;
