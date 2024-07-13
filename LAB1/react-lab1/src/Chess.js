import './Chess.css'
import Tcells from './Tcells';
import Board from './Board';
function Chess(){
 
   return  ( 
    <table className="chess-board"> 
     {Tcells()}
     {Board()}
     {Tcells()}
    
    </table>
   )
}

export default Chess;