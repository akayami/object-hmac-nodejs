var bencode = require('bencode-js');
var crypto = require('crypto');

module.exports = function(object, secret, hash) {
	if(!hash) {
		hash = 'sha256';
	}
	var string = bencode.encode(object);
	return crypto.createHmac(hash, secret).update(string).digest('hex');
}
