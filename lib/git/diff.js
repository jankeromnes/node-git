var Blob = require('./blob').Blob;

      // Unpack index reference
      parts = lines.shift().match(/^index ([0-9A-Fa-f]+)\.\.([0-9A-Fa-f]+) ?(.+)?$/);

      while(lines.length > 0 && !lines[0].match(/^diff/)) {

