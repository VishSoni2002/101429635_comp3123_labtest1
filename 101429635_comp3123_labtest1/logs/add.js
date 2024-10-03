const fs = require('fs').promises;
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

async function createLogs() {
  try {
    // Check if Logs directory exists, if not create it
    try {
      await fs.access(logsDir);
      console.log('Logs directory already exists.');
    } catch (error) {
      await fs.mkdir(logsDir);
      console.log('Logs directory created.');
    }

    // Change the current working directory to Logs
    process.chdir(logsDir);

    // Create 10 log files asynchronously
    for (let i = 1; i <= 10; i++) {
      const fileName = `log${i}.txt`;
      await fs.writeFile(fileName, `This is log file ${i}`);
      console.log(`Created file: ${fileName}`);
    }
  } catch (error) {
    console.error(`Error creating logs: ${error.message}`);
  }
}

createLogs();
