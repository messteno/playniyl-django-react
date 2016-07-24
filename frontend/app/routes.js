import App from './components/App';
import HomePage from './components/HomePage';

export default function createRoutes() {
    return {
        path: '/',
        component: App,
        indexRoute: {
            component: HomePage,
        },
        childRoutes: [],
    };
}

