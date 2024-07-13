import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { item } = this.props;
    const price = item.new ? item.price - 10 : item.price;
    const sts = item.new ? 'НОВИНКА' : item.status;

    return (
      <div className='item'>
        <img src={'./Img/' + this.props.item.img} alt='' />
        <h1 className='status'>{sts}</h1>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>Количество: {this.props.item.count}</b>
        <div className='get'>
          {item.new ? (
            <>
              <b className='price'>{price} $</b>
              <span className='prb'>{item.price} $</span>
            </>
          ) : (
            <b>{item.price} $</b>
          )}
          <button className='add-to-cart'>Add</button>
        </div>
      </div>
    );
  }
}


Item.sortByName = (items) => {
  return items.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
};

Item.sortByPrice = (items) => {
  return items.sort((a, b) => a.price - b.price);
};

Item.sortByCount = (items) => {
  return items.sort((a, b) => a.count - b.count);
};

Item.sortByDiscount = (items) => {
  return items.sort((a, b) => {
    const discountedPriceA = a.new ? a.price - 1.1 : a.price;
    const discountedPriceB = b.new ? b.price - 1.1 : b.price;
    return discountedPriceA - discountedPriceB;
  });
};




export default Item