const convert = (str) => {
	//adapted from https://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript/39243641#39243641
	try { 
		const heList = require('./htmlentities.json');
		return str.replace(/\&([^;]+);/g, function (entity, entitycode) {
			var match;
			if (entitycode in (heList)) {
				return (heList[entitycode]);
			} 
			else if (match = entity.match(/^#x([\da-fA-F]+)$/)) {
			   return String.fromCharCode(parseInt(match[1], 16));
			} 
			else if (match = entity.match(/^#(\d+)$/)) {
			   return String.fromCharCode(~~match[1]);
			} 
			else {
				return entity;
			}
		})
	}
	catch (err) {
		console.log(`Error reading htmlentities file from disk: ${err}`);
		return err;
	}
}
exports.convert = convert;
