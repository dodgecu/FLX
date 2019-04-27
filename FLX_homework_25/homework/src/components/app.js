import LoadMore from './loadMore.component';
import User from './user.component';

class App {
    constructor(state, loadInto) {
        this.state = state;
        this.root = loadInto;
        this.users = this.state.data.slice(0, this.state.limit);
        this.loadMore = new LoadMore();
        this.user = new User();
        this.notFound = `
                    <tr class='no-user'>
                      <td colspan="7">
                        <h3 class="no-user__msg">
                          No user has been found
                        </h3>
                      </td>
                    </tr>`;
        this.head = () => {
            return `
              <thead class="table__head">
                <tr class="table__row--head">
                  <th class="table__title">Photo</th>
                  <th class="table__title">Name</th>
                  <th class="table__title">Address</th>
                  <th class="table__title">Email</th>
                  <th class="table__title">Phone Number</th>
                  <th class="table__title">Timezone</th>
                  <th class="table__title">Actions</th>
                </tr>
              </thead>`;
        };
    }

    renderApp() {
        this.root.innerHTML = `
          <table class='table'>  
            ${this.head()}
            <tbody class='table__body'>
              ${this.state.limit > 0 ? this.user.renderUser(this.users) : this.notFound}
            </tbody>
          </table>
      ${this.loadMore.renderMore(this.state.limit)}
    `;
    }

    filterUsers() {
        const table = document.querySelector('.table__body');
        const search = document.querySelector('.user-search__input');
        const filteredUsers = this.users.filter((user) =>
            user.name.toLowerCase().includes(search.value.toLowerCase())
        );
        document.querySelector('.load-more__filtermsg--current').innerHTML =
            filteredUsers.length;
        if (filteredUsers.length <= 0) {
            table.innerHTML = this.notFound;
        } else {
            let output = '';
            for (let user of filteredUsers) {
                output += this.user.renderUser([user]);
            }
            table.innerHTML = output;
        }
    }
}

export default App;
