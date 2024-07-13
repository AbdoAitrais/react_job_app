import {
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.js';
import HomePage from './pages/HomePage.js';
import JobsPage from './pages/JobsPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='/jobs' element={<JobsPage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
        </Route>
    )
)

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
export default App

