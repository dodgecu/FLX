class LoadMore {
    renderMore(users) {
        const disabled = 'disabled';

        return `
          <div class="load-more">
              <p class="load-more__filtermsg">
                Displayed 
                <span class="load-more__filtermsg--current">
                  ${users}
                </span> users out of <span class="load-more__filtermsg--current">
                  ${users}
                </span>
              </p>
              <button type="text" class="load-more__action" ${users <= 0 ? disabled : null}>
                Load more
              </button>
          </div>`;
    }
}

export default LoadMore;
