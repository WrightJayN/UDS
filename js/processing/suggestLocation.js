import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.mjs'

class SuggestLocation {
  constructor(inputEl, suggestionsEl, allItems) {
    this.input = inputEl;
    this.list = suggestionsEl;
    this.fuse = new Fuse(allItems, {
      includeScore: true,
      shouldSort: true,
      threshold: 0.4,
      keys: ["displayName", "abbreviation"]
    });

    this.input.addEventListener('input', () => this.onInput());
    document.addEventListener('click', e => this.hideIfOutside(e));
  }

  onInput() {
    const q = this.input.value.trim();
    if (!q) {
      this.hide();
      return;
    }

    const results = this.fuse.search(q);
    const top = results.slice(0, 10).map(r => r.item);

    this.show(top);
  }

  show(items) {
    this.list.innerHTML = '';
    if (items.length === 0) {
      this.hide();
      return;
    }

    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.displayName;
      li.onclick = () => {
        this.input.value = item.displayName;
        this.hide();
      };
      this.list.appendChild(li);
    });

    this.list.style.display = 'block';
  }

  hide() {
    this.list.style.display = 'none';
  }

  hideIfOutside(e) {
    if (this.input.contains(e.target) || this.list.contains(e.target)) return;
    this.hide();
  }
}

export { SuggestLocation }