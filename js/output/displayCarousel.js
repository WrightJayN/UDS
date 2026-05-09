// js/output/displayCarousel.js

class DisplayCarousel {

    static #currentIndex = 0;
    static #photos = [];

    static render(photos, containerId) {
        if (!photos || photos.length === 0) return;

        DisplayCarousel.#photos = photos;
        DisplayCarousel.#currentIndex = 0;

        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="carousel">
                <div class="carousel-image-wrap">
                    <button class="carousel-btn carousel-prev" aria-label="Previous">&#8592;</button>
                    <img class="carousel-img" src="${photos[0].src}" alt="${photos[0].caption}">
                    <button class="carousel-btn carousel-next" aria-label="Next">&#8594;</button>
                </div>
                <p class="carousel-caption">${photos[0].caption}</p>
                <div class="carousel-dots">
                    ${photos.map((_, i) => `<span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                </div>
            </div>
        `;

        container.querySelector('.carousel-prev').addEventListener('click', () => DisplayCarousel.#go(-1, container));
        container.querySelector('.carousel-next').addEventListener('click', () => DisplayCarousel.#go(1, container));
        container.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => DisplayCarousel.#goTo(Number(dot.dataset.index), container));
        });

        // Hide arrows if only one photo
        if (photos.length === 1) {
            container.querySelector('.carousel-prev').style.display = 'none';
            container.querySelector('.carousel-next').style.display = 'none';
        }
    }

    static #go(direction, container) {
        const total = DisplayCarousel.#photos.length;
        DisplayCarousel.#currentIndex = (DisplayCarousel.#currentIndex + direction + total) % total;
        DisplayCarousel.#update(container);
    }

    static #goTo(index, container) {
        DisplayCarousel.#currentIndex = index;
        DisplayCarousel.#update(container);
    }

    static #update(container) {
        const i = DisplayCarousel.#currentIndex;
        const photo = DisplayCarousel.#photos[i];
        container.querySelector('.carousel-img').src = photo.src;
        container.querySelector('.carousel-img').alt = photo.caption;
        container.querySelector('.carousel-caption').textContent = photo.caption;
        container.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === i);
        });
    }
}

export { DisplayCarousel };