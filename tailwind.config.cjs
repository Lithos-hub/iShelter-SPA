/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	safelist: [
		{
			pattern:
				/^(bg|text|border)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
		},
	],
	theme: {
		extend: {
			colors: {
				primary: {
					1: '#fc4b6c',
				},
				secondary: {
					1: '#fb9778',
					2: '#fbe5e1',
					3: '#c0341d',
				},
				black: '#0f172a',
				state: {
					info: '#4cb8fc',
					warning: '#fcb84c',
					error: '#fc4c4c',
					success: '#76db82',
				},
			},
		},
	},
	plugins: [],
};
