const fs = require("fs");
const path = require("path");
const htmlMinifier = require("html-minifier");

function minifyHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    try {
      if (stat.isFile() && path.extname(filePath) === ".html") {
        const content = fs.readFileSync(filePath, "utf8");
        const minifiedContent = htmlMinifier.minify(content, {
          collapseWhitespace: true,
          removeComments: true,
        });
        fs.writeFileSync(filePath, minifiedContent, "utf8");
        console.log(`Minified file: ${filePath}`);
      } else if (stat.isDirectory()) {
        minifyHtmlFiles(filePath); // Rekursif untuk subdirektori
      }
    } catch (error) {
      console.log("file error: ", filePath);
    }
  }
}

minifyHtmlFiles("./localhost:8000"); // Mulai dari direktori saat ini
