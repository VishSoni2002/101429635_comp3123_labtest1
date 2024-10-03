const fs = require('fs').promises;
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

async function removeLogs() {
  try {
    // Check if the Logs directory exists
    const dirExists = await fs.access(logsDir).then(() => true).catch(() => false);

    if (dirExists) {
      const files = await fs.readdir(logsDir);

      // Delete each file in the Logs directory
      for (const file of files) {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${file}`);
        await fs.unlink(filePath);
      }

      // Remove the Logs directory after files are deleted
      await fs.rmdir(logsDir);
      console.log(`Logs directory removed.`);
    } else {
      console.log(`Logs directory does not exist.`);
    }
  } catch (error) {
    console.error(`Error while removing logs: ${error.message}`);
  }
}

removeLogs();
