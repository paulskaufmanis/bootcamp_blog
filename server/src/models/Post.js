class Post {
    #data;
    constructor(data) {
        this.#data = Object.assign({}, data, {
            slug: this._getSlug(data),
            dateCreated: this._dateCreated(),
        })
    }

    _getSlug(data) {

    }

    _dateCreated() {

    }
}

module.exports = Post;