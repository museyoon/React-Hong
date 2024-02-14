import React from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

//function Mainpage(){
//}


const MainPage = () => {
    const [serachParams, setSerachParms] = useSearchParams();
    console.log(serachParams.get("todoId"));
    const navigate = useNavigate();

    const onClickNavigateTodo = () => {
        //window.location.href = '/todo/3'
        //navigate(-1)
        //navigate('/todo/3')
        setSerachParms({
            todoId: 3,
            page: 5
        })
    }


    return (
    // <></>
    <React.Fragment>
    {/** 태그명이 없는 태그를 Fragment라고 부른다. 만약 해당 Fragment에 속성을 줄 경우 */}
        <div>main</div>
        <div>:)</div>
        <button>TodoPage로 이동</button>
        <a href='/todo/3'>TODOPAGE</a>
        <Link to="/todo/5">TODOPAGE</Link>
    </React.Fragment>
    )

}
export default MainPage