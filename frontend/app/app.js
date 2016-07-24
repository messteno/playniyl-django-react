import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import createStore from './store';
import createRoutes from './routes';

const store = createStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.get('router'),
});

const routes = createRoutes(store);

if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
}

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            routes={routes}
        />
    </Provider>,
    document.getElementById('playvinyl')
);

