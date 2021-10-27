import React from 'react';
import './style.css';

function Main(props) {
    return (
        <div className="main">
        <section className="title-div">
          <div className="logo-mastercraft" />
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>
          <div>
            <button className="button1" data-option='0' onClick={props.handlePopUp}>Back this project</button>
            <input type="checkbox" className="bookmark-check" id="bookmark" />
            <div className={"bookmark-div" + (props.checkbox ? ' active' : '')} onClick={props.handleCheckbox}></div>
          </div>
        </section>
        <section className="payment">
          <div>
            <h1 className="numbers" id="backed">${props.totalAchived}</h1>
            <p>of $100,000 backed</p>
          </div>
          <hr />
          <div>
            <h1 className="numbers" id="backers">{props.totalBackers}</h1>
            <p>total backers</p>
          </div>
          <hr />
          <div>
            <h1 className="numbers" id="left">56</h1>
            <p>days left</p>
          </div>
          <meter id="funding-meter" max="100000" value={props.totalAchived}></meter>
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
            <div className={"payment-option-main" + (!props.optionRemainings[1] ? ' disabled' : '')} tabIndex="-1">
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
                <p className="numbers" data-left='1'>{props.optionRemainings[1]}<span>&nbsp; left</span></p>
                <button data-option="1" disabled={!props.optionRemainings[1]} onClick={props.handlePopUp}>Select Reward</button>
              </div>
            </div>

            <div className={"payment-option-main" + (!props.optionRemainings[2] ? ' disabled' : '')} tabIndex="-1">
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
                <p className="numbers" data-left='2'>{props.optionRemainings[2]}<span>&nbsp; left</span></p>
                <button data-option="2" disabled={!props.optionRemainings[2]} onClick={props.handlePopUp}>Select Reward</button>
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
    );
}

export default Main;