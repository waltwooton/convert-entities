# convertEntitites
This node.js app was developed to clean up an RSS node before exporting to a Mastodon account. It removes HTML entity codes when passed a string.

Usage:

  const convertEntities = require ("../convertEntities/convertEntities");
  var stringWithEntities = "&quot;blah-blah-blah&quot;"
  var cleanString = convertentities.convert(stringWithEntities);
