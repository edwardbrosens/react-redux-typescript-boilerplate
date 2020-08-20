import { Header, PageLayout, SideNav } from '@components';
import { CssBaseline, ToastContainer } from '@medly-components/core';
import Routes from '@routes';
import { store } from '@state';
import { ThemeProvider } from '@styled';
import { defaultTheme } from '@theme';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export const App: React.SFC = () => (
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <>
                <CssBaseline />
                <Router>
                    <PageLayout>
                        <ToastContainer position="top-end" />
                        <SideNav />
                        <Header />
                        <Routes />
                    </PageLayout>
                </Router>
            </>
        </ThemeProvider>
    </Provider>
);

export default hot(App);
