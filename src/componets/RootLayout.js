import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import NavBar from '../navBarPanel';
import store from '../store/store';

const RootLayout = ()=> {
    return (
        <>
            <Provider store={store}>
                <NavBar />
                <main>
                    <Outlet />
                </main>

            </Provider>

        </>
    )
}

export default RootLayout