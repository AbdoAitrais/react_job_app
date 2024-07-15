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
import JobPage from './pages/JobPage.js';
import jobLoader from './data-loaders/JobLoader.js';
import AddJobPage from './pages/AddJobPage.js';

const addJob = async(newJob:any) => {
    const res = fetch('/api/jobs',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newJob)
    });
    return;
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='/jobs' element={<JobsPage/>}></Route>
            <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}></Route>
            <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}></Route>
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

