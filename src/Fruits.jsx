export default function Fruits({fruit}){
    console.log(fruit);
    return (
        <div>
            <h3>Fruit: {fruit.name} </h3>
            <p style={{fontSize: '20px'}}>price: {fruit.price} </p>
        </div>
    )
}