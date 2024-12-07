import pluginReact from "eslint-plugin-react";

import pluginJs from "@eslint/js";
import perfectionist from 'eslint-plugin-perfectionist'
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "vite.config.ts",
      "mock",
      "src/components/Markdown",
      "src/components/Typer.tsx",
      "src/**/styles.ts",
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      perfectionist,
    },
    rules: {
      'indent': ['warn', 2],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'perfectionist/sort-imports': [
        'warn',
        {
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              react: ['react', 'react-*'],
            },
            type: {
              react: 'react',
            },
          },
          newlinesBetween: 'always',
        },
      ],
      'react/no-unknown-property': 'warn',
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
];