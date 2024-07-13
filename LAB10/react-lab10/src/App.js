import React from "react";
import Item from "./item";
import CatalogTable from "./SortTable";
import ItemSearch from "./item";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id:1,
                    title:"Холодильник",
                    desc:"Здесь есть описание =)",
                    price:"50",
                    count:"12",
                    img:"холодильник2.jpg",
                    new:true,
                    status:""
                },
                {
                    id:2,
                    title:"Телевзор",
                    desc:"Здесь есть описание =)",
                    price:"60",
                    count:"2",
                    img:"телек.jpg",
                    new:false,
                    status:""
                },
                {
                    id:3,
                    title:"Робот пылесос",
                    desc:"Здесь есть описание =)",
                    price:"110",
                    count:"30",
                    img:"робот.jpg",
                    new:false,
                    status:""
                }
            ],
            sortedItems: [], // Хранит отсортированный массив товаров
        }
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
    render(){
        return(
            <>
        
            <div className="wrapper">
            <CatalogTable items={this.state.items} />

              <ItemSearch items={this.state.items}/>
            
            </div>
            </>
        )
    }
}

export default App;