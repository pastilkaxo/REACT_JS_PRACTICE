import React from "react";
import Catalog from "./Catalog";
import Item from "./item";
import CatalogTable from "./SortTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Холодильник",
          desc: "Здесь есть описание =)",
          price: "50",
          count: "12",
          img: "холодильник2.jpg",
          new: true,
          status: "",
        },
        {
          id: 2,
          title: "Телевзор",
          desc: "Здесь есть описание =)",
          price: "60",
          count: "2",
          img: "телек.jpg",
          new: false,
          status: "",
        },
        {
          id: 3,
          title: "Робот пылесос",
          desc: "Здесь есть описание =)",
          price: "110",
          count: "30",
          img: "робот.jpg",
          new: false,
          status: "",
        },
        {
            id:4,
            title:"Магнитола",
            desc: "Здесь есть описание =)",
            price: "123",
            count: "15",
            img: "магнитола.jpg",
            new: true,
            status: "",
        },
        {
            id:5,
            title:"Колонка",
            desc: "Здесь есть описание =)",
            price: "230",
            count: "5",
            img: "колонка.jpg",
            new: true,
            status: "",
        },
      ],
      sortedItems: [], // Хранит отсортированный массив товаров
    };
  }
  

  sortByName = () => {
    const sortedItems = Item.sortByName(this.state.items);
    this.setState({ sortedItems });
  };

  sortByPrice = () => {
    const sortedItems = Item.sortByPrice(this.state.items);
    this.setState({ sortedItems });
  };

  sortByCount = () => {
    const sortedItems = Item.sortByCount(this.state.items);
    this.setState({ sortedItems });
  };

  sortByDiscount = () => {
    const sortedItems = Item.sortByDiscount(this.state.items);
    this.setState({ sortedItems });
  };


  
  render() {
    const { items, sortedItems } = this.state;
    const displayItems = sortedItems.length > 0 ? sortedItems : items; // Отображаем отсортированные элементы, если они есть, иначе отображаем исходный список
        
    return (
      <>
        <div className="wrapper">
          <CatalogTable items={items} />
          <button onClick={this.sortByName}>Сортировать по наименованию</button>
          <button onClick={this.sortByPrice}>Сортировать по стоимости</button>
          <button onClick={this.sortByCount}>Сортировать по количеству</button>
          <button onClick={this.sortByDiscount}>Сортировать по скидке</button>

          <Catalog items={displayItems} /> {/* Отображаем отсортированные или исходные элементы */}
        </div>
      </>
    );
  }
}

export default App;
