#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const files = require("./files");

// Function to write files
async function createProject(projectName) {
  const projectPath = path.join(process.cwd(), projectName);

  try {
    console.log(`Creating project: ${projectName}...`);

    // Create project directory
    await fs.ensureDir(projectPath);

    // Write each file
    for (const [fileName, content] of Object.entries(files)) {
      const filePath = path.join(projectPath, fileName);
      await fs.outputFile(filePath, content.trim());
      console.log(`Created: ${fileName}`);
    }

    console.log("Installing dependencies...");
    process.chdir(projectPath);
    require("child_process").execSync("npm install", { stdio: "inherit" });

    console.log("Project setup complete! 🎉");
    console.log(
      `Navigate to the project folder and run:\n\n    cd ${projectName} && npm start`
    );
  } catch (error) {
    console.error("Error creating project:", error);
  }
}

const projectName = process.argv[2] || "express-app";
createProject(projectName);
