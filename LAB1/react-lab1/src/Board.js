
import "./Chess.css"

const Board = () => 
{
    let numbers = 8;
const desk = [];
    for(let i = 0 ; i < 8 ; i+=2){
        desk.push(
            <tr className="str">           
            <td className="cell-num">{numbers-i}</td>
            <td className="cell-even"></td>
            <td className="cell-node"></td>
            <td className="cell-even"></td>
            <td className="cell-node"></td>
            <td className="cell-even"></td>
            <td className="cell-node"></td>
            <td className="cell-even"></td>
            <td className="cell-node"></td>
            <td className="cell-num">{numbers-i}</td>
        </tr>,
            <tr className="str">           
                <td className="cell-num">{numbers-i-1}</td>
                <td className="cell-node"></td>
                <td className="cell-even"></td>
                <td className="cell-node"></td>
                <td className="cell-even"></td>
                <td className="cell-node"></td>
                <td className="cell-even"></td>
                <td className="cell-node"></td>
                <td className="cell-even"></td>
                <td className="cell-num">{numbers-i-1}</td>
            </tr>

            
        )
    }


return desk;
}


export default Board;
