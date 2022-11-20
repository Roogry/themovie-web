/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
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
    if (this._movie) {
      this.innerHTML = `
        <section id="section-hero" class="relative">
            <div class="absolute left-0 right-0 bottom-0 pt-10 pb-10 px-6 bg-gradient-to-b from-transparent to-zinc-900 sm:px-10 lg:px-16">
                <div class="w-full md:w-[28rem] text-white text-left">
                    <h1 class="text-2xl font-bold md:text-4xl">${this._movie.title}</h1>
                    <p class="mt-3 opacity-70 text-xs md:text-sm">
                        ${this._movie.release_date}
                    </p>
                    <p class="mt-2 opacity-90 font-light text-base leading-6 md:text-md">
                        ${truncate(this._movie.overview, 200)}
                    </p>
                
                    <div class="mt-3 inline-block rounded-md shadow">
                        <a
                        href="#"
                        class="inline-block rounded-md border bg-white px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-200"
                        >More Info</a
                        >
                    </div>
                </div>
            </div>
            <img
                class="min-h-screen w-100 m-30 object-cover"
                src="https://www.themoviedb.org/t/p/original/${this._movie.backdrop_path}"
                alt="${this._movie.title}"
            />
        </section>
    `;
    } else {
      this.innerHTML = `
        <section id="section-hero" class="relative">
        <div class="absolute left-0 right-0 bottom-0 pt-10 pb-10 px-6 bg-gradient-to-b from-transparent to-zinc-900 sm:px-10 lg:px-16">
            <div class="w-full md:w-[28rem]">
                <div class="w-full opacity-50 h-3 bg-gray-400"></div>
                <div class="mt-3 opacity-30 w-full h-2 bg-gray-400"></div>
                <div class="mt-2 opacity-40 w-full h-12 bg-gray-400"></div>
                <div class="mt-3 opacity-70 w-32 h-10 rounded-md bg-gray-400"></div>
            </div>
        </div>
        <div class="min-h-screen w-100 m-30 object-cover bg-slate-900"></div>
        </section>
        `;
    }
  }
}

customElements.define('hero-section', HeroSection);
