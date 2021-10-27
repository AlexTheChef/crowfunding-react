import React from 'react';
import '../style/style.css';

function Modal(props) {
    return (
        <section className="pop-up" style={{ top: props.position ? '0' : '-1000px', opacity: props.position ? '1' : '0' }}>
        <div className="pop-up-container">
          <div className={"head-pop-up" + (props.popUp ? ' active' : '')}>
            <div className="close-pop-up" onClick={props.handlePopUp} />
            <h2>Back this project</h2>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser out
              in the world?
            </p>
          </div>

          <div className={'pop-up-options' + (props.popUp ? ' active' : '')}>
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
                  <input type="tel" id='input-0' data-option="0" value={props.input0} onInput={e => props.setInput0(e.target.value)} />
                  <button data-option='0' onClick={props.handleSubmit}>Continue</button>
                </div>
              </div>
            </div>

            <div className={"payment-option" + (!props.optionRemainings[1] ? ' disabled' : '')} data-option='1' tabIndex="-1" >
              <div className="option-select">
                <input type="radio" name="option" id="option-1" />
                <label className='radio-label' htmlFor="option-1"></label>
                <div className="mobile-group">
                  <h3>Bamboo Stand</h3>
                  <h4>Pledge $25 or more</h4>
                </div>
                <p className="span-left2" data-left='1'>{props.optionRemainings[1]}<span>&nbsp; left</span></p>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className='custom-deposit'>
                <div className='deposit'>
                  <label htmlFor="input-1">Enter your pledge</label>
                  <input type="tel" id='input-1' data-option='1' value={props.input1} onInput={e => props.setInput1(e.target.value)} />
                  <button data-option='1' disabled={!props.optionRemainings[1]} onClick={props.handleSubmit}>Continue</button>
                </div>
              </div>
            </div>

            <div className={"payment-option" + (!props.optionRemainings[2] ? ' disabled' : '')} data-option='2' tabIndex="-1" >
              <div className="option-select">
                <input type="radio" name="option" id="option-2" />
                <label className='radio-label' htmlFor="option-2"></label>
                <div className="mobile-group">
                  <h3>Black Edition Stand</h3>
                  <h4>Pledge $75 or more</h4>
                </div>
                <p className="span-left" data-left='2'>{props.optionRemainings[2]}<span>&nbsp; left</span></p>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping is
                included.
              </p>
              <div className='custom-deposit'>
                <div className='deposit'>
                  <label htmlFor="input-2">Enter your pledge</label>
                  <input type="tel" id='input-2' data-option="2" value={props.input2} onInput={e => props.setInput2(e.target.value)} />
                  <button data-option='2' disabled={!props.optionRemainings[2]} onClick={props.handleSubmit}>Continue</button>
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

          <div className={"congrats-pop" + (props.congrats ? ' active' : '')}>
            <div  />
            <h2>Thanks for your support!</h2>
            <p>
              Your pledge brings us one step closer to sharing Mastercraft Bamboo
              Monitor Riser worldwide. You will get an email once our campaign is
              completed.
            </p>
            <button className='end' onClick={props.handleCongrats}>Got it!</button>
          </div>
        </div>
      </section>
    );
}

export default Modal;