# convertentities
This node.js app was developed to clean up an RSS node with HTML within CDATA blocks before exporting to a Mastodon account. It removes HTML entity codes when passed a string.

Usage:

  const convertEntities = require ("../convertEntities/convertEntities");

  var stringWithEntities = "\&quot;blah-blah-blah\&quot;"

  var cleanString = convertentities.convert(stringWithEntities);
