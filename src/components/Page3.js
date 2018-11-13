import React from 'react';

const Page3 = () => (
  <div>
    <div id='page3' className="container-fluid">
     <div className="row topLiner">
       <span>- Payment Information -</span>
     </div>
     <div className="row searchbox mx-0">
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
         <div className="row mt-2">
           <div className="text-left">
             <span><h3>&#x25A0; Finalize</h3></span>
             <p>Select the your payment method and enter the information below </p>
           </div>
           <table style={{width:'100%'}}>
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
           <div style={{height:'10rem'}}>
             <p className="mt-5">Please enter an email address below. We will send you a confirmation email once the payment is processed.</p>
             <input className="form-control w-100" placeholder="Enter Email Address" />
             <div className="col mt-2 text-left p-0">
               <input id="box1" type="checkbox" />
               <label for="box1">I accept the <a href="#">Terms and Conditions</a> </label>
             </div>
           </div>
         </div>
         <div className="row btn-rows mx-0 mb-5 mt-5">
           <a><div id="confirm-final" class="btn px-5 btn-primary">Confirm</div></a>
           <a href="./index.html"><div id="btn-cation"class="btn px-5">Cancel</div></a>
         </div>
       </div>
       <div className="col text-center">

       </div>
     </div>
    </div>
  </div>
)

export default Page3
