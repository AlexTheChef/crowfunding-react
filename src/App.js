import React, { useState } from 'react';
import './style.css';

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
      <div className='header'>
        <div className='header-mobile-img' src="images/logo.svg" />
        <div className="navigation">
          <a href="!#" alt=''>About</a>
          <a href="!#" alt=''>Discover</a>
          <a href="!#" alt=''>Get Started</a>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-img" />
        <div className={"burger js-burger" + (burger ? ' active' : '')} onClick={handleBurger}></div>
        <div className="navigation-mobile js-navigation" style={{ display: burger ? 'block' : 'none' }}>
          <a href="!#" alt=''>About</a>
          <a href="!#" alt=''>Discover</a>
          <a href="!#" alt=''>Get Started</a>
        </div>
      </div>

      <div className={"shadow" + (burger ? ' active' : '')}></div>

      <div className="hero-img"></div>

      <div className="main">
        <section className="title-div">
          <div className="logo-mastercraft" />
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>
          <div>
            <button className="button1" data-option='0' onClick={handlePopUp}>Back this project</button>
            <input type="checkbox" className="bookmark-check" id="bookmark" />
            <div className={"bookmark-div" + (checkbox ? ' active' : '')} onClick={handleCheckbox}></div>
          </div>
        </section>
        <section className="payment">
          <div>
            <h1 className="numbers" id="backed">${totalAchived}</h1>
            <p>of $100,000 backed</p>
          </div>
          <hr />
          <div>
            <h1 className="numbers" id="backers">{totalBackers}</h1>
            <p>total backers</p>
          </div>
          <hr />
          <div>
            <h1 className="numbers" id="left">56</h1>
            <p>days left</p>
          </div>
          <meter id="funding-meter" max="100000" value={totalAchived}></meter>
        </section>
        <section className="description">
          <div>
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>Featuring artisan
              craftsmanship, the simplicity of design creates extra desk space
              below your computer to allow notepads, pens, and USB sticks to be
              stored under the stand.
            </p>
          </div>
          <div className="options">
            <div className={"payment-option-main" + (!optionRemainings[1] ? ' disabled' : '')} tabIndex="-1">
              <div className="row">
                <h3>Bamboo Stand</h3>
                <h4>Pledge $25 or more</h4>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className="row">
                <p className="numbers" data-left='1'>{optionRemainings[1]}<span>&nbsp; left</span></p>
                <button data-option="1" disabled={!optionRemainings[1]} onClick={handlePopUp}>Select Reward</button>
              </div>
            </div>

            <div className={"payment-option-main" + (!optionRemainings[2] ? ' disabled' : '')} tabIndex="-1">
              <div className="row">
                <h3>Black Edition Stand</h3>
                <h4>Pledge $75 or more</h4>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping is
                included.
              </p>
              <div className="row">
                <p className="numbers" data-left='2'>{optionRemainings[2]}<span>&nbsp; left</span></p>
                <button data-option="2" disabled={!optionRemainings[2]} onClick={handlePopUp}>Select Reward</button>
              </div>
            </div>

            <div className="payment-option-main disabled">
              <div className="row">
                <h3>Mahogany Special Edition</h3>
                <h4>Pledge $200 or more</h4>
              </div>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and
                a personal thank you. You’ll be added to our Backer member list.
                Shipping is included.
              </p>
              <div className="row">
                <p className="numbers">0<span>&nbsp; left</span></p>
                <button disabled>Select Reward</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="pop-up" style={{ top: position ? '0' : '-1000px', opacity: position ? '1' : '0' }}>
        <div className="pop-up-container">
          <div className={"head-pop-up" + (popUp ? ' active' : '')}>
            <div className="close-pop-up" onClick={handlePopUp} />
            <h2>Back this project</h2>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser out
              in the world?
            </p>
          </div>

          <div className={'pop-up-options' + (popUp ? ' active' : '')}>
            <div className="payment-option" data-option='0' tabIndex="-1" >
              <div className="option-select">
                <input type="radio" name="option" id="option-0" />
                <label className='radio-label' htmlFor="option-0"></label>
                <h3>Pledge with no reward</h3>
              </div>
              <p>
                Choose to support us without a reward if you simply believe in our
                project. As a backer, you will be signed up to receive product
                updates via email.
              </p>
              <div className='custom-deposit'>
                <div className='deposit'>
                  <label htmlFor="input-0">Enter your pledge</label>
                  <input type="tel" id='input-0' data-option="0" value={input0} onInput={e => setInput0(e.target.value)} />
                  <button data-option='0' onClick={handleSubmit}>Continue</button>
                </div>
              </div>
            </div>

            <div className={"payment-option" + (!optionRemainings[1] ? ' disabled' : '')} data-option='1' tabIndex="-1" >
              <div className="option-select">
                <input type="radio" name="option" id="option-1" />
                <label className='radio-label' htmlFor="option-1"></label>
                <div className="mobile-group">
                  <h3>Bamboo Stand</h3>
                  <h4>Pledge $25 or more</h4>
                </div>
                <p className="span-left2" data-left='1'>{optionRemainings[1]}<span>&nbsp; left</span></p>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className='custom-deposit'>
                <div className='deposit'>
                  <label htmlFor="input-1">Enter your pledge</label>
                  <input type="tel" id='input-1' data-option='1' value={input1} onInput={e => setInput1(e.target.value)} />
                  <button data-option='1' disabled={!optionRemainings[1]} onClick={handleSubmit}>Continue</button>
                </div>
              </div>
            </div>

            <div className={"payment-option" + (!optionRemainings[2] ? ' disabled' : '')} data-option='2' tabIndex="-1" >
              <div className="option-select">
                <input type="radio" name="option" id="option-2" />
                <label className='radio-label' htmlFor="option-2"></label>
                <div className="mobile-group">
                  <h3>Black Edition Stand</h3>
                  <h4>Pledge $75 or more</h4>
                </div>
                <p className="span-left" data-left='2'>{optionRemainings[2]}<span>&nbsp; left</span></p>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping is
                included.
              </p>
              <div className='custom-deposit'>
                <div className='deposit'>
                  <label htmlFor="input-2">Enter your pledge</label>
                  <input type="tel" id='input-2' data-option="2" value={input2} onInput={e => setInput2(e.target.value)} />
                  <button data-option='2' disabled={!optionRemainings[2]} onClick={handleSubmit}>Continue</button>
                </div>
              </div>
            </div>

            <div className="payment-option disabled">
              <div className="option-select-disabled">
                <label className='radio-label' htmlFor="option-2"></label>
                <div className="mobile-group">
                  <h3>Mahogany Special Edition</h3>
                  <h4>Pledge $200 or more</h4>
                </div>
                <p className="span-left-disabled">0<span>&nbsp; left</span></p>
              </div>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and
                a personal thank you. You’ll be added to our Backer member list.
                Shipping is included.
              </p>
            </div>
          </div>

          <div className={"congrats-pop" + (congrats ? ' active' : '')}>
            <img src="/src/images/icon-check.svg" alt='' />
            <h2>Thanks for your support!</h2>
            <p>
              Your pledge brings us one step closer to sharing Mastercraft Bamboo
              Monitor Riser worldwide. You will get an email once our campaign is
              completed.
            </p>
            <button className='end' onClick={handleCongrats}>Got it!</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
