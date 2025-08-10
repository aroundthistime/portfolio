import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import colors from 'colors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '../');

const CONTENT_DB_PATH = 'src/constants/contentDB/**/*.ts';
const PUBLIC_PATH = path.join(PROJECT_ROOT, 'public');

const findStaticResourcePaths = (content: string): string[] => {
  const urlRegex = /['"](\/[^'"]+)['"]/g;
  const matches = content.match(urlRegex);
  if (!matches) {
    return [];
  }
  return matches.map((match) => match.slice(1, -1));
};

const validateResourcePaths = async () => {
  const files = await glob(CONTENT_DB_PATH, { cwd: PROJECT_ROOT });

  const staticResourcePaths = files.flatMap((file) => {
    const filePath = path.join(PROJECT_ROOT, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    return findStaticResourcePaths(content);
  });

  const missingStaticResourcePaths = staticResourcePaths.filter(
    (resourcePath) => !fs.existsSync(path.join(PUBLIC_PATH, resourcePath)),
  );

  if (!missingStaticResourcePaths.length) {
    console.log(colors.green('✅ All static resource paths are valid.'));
  } else {
    missingStaticResourcePaths.forEach((resourcePath) => {
      console.error(
        colors.red(`❌ Resource not found for path "${resourcePath}". Expected at "${path.join(
          PUBLIC_PATH,
          resourcePath,
        )}"`),
      );
    });
    process.exit(1);
  }
};

validateResourcePaths();
