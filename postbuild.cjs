const fs = require('fs');
const path = require('path');

const indexFilePath = path.resolve(__dirname, 'loader/index.d.ts');

// Read the current index.d.ts file
fs.readFile(indexFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading index.d.ts: ${err}`);
    return;
  }

  // Replace the incorrect path with the correct one
  const updatedData = data.replace(
    /export \* from '\.\.\/dist\/types\/components';/g,
    "export * from '../dist/types';"
  );

  // Write the updated content back to index.d.ts
  fs.writeFile(indexFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing updated index.d.ts: ${err}`);
    } else {
      console.log('Successfully updated loader/index.d.ts.');
    }
  });
});
