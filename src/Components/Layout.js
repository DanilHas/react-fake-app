import { Outlet } from 'react-router-dom';
import DarkAppBar from './AppBar';

export default function Layout() {
    return (
      <>
        <DarkAppBar />

        <Outlet />
      </>
    );
}
