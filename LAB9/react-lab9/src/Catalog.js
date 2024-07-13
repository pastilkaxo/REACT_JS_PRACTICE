import React, { Component } from 'react'
import Item from './item'
import "./index.css"

export class Catalog extends Component {
  render() {
  
  
    const itemsWithNew = this.props.items.filter(el => el.new === true);
    const itemsWithoutNew = this.props.items.filter(el => el.new === false);


    return (
      <main>
        
          {itemsWithNew.map(el => (
            <React.Fragment key={el.id}>
              <Item item={el} />
            </React.Fragment>
          ))}

          {itemsWithoutNew.map(el => (
            <React.Fragment key={el.id}>
              <Item item={el} />
            </React.Fragment>
          ))}
        
      </main>
    );
  }
}

export default Catalog

