import React from "react";
import "./index.css";

class CatalogTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "", // поле сортировки
      sortDirection: "asc", // направление сортировки
    };
  }

  handleSort = (field) => {
    const { sortBy, sortDirection } = this.state;
    // При нажатии на поле сортировки меняем направление сортировки
    const newSortDirection = sortBy === field && sortDirection === "asc" ? "desc" : "asc";
    this.setState({ sortBy: field, sortDirection: newSortDirection });
  };

  render() {
    const { items } = this.props;
    const { sortBy, sortDirection } = this.state;

    // Создаем копию массива элементов для сортировки
    const sortedItems = [...items];

    // Функции сортировки для различных полей
    const sortByName = (items) => {
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

    const sortByPrice = (items) => {
      return items.sort((a, b) => a.price - b.price);
    };

    const sortByCount = (items) => {
      return items.sort((a, b) => a.count - b.count);
    };

    const sortByDiscount = (items) => {
      return items.sort((a, b) => {
        const discountedPriceA = a.new ? a.price - 1.1 : a.price;
        const discountedPriceB = b.new ? b.price - 1.1 : b.price;
        return discountedPriceA - discountedPriceB;
      });
    };

    // Сортируем элементы
    switch (sortBy) {
      case "title":
        sortByName(sortedItems);
        break;
      case "price":
        sortByPrice(sortedItems);
        break;
      case "count":
        sortByCount(sortedItems);
        break;
      case "new":
        sortByDiscount(sortedItems);
        break;
      default:
        break;
    }

    // Инвертируем порядок сортировки, если необходимо
    if (sortDirection === "desc") {
      sortedItems.reverse();
    }

    return (
      <table className="it">
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={() => this.handleSort("title")}>Название</th>
            <th>Описание</th>
            <th onClick={() => this.handleSort("price")}>Цена</th>
            <th onClick={() => this.handleSort("count")}>Количество</th>
            <th>Картинка</th>
            <th onClick={() => this.handleSort("new")}>Скидка</th>
            <th>Новинка</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>{item.new ? item.price - 10 : item.price} <span className="prb">{item.new && item.price}</span></td>
              <td>{item.count}</td>
              <td>
                <img src={"./Img/" + item.img} alt="" className="tb-i" />
              </td>
              <td>{item.new ? "10%" : "Нет"}</td>
              <td>{item.status ? "Да" : "Нет"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CatalogTable;
    