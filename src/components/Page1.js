import React from 'react';

const Page1 = () => (
  <div>
    <div id='page1' className="container-fluid">
      <div className="row topLiner">
        <span>- Find Your Ticket -</span>
      </div>
      <div className='row searchbox mx-0'>
        <div className="col pinkbox-space">
          <div className="pinkbox">
            <a href='#'><li>Parking Safety Tips</li></a>
            <a href='#'><li>City Parking Police</li></a>
            <a href='#'><li>Downtown Parking Map</li></a>
            <a href='#'><li>Boot Removal/Towing Info</li></a>
          </div>
        </div>
        <div className="col-5  enterticket">
          <form>
            <div className="form-group">
              <label><p>Enter your ticket ID number or license plate in the bar below.</p></label>
              <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="Ticket ID or License Plate" />
            </div>
          </form>
          <div className="control-box">

          </div>
          <div className="subnote">
            <div className="row pt-2 m-0">
              <div className="col-2">
                <p>phone</p>
              </div>
              <div className="col">
                <p>Cant locate your ticket?</p>
                <p>Call (800)-555-5555 to speak with a local ticket agent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col ticket">
        </div>
      </div>
    </div>
  </div>
)

export default Page1
