import React, {Component} from 'react';
import $ from 'jquery';



class Tabs extends Component {

constructor(props) {
  super(props);
  this.state = {
    current: "tab 1",
    activeIndex: null

  };
  this.clickTab = this.clickTab.bind(this);

}

clickTab(event, index) {

  this.setState({
    current: event.currentTarget.textContent,

  });


  $("li").click(function() {

    // remove classes from all
    $("li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
 });


}

// if state = current: event.currentTarget.textContent
// toggle active class

render() {
  return (
    <div className="tabs">
      <ul className="tabs__labels row">
        <li
            onClick={this.clickTab}
            className="col active"
          ><a href="#">tab 1</a>
        </li>
        <li
          onClick={this.clickTab}
          className="col"
          ><a href="#">tab 2</a>
        </li>
        <li
          onClick={this.clickTab}
          className="col"
          ><a href="#">tab 3</a>
        </li>

      </ul>
      <div className="tabs__content">
        {this.state.current === "tab 1" &&
          <Tab1 title={"Debt/Credit"} content={
            <div>
              <br/>
              <div className="row paypal m-0">
              <img src="https://freeiconshop.com/wp-content/uploads/edd/creditcard-flat.png" style={{height:'25px'}}/>
              </div>
              <div className="row debt-cred">
                <input className="form-control w-50" placeholder="Debt or Credit Card Number"/>
                <div className="row text-center">
                  <input className="col form-control" placeholder="Expiration Date"/>
                  <input className="col form-control mx-3" placeholder="Zip Code"/>
                  <input className="col form-control" placeholder="CVC Number"/>
                </div>
              </div>
            </div>
          } />
        }
        {this.state.current === "tab 2" &&
            <Tab2 title={"Check"} content={
              <div>
                <br/>
                <div className="row paypal m-0">
                <img src="https://freeiconshop.com/wp-content/uploads/edd/creditcard-flat.png" style={{height:'25px'}}/>
                </div>
                <div className="row debt-cred">
                  <input className="form-control w-75 mt-2" placeholder="Account Holder Name"/>
                  <div className="row text-center">
                    <input className="col form-control mx-1" placeholder="Account Number"/>
                    <input className="col form-control mx-1" placeholder="Routing Number"/>
                  </div>
                </div>
              </div>
            } />
        }
        {this.state.current === "tab 3" &&
            <Tab3 title={"PayPal"} content={
              <div>
                <br/>
                <div className="row paypal m-0">
                <img src="https://freeiconshop.com/wp-content/uploads/edd/creditcard-flat.png" style={{height:'25px'}}/>
                </div>
                <div className="row debt-cred">
                  <input className="form-control mt-0" placeholder="PayPal Username or Email Address"/>
                  <input className="form-control mt-2" placeholder="PayPal Password"/>
                </div>
                <div className="row justify-content-center mt-2">
                  <div className="btn btn-primary">Login</div>
                </div>
              </div>
            } />
        }
      </div>
    </div>
  );
}
}

function Tab1(props) {
return (
  <div>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
);
}

function Tab2(props) {
return (
  <div>
   <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
);
}
function Tab3(props) {
return (
  <div>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
);
}

export default Tabs
