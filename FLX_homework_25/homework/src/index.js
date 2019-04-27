import {store} from './store';

import App from './components/app';

import Search from './components/search.component';

import './style.scss';

/**
 * Render Search
 */
const search = new Search();
search.renderSearch();

/**
 * Actions
 *
 */
document.getElementById('root').addEventListener('click', dispatchActions);

function dispatchActions(e) {
    if (e.target.className === 'table__cell--remove') {
        store.dispatch({
            type: 'REMOVE',
            id: e.target.dataset.id
        });
    }
    if (e.target.className === 'load-more__action') {
        store.dispatch({
            type: 'MORE'
        });
    }
}

/**
 * Render store
 * @return {object}
 */
function main() {
    const app = new App(store.getState(), document.querySelector('.root'));
    document
        .querySelector('body')
        .addEventListener('keyup', () => app.filterUsers());
    return app.renderApp();
}

store.subscribe(main);

document.addEventListener('DOMContentLoaded', main);
