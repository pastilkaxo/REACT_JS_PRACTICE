import React, { Component } from 'react';
import "./index.css"

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



class ItemSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
    };
  }

  handleSearch = (event) => {
    const { value } = event.target;
    const { items } = this.props;
    const searchQuery = value.trim().toLowerCase();
    const searchResults = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
    this.setState({ searchQuery, searchResults });
  };

  sortItemsByName = () => {
    const sortedItems = Item.sortByName(this.props.items);
    this.setState({ searchResults: sortedItems });
  };
  sortByPrice = () => {
    const sortedItems = Item.sortByPrice(this.props.items);
    this.setState({ sortedItems });
  };

  sortByCount = () => {
    const sortedItems = Item.sortByCount(this.props.items);
    this.setState({ sortedItems });
  };

  sortByDiscount = () => {
    const sortedItems = Item.sortByDiscount(this.props.items);
    this.setState({ sortedItems });
  };

  render() {
    const { searchQuery, searchResults } = this.state;
    const { items } = this.props;
    const displayItems = searchQuery ? searchResults : items;

    return (
   <>
   <br></br>
   <button onClick={this.sortItemsByName}>Имя</button>
        <button onClick={this.sortByCount}>Количество</button>
        <button onClick={this.sortByPrice}>Цена</button>
        <button onClick={this.sortByDiscount}>Скидка</button>
        <br></br>
           <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={this.handleSearch}
        />
  
         <main>
        {displayItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </main>
   </>
    );
  }
}

export default ItemSearch;
