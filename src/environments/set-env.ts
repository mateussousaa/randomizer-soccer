const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  const appVersion = require('../../package.json').version;
  require('dotenv').config({
    path: 'src/environments/.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  FOOTBALL_DATA_ORG_URL: '${process.env['FOOTBALL_DATA_ORG_URL']}',
  FOOTBALL_DATA_ORG_TOKEN: '${process.env['FOOTBALL_DATA_ORG_TOKEN']}',
  production: true,
};
`;
  console.log(
    'The file `environment.ts` will be written with the following content: \n'
  );
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
