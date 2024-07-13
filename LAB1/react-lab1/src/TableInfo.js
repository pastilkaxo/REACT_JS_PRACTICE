import "./table.css"
import { ServerData } from "./Server";

const TableInfo = () => {
    let tab = [];
  
  for(let server of ServerData){    
    const stl = {
        color:" "
    }
    if(server.change > 0) {
        stl.color = "plus"
    }
    else if(server.change < 0 ){
        stl.color = "minus"
    }

    tab.push(
        <tr>
            <td>{server.stock_name}</td>
            <td>{server.company_name}</td>
            <td>{server.price}</td>
            <td>{server.currency}</td>
            <td className={stl.color}>{server.change}</td>
        </tr>
    )
  
  
  }
  

 
    
  return tab
}

export default TableInfo;