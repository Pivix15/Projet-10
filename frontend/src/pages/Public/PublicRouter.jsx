import { Routes, Route } from 'react-router-dom'
import { Layout, Home, Login, User } from '@/pages/Public'

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/user' element={<User />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;