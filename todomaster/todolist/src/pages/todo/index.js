import React from "react"
import { useParams } from "react-router-dom"

const TodoPage = () => {
    const params = useParams();
    console.log(params)

    return (
    <React.Fragment>
        <div>todo</div>
        <div>:)</div>
    </React.Fragment>
    )
}
export default TodoPage