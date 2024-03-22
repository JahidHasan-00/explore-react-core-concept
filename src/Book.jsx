
import './Book.css'
export default function Book({book}){
    console.log(book);
    return (
        <div className='book'>
            <h3 style={{textDecoration: 'underline 2px white',}}>Book Name: {book.name} </h3>
            <h4 style={{color:'#ddd', textDecoration: 'underline 2px gold'}}>Book Price: {book.price} </h4>
        </div>
    )
}