const fs = require("fs");
const path = require("path");

function deleteMatchingFolders(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file.includes("?")) {
        console.log(`Menghapus direktori: ${filePath}`);
        fs.rmSync(filePath, { recursive: true });
      } else {
        deleteMatchingFolders(filePath); // Rekursif untuk subdirektori
      }
    }
  }
}

// Jalankan fungsi dari direktori saat ini
deleteMatchingFolders("./localhost:8000");
