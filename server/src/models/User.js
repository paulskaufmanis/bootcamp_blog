class User {
    #data;
    constructor(data) {
        this.#data = Object.assign({}, data, {
            dateCreated: this._dateCreated(),
            // initials: this._initialsCreated(data),
        })
    }

    _dateCreated() {
        
    }

    _initialsCreated(data) {

    }
}

module.exports = User;