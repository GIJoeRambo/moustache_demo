import React, { Fragment, Component } from 'react';
import './DemoHeader.css';
import store from '../../redux/Store';
import DemoMiniCart from '../demo_body/demo_mini_cart/DemoMiniCart';

class DemoHeader extends Component {

  constructor(props){
    super(props);
    store.subscribe(() => {
      this.setState(()=>{
        return({
          storeState:store.getState()
        })
      })
    })
  }

  state = {
    storeState:null,
    isDropDownActive: false,
  }

  dropDown = () => {
    if (!store.getState()) {
      return;
    }
    else {
      this.setState(() => {
        return (
          { isDropDownActive: !this.state.isDropDownActive }
        )
      })
    }
  }

  // calculateAmount = ()=>{
  //   const list = this.state.storeState;
  //   let totalNumber = 0;
  //   if(!list){
  //     return 0;
  //   }
  //   else{
  //     // for(let i of list){
  //     //   console.log(i)
  //     // }
  //     return totalNumber;
  //   }
  // }

  render = () => {
    return (
      <Fragment>
        <div className='row'>
          <div className='col-md-12'>
            <div className='mt-3 DemoHeader'>
              <div className={this.state.isDropDownActive ? 'DemoHeader_cart isDropDownActive' : 'DemoHeader_cart'}>
                <span
                  className='col-md-3'
                  onClick={() => {
                    this.dropDown();
                  }}
                >
                  My Cart ( <span>{this.state.storeState?this.state.storeState.counter:0}</span> )
            </span>
              </div>
            </div>
          </div>
          <div className='col-md-12' >
            {
              this.state.isDropDownActive ?
                <div className='DemoHeader_dropdown'>
                  <DemoMiniCart></DemoMiniCart>
                </div>
                : null
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default DemoHeader;
