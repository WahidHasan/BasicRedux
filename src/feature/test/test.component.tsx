import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestApi, todo } from '../../core/redux/slices/test-slice'
import { BasketState } from '../../core/redux/store'

const TestComponent = () => {
    const dispatch = useDispatch()
    const testList = useSelector((state: BasketState)=> state.test);
    React.useEffect(() => {
     dispatch(fetchTestApi());
    }, [dispatch])
    console.log("testList.todos: ", testList.todos);
    return (
        <div className="list-style">
            <ul className="todo">
                {testList.loading ? <><i className="fas fa-sync fa-spin fa-5x mt-5"></i></> : testList.todos?.map((item: todo)=>{
                    return(<li className="todo-list" key={item.id}>{item.title} {item.completed ? <i className="fas fa-check" area-hidden="true"></i> : <i className="fas fa-times" area-hidden="true"></i>}</li>)
                })}
            </ul>
        </div>
    )
}

export default TestComponent
