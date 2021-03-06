class User {
  #data;
  constructor(data) {
    this.#data = Object.assign({}, data, {
      initials: this._getInitials(data),
      // slug: this._getSlug(data),
      // dateCreated: this._dateCreated(),
    });
  }

  getData() {
    return this.#data;
  }

  _getSlug(data) {}

  _dateCreated() {
    return Date.now();
  }

  _getInitials({ name, surname }) {
    return `${name.charAt(0)}${surname.charAt(0)}`;
  }
}

module.exports = User;
