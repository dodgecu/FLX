class Search {
    renderSearch() {
        const header = document.createElement('header');
        header.innerHTML = `
            <header class='header'>
            <form class='user-search'>
                <label class='user-search__label' for='search'>
                    Search by name:
                    </label>
                    <input
                    type='text'
                    id='search'
                    placeholder='Enter username'
                    class='user-search__input'
                />
            </form>
            </header>`;
        document.querySelector('body').appendChild(header);
    }
}

export default Search;
