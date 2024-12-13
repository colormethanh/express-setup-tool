const files = {
  "index.js": `
    require('dotenv').config();
    const express = require('express');
        const app = express();
        const port = process.env.PORT || 3000;

        app.use(express.json());

        app.get('/', (req, res) => {
            res.send('Hello, Express!');
        });

        app.listen(port, () => {
            console.log(\`Server running at http://localhost:\${port}\`);
        });
      `,
  ".env": `
      PORT=3000\n
    `,
  "package.json": `{\n"name": "express-app",
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
          "start": "node index.js",
          "dev": "nodemon index.js"
        },
        "dependencies": {
            "dotenv": "^16.0.0",
            "express": "^4.18.2"
        },
        "devDependencies": {
          "nodemon": "^3.1.9"
        }
      }
    `,
  ".gitignore": `.env\n.env.*\nnode_modules/\nlogs\n*.log\nnpm-debug.log*\ndist/\nbuild/\n 
        `,
};

module.exports = files;
