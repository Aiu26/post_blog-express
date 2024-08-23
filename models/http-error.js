class HttpError extends Error {
	constructor(message, errorCode) {
		super(message); // Calls the constructor of the parent class (Error)
		this.code = errorCode;
	}
}

module.exports = HttpError;
