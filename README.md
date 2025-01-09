# Preact-Issue

Project showing an issue in Preact

## Steps to reproduce

1. Clone this repository
2. Run `bun install`
3. Run `bun run dev` (this should work)
4. Press `Ctrl + C` to stop the server
5. Go to branch `not_working` by running `git checkout not_working`
6. Run `bun install`
7. Run `bun run dev` (this should not work, it will freeze)

## Description

The page is freezing when we move from `preact@10.24.3` to `preact@10.25.0` when using [Mantine Select component](https://mantine.dev/core/select/) or [Mantine Segmented Control component](https://mantine.dev/core/segmented-control/) (only some components are freezing the page).

Version of bun: `1.1.43`.

Content of `package.json`:

```json
{
	"name": "vite-project",
	"private": true,
	"version": "0.0.0",
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "tsc -b && vite build",
		"lint": "eslint .",
		"preview": "vite preview"
	},
	"dependencies": {
		"@mantine/core": "7.15.3",
		"@mantine/hooks": "7.15.3",
		"@preact/signals": "2.0.0",
		"preact": "10.24.3",
		"react": "npm:@preact/compat",
		"react-dom": "npm:@preact/compat"
	},
	"devDependencies": {
		"@eslint/js": "^9.17.0",
		"@types/react": "^18.3.18",
		"@types/react-dom": "^18.3.5",
		"@vitejs/plugin-react": "^4.3.4",
		"eslint": "^9.17.0",
		"eslint-plugin-react-hooks": "^5.0.0",
		"eslint-plugin-react-refresh": "^0.4.16",
		"globals": "^15.14.0",
		"typescript": "~5.6.2",
		"typescript-eslint": "^8.18.2",
		"vite": "^6.0.5"
	}
}
```
