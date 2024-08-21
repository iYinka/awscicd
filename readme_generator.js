// generate_readme.js

const fs = require("fs");

const generateReadme = () => {
    const readmeContent = `
    # Project Title

    A brief description of what this project does and who it's for.

    ## Installation

    Instructions for how to install and use this project.

    \`\`\`bash
    npm install project-name
    \`\`\`

    ## Usage

    Examples of how to use the project.

    \`\`\`javascript
    const project = require('project');

    // Example usage
    project.run();
    \`\`\`

    ## Contributing

    Guidelines for contributing to this project.

    ## License

    Information about the project's license.
    `;

    fs.writeFileSync("README.md", readmeContent.trim());
};

generateReadme();
