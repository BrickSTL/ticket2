import React from 'react';

const Page2 = () => (
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
           <div className="col results-box-right pr-0">
             <img id='mapimg'src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" />
           </div>
         </div>
         <div className="row btn-rows mb-5 mt-5">
           <a><div id="confirm-ticket"className="btn btn-primary px-5">Confirm</div></a>
           <a href="./index.html"><div id="btn-cation"className="btn px-5">Search Again</div></a>
         </div>
        </div>
        <div className="col text-center ">
          <img className='tick-sig-box' src="./images/city-flag.png" />
          <div>
            <img className='tick-sig-name' src="https://upload.wikimedia.org/wikipedia/commons/1/11/Signature_of_Willem-Alexander.png" />
          </div>
          <span> Mayor Michael Smith</span>
        </div>
      </div>
    </div>
  </div>
)

export default Page2
