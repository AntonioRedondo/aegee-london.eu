import js from "@eslint/js";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.es2015,
				...globals.node,
				init: true,
				ga: true,
				d: true,
				skrollr: true,
				YT: true
			}
		}
	},
	{
		files: ["**/*.js"],
		ignores: ["docs/**"], // This doesn't work. --ignore pattern "docs" is neccessary in the CLI
		// plugins: {
		// },
		rules: {
			"comma-dangle": [2, "only-multiline"], // Deprecated
			"eol-last": 2, // Deprecated
			"indent": [2, "tab", { "SwitchCase": 1 }], // Deprecated
			"quotes": [2, "double"], // Deprecated
			"jsx-quotes": 2, // Deprecated
			"no-console": 1,
			"no-debugger": 1,
			"no-trailing-spaces": [2, { "skipBlankLines": true }], // Deprecated
			"no-var": 0,
			"no-alert": 1,
			"no-lone-blocks": 1,
			"object-curly-spacing": [2, "always"], // Deprecated
			"semi": [1, "always"],  // Deprecated
			"space-before-function-paren": [2, "never"] // Deprecated
		}
	}
];
