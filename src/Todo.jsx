// export default function Todo({Task}){
//     return (
//         <li style={{fontSize: '30px', fontWeight: '600'}}>Task: {Task}</li>
//     )
// }

// Conditional rendering option - 1 :
// export default function Todo({Task, isDone}){
    
//     if(isDone === true){
//        return <li style={{fontSize: '30px', fontWeight: '600'}}>Finished: {Task}</li>
//     }
//     else{
//         return <li style={{fontSize: '30px', fontWeight: '600'}}>Work on: {Task}</li>
//     }
// }

// Conditional rendering option - 2 :
// export default function Todo({Task, isDone}){

//     if(isDone){
//         return (
//          <li style={{fontSize: '30px', fontWeight: '600'}}>Completed: {Task}</li>
//         )
//     }
//     return ( 
//         <li style={{fontSize: '30px', fontWeight: '600'}}>Works on: {Task}</li>
//     )
// }

// Conditional rendering option - 3 : Ternary Operator
// export default function Todo({Task, isDone}){

//     return <li style={{fontSize: '30px', fontWeight: '600'}}>{isDone ? 'Finished' : 'Works on'}: {Task}</li>
// }

// Conditional rendering option - 4 : && operator

// export default function Todo({Task, isDone}){

//     return <li style={{fontSize: '30px', fontWeight: '600'}}>{Task} {isDone && ': Done'}</li>
// }

// Conditional rendering option - 5 : || operator
// export default function Todo({Task, isDone}){

//     return <li style={{fontSize: '30px', fontWeight: '600'}}>{Task} {isDone || ': complete'}</li>
// }

// Conditional rendering option - 6 :
export default function Todo({Task, isDone}){
    let listItem;
    if(isDone === true){
       listItem = <li style={{fontSize: '30px', fontWeight: '600'}}>Finished: {Task}</li>
    }
    else{
        listItem = <li style={{fontSize: '30px', fontWeight: '600'}}>Works on: {Task}</li>
    }

    return listItem;
}