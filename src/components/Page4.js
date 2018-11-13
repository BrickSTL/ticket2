import React from 'react';

const Page4 = () => (
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
  </div>
)

export default Page4
