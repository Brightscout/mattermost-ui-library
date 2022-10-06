// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fs = require('fs');

const fileHeaders =
	'/* Auto generated using scripts/generateIconMap.js */\n' +
	'/* eslint-disable @typescript-eslint/no-unsafe-assignment */\n';

/**
 * Generate the icon map based on icons in assets
 * @returns Content of the icon map file
 */
const generateIconMapContent = () => {
	// Import statements
	let importContent = '';
	// Export Statements
	let exportContent = '';

	// Get all the icon file paths
	fs.readdirSync('src/assets/icons/').forEach((file) => {
		// Get the component name in Pascal case and remove the .svg extension
		const componentName = file
			.split('.')[0]
			.split('_')
			.map((name) => name[0].toUpperCase() + name.substring(1))
			.join('');
		importContent += `import { ReactComponent as ${componentName} } from '@Assets/icons/${file}';\n`;
		exportContent += `\t${componentName},\n`;
	});

	exportContent = 'export default {\n' + exportContent + '};\n';
	return importContent + '\n' + exportContent;
};

fs.writeFileSync(
	'src/components/Icon/Icon.map.ts',
	fileHeaders + generateIconMapContent()
);
