import React, { Component } from 'react';
import './DemoBody.css';
import DemoGoodsImg from './demo_goods_img/DemoGoodsImg';
import DemoGoodsDescription from './demo_goods_description/DemoGoodsDescription';

class DemoBody extends Component{

  

  render = () => {
    return (
      <div className="DemoBody container">
        <div className='row'>

          <div className='col-md-6 col-sm-12'>
            <DemoGoodsImg></DemoGoodsImg>
          </div>

          <div className='col-md-6 col-sm-12'>
            <DemoGoodsDescription></DemoGoodsDescription>
          </div>
        </div>
      </div>
    )
  }
}

export default DemoBody;
