import { Routes, Route } from 'react-router-dom'
import ALayout from '@/pages/Admin/ALayout'
import Profile from '@/pages/Admin/User/Profile'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route index element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;