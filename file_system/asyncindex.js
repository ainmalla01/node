const fs = require('fs').promises;

async function readAndWriteFile() {
    try {
        const data = await fs.readFile('./user.txt', 'utf-8');
        console.log("User data:", data);

        const newData = "I am a web developer";
        await fs.writeFile('./user.txt', newData);
        console.log("Writing data:", newData);
    } catch (err) {
        console.error("Error:", err);
    }
}

readAndWriteFile();
