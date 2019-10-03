import React from 'react';
import './DemoGoodsImg.css';
import classicTee from '../../../assets/img/classic-tee.jpg';

function DemoGoodsImg() {
  return (
    <div className="DemoGoodsImg">
      <img src={classicTee} alt=''></img>
    </div>
  );
}

export default DemoGoodsImg;
