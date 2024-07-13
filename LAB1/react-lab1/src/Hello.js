

function Hello() {
  let day = new Date().getDate();
  let month = new Date().getMonth()+1;
  let year = new Date().getFullYear();
  return (
    <div className="Hello">
     <h1>Hello World!  Date: {day}.{month}.{year}</h1>
    
    </div>
  );
}



export default Hello;
