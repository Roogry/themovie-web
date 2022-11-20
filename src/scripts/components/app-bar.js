/* eslint-disable no-undef */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="bg-gray-800 transition-colors ease-in-out duration-500 md:bg-transparent">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button
                    id="toggle-mobile-menu"
                    type="button"
                    class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="ham-icon h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                <svg
                    class="close-icon hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                <img
                    class="nav-logo block h-8 w-auto"
                    src="#"
                    alt="Themovie Web"
                />
                </div>
                <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                    <a
                        href="#section-hero"
                        class="nav-item bg-gray-900 text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                        aria-current="page"
                        >Home</a
                    >
                    <a
                        href="#section-trending"
                        class="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Trending</a
                    >
                    <a
                        href="#section-movies"
                        class="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Movies</a
                    >
                    <a
                        href="#section-series"
                        class="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Series</a
                    >
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="hidden sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
            <a
                href="#section-hero"
                class="nav-item-mobile bg-gray-900 text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                aria-current="page"
                >Home</a
            >
            <a
                href="#section-trending"
                class="nav-item-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >Trending</a
            >
            <a
                href="#section-movies"
                class="nav-item-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >Movies</a
            >
            <a
                href="#section-series"
                class="nav-item-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >Series</a
            >
            </div>
        </div>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
