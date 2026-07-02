import { Routes, Route } from 'react-router-dom'
import { Layout, Home, Login } from '@/pages/Public'

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/sign-in' element={<Login />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;