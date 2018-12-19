import React, {Component} from 'react';
import Page1 from './Page1';
import Tabs from './Tabs.js'




class Main extends Component {
  constructor(props){
    super(props);
    this.state= {
      count:3
    }
    this.handleVisibility1 = this.handleVisibility1.bind(this)
  }
  handleVisibility1(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    if(this.state.count===1){
      return (
        <div  id='page1' className="container-fluid">
        <div className="row topLiner">
          <span>- Find Your Ticket -</span>
        </div>
        <div className='row searchbox mx-0'>
          <div className="col pinkbox-space">
            <div className="pinkbox">
              <li>Parking Safety Tips</li>
              <li>City Parking Police</li>
              <li>Downtown Parking Map</li>
              <li>Boot Removal/Towing Info</li>
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
              <button onClick={this.handleVisibility1}  id="confirm-ticket"className="btn btn-primary px-5">Next</button>
            </div>
          </div>
          <div className="col ticket">
          </div>
        </div>
          <h1>Page # {this.state.count}</h1>
        </div>
      )
    }
    if(this.state.count===2){
      return (
        <div>
          <div id='page2' className='container-fluid'>
            <div className="row topLiner">
              <span>- Results -</span>
            </div>
            <div className='row searchbox'>
              <div className="col pinkbox-space">
              </div>
              <div className="col-5 resultsbox">
                <div className="result">
                  <p className="m-0">Here is what our search results found for XXX-XXX. Please select the ticket(s) you would like the pay and press confirm.</p>
                </div>
                <div className="row mx-auto my-2">
                  <div className="col results-box-left pt-2">
                    <div className="row">
                      <div className="col-1">
                        <input type="radio" />
                      </div>
                      <div className="col text-left">
                        <span id="tick-left-1">Ticket XXX-XXX was issued to license plate number XXX-XXX on 01/02/18.</span>
                      </div>
                    </div>
                    <div className="row form2 mt-4 mx-0">
                      <table>
                        <thead>
                          <tr>
                          <th className="p3line">Ticket Number</th>
                          <th className="p3line">Date Issued</th>
                          <th className="p3line">Fines</th>
                          <th className="p3line">Total Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td className="p3line">NWES01DMS</td>
                          <td className="p3line">03/05/2018</td>
                          <td className="p3line">$15.00</td>
                          <td className="p3line">$15.00</td>
                        </tr>
                      </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row btn-rows mb-5 mt-5">
                  <button onClick={this.handleVisibility1}  id="confirm-ticket"className="btn btn-primary px-5"> Confirm </button>
                  <a href="./index.html"><div id="btn-cation"className="btn px-5">Search Again</div></a>
                </div>
              </div>
              <div className="col text-center ">
                <img className='tick-sig-box' src="./images/city-flag.png" />
                <div>
                  <img className='tick-sig-name'/>
                </div>
                <span> Mayor Michael Smith</span>
              </div>
            </div>

          </div>
          <h1>Page # {this.state.count}</h1>
        </div>
      )
    }
    if(this.state.count===3){
      return (
        <div>
          <div id='page3' className="container-fluid">
            <div className="row topLiner">
              <span>- Payment Information -</span>
            </div>
            <div className="row">
              <div className="col">
              </div>
              <div className="col-7 resultsbox">
                <div className="row">
                  <span><h3>&#x25A0; Ticket Information</h3></span>
                  <span className="text-left">Below is the ticket(s) you have selected. Please confirm you are playing for the correct ticket(s).</span>
                  <div className="row mx-1 my-2">
                      <div className="col-5 tick-info results-box-left">
                        <div className="row">
                          <span id="tick-left-info">Ticket XXX-XXX was issued to license plate number XXX-XXX on 01/02/18.</span>
                        </div>
                        <div className="row">
                          <table style={{width:'100%',marginTop:'5%'}}>
                            <thead>
                              <tr>
                                <th className="p3line">Ticket Number</th>
                                <th className="p3line">Date Issued</th>
                                <th className="p3line">Fines</th>
                                <th className="p3line">Total Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p3line">NWES01DMS</td>
                                <td className="p3line">03/05/2018</td>
                                <td className="p3line">$15.00</td>
                                <td className="p3line">$15.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-5 results-box-right">
                        <img id='mapimg'src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" />
                      </div>
                  </div>
                </div>
                <div className="row d-block">
                  <span className="text-left"><h3>&#x25A0; Payment Options</h3></span>
                  <p className="text-left">Select the your payment method and enter the information below </p>
                </div>
                <Tabs/>
              
                <div id="tab-1" className="tab-content">
                  <br/>
                  <div className="row paypal m-0">
                    <img src='https://freeiconshop.com/wp-content/uploads/edd/creditcard-flat.png'/>
                  </div>
                </div>
                <div className="row btn-rows mx-0 mb-5 mt-5">
                  <button onClick={this.handleVisibility1} id="confirm-final" className="btn px-5 btn-primary"> Confirm </button>
                  <a href="./index.html"><div id="btn-cation"class="btn px-5">Cancel</div></a>
                </div>
              </div>
              <div className="col text-center">
              </div>
            </div>
          </div>
          <h1>Page # {this.state.count}</h1>
        </div>
      )
    }
    if(this.state.count===4){
      return (
        <div>
          <div id='page4' className='container-fluid'>
            <div className="row topLiner">
              <span>- Payment Confirmation -</span>
            </div>
            <div className="row mx-0 mb-3">
              <div className="col-2">
              </div>
              <div className="col-6 resultsbox">
               <div className="confirmbox">
                 <h2 className="text-left">Thank You!</h2>
                 <h6 className="text-left">Your payment has been successfully processed. Ticket number XXX-XXX-XX is considered complete and requires no additional action.</h6>
               </div>
               <div className="row">
                 <table style={{width:'100%',justifyContent:'center',marginTop:'5%'}}>
                   <thead>
                     <tr>
                       <th>Ticket Number</th>
                       <th>Date Issued</th>
                       <th>Fines</th>
                       <th>Total Amount</th>
                       <th>Payment</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>NWES01DMS</td>
                       <td>03/05/2018</td>
                       <td>$15.00</td>
                       <td>$15.00</td>
                       <td>Visa XXX-1234</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <div className="row btn-rows my-5">
                 <a href="./index.html"><div id="btn-return" className="btn btn-primary">Return to Parking Services</div></a>
               </div>
              </div>
              <div className="col text-center">
                <img src="./images/city-flag.png" style={{height:'8rem', width:'11rem', marginTop:'5%', border:'2px'}} />
                <div>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Signature_of_Willem-Alexander.png" style={{height:'15%', width:'33%', marginTop:'5%'}}/>
                </div>
                <span style={{fontSize:'16px'}}> Mayor Michael Smith</span>
              </div>
            </div>
          </div>
          <h1>Page # {this.state.count}</h1>
        </div>
      )
    }
  }
}

export default Main
