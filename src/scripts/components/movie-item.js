/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-undef
class MovieItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  set hasDetail(hasDetail) {
    this._hasDetail = hasDetail;
    this.render();
  }

  render() {
    const truncate = (text, num) => {
      if (num > text.length) {
        return text;
      }
      const textCropped = text.substring(0, num);
      return `${textCropped}...`;
    };

    let detailHTML = '';

    if (this._movie) {
      if (this._hasDetail) {
        detailHTML = `
            <div class="mt-4 text-left">
                <p class="mt-1 text-sm text-gray-500">${this._movie.release_date}</p>
                <h3 class="text-sm font-medium text-gray-900">
                    <a href="#">${truncate(this._movie.title, 24)}</a>
                </h3>
                <p class="mt-1 text-xs font-light text-gray-500">${truncate(this._movie.overview, 100)}</p>
            </div>
        `;
      }

      this.innerHTML = `
            <div class="pb-4 group relative cursor-pointer">
                <div class="h-30 w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
                <img
                    src="https://image.tmdb.org/t/p/w500/${this._movie.backdrop_path}"
                    alt="Backdrop of ${this._movie.title}"
                    class="h-full w-full object-cover object-center"
                />
                </div>
                ${detailHTML}
            </div>
        `;
    } else {
      this.innerHTML = '<div class="pb-4 h-30 w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75"></div>';
    }
  }
}

// eslint-disable-next-line no-undef
customElements.define('movie-item', MovieItem);
