import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

import './style/normalize.scss';
import App from './App.jsx';

const queryClient = new QueryClient();
ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <HashRouter>
                <App />
            </HashRouter>
        </QueryClientProvider>
    </Provider>,

    document.getElementById('root')
);
