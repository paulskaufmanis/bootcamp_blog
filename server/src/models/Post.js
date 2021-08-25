class Post {
  #data;
  constructor(data) {
    this.#data = Object.assign({}, data, {
      // username: this._getUsername(data),
      // slug: this._getSlug(data),
      dateCreated: this._dateCreated(),
    });
  }

  getData() {
    return this.#data;
  }

  _getSlug(data) {}

  _dateCreated() {
    const d = new Date();
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  }

  _getUsername({ id, created_by }) {
    return `${id}_${created_by}`;
  }
}

module.exports = Post;
