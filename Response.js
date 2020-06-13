class Response {
  constructor(data) {
    this.success = true;
    this.data = data;
    this.errors = [];
  }
  addError(err) {
    this.errors.push(err);
    this.success = false;
  }
}

module.exports = Response;