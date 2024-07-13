import TableInfo from './TableInfo';
import  './table.css'

function Table(){

    return(
        <table>
     <tr>
         <th className="tableHeader">stock_name</th>
         <th className="tableHeader">company_name</th>
         <th className="tableHeader">price</th>
         <th className="tableHeader">currency</th>
         <th className="tableHeader">change</th>
     </tr>
    
     <tbody id="tb">
        {TableInfo()}
</tbody>

        </table>
    )

}


export default Table;