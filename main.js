const bencode = require('bencode');
const crypto = require('crypto');

module.exports = function(object, secret, hash = 'sha512') {
	const string = bencode.encode(object);
	return crypto.createHmac(hash, secret).update(string).digest('hex');
};
