import React, { Component } from 'react';
import './DemoGoodsDescription.css';
import products from '../../../models/products.json';
import store from '../../../redux/Store';

class DemoGoodsDescription extends Component {

  state = {
    size: null,
    sizeIndex: null,
    isError: false
  }

  selectSize = (size, sizeIndex) => {
    this.setState(() => {
      return (
        {
          size: size,
          sizeIndex: sizeIndex,
          isError: false
        }
      )
    })
  }

  addToCart = () => {
    if (this.state.size) {
      const action = {
        type: 'add_to_cart',
        value: {
          title: "Classic Tee",
          price: "$75.00",
          size: this.state.size,
          quantity:1
        }
      }
      store.dispatch(action);
    }
    else {
      this.setState(() => {
        return ({ isError: true })
      })
    }

  }

  render = () => {
    return (
      <div className='DemoGoodsDescription'>
        <div className='row'>
          <div className='col-12 font_arial font_midium DemoGoodsDescription_title'>{products.title}</div>
          <div className='hr'></div>
          <div className='col-12 font_bold DemoGoodsDescription_price'>{products.price}</div>
          <div className='hr'></div>
          <div className='col-12 font_small font_light_grey font_arial DemoGoodsDescription_description'>
            {products.description}
          </div>

          <div className='col-12 font_bold font_small font_light_grey'>
            SIZE<span className='DemoGoodsDescription_star'>*</span>
            <span className='font_dark_grey'>&nbsp;&nbsp;{this.state.size}</span>
          </div>

          {
            this.state.isError ?
              <div className='col-12 DemoGoodsDescription_star'>
                Please choose size.
              </div> :
              <div className='space'>
              </div>
          }

          <div className='col-12'>
            <div className='row'>
              {products.sizeOptions.map(
                (val, index) => {
                  return (
                    <div
                      className={
                        this.state.sizeIndex === index ?
                          'DemoGoodsDescription_size DemoGoodsDescription_selected' :
                          'DemoGoodsDescription_size'
                      }
                      key={index}
                      onClick={() => {
                        this.selectSize(val, index);
                      }}>{val}</div>
                  )
                }
              )}
            </div>
          </div>

          <div className='col-12'>
            <span
              className='DemoGoodsDescription_add'
              onClick={() => {
                this.addToCart()
              }}>ADD TO CART</span>
          </div>
        </div>
      </div>
    )
  }
}


export default DemoGoodsDescription;
