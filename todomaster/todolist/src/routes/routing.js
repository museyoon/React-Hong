import { createBrowserRouter } from 'react-router-dom'
import Mainpage from '../pages/main'
import Todopage from '../pages/todo'

// export const router = createBrowserRouter([])
const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainpage/>
    },
    {
        path: '/todo/:todoId',
        element: <Todopage/>
    },
])

/* 기본값 */
export default router