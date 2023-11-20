# RCD Mart

Welcome to the project. A full-stack e-commerce app with latest technologies and best practices.

## Installation

Clone the project

```bash
  git clone https://github.com/rabius-sunny/rcd-mart
```

Go to the project directory

```bash
  cd rcd-mart
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```

## Color Reference

| Color     | Hex                                                              |
| --------- | ---------------------------------------------------------------- |
| Primary   | ![#e11d48](https://via.placeholder.com/20/e11d48?text=+) #e11d48 |
| Secondary | ![#4f46e5](https://via.placeholder.com/20/4f46e5?text=+) #4f46e5 |
| Success   | ![#34d399](https://via.placeholder.com/20/34d399?text=+) #34d399 |

## Coding Styles

Follow the importing serial, it should be automatically formatted with prettier.

    1. react modules imports
    2. nextjs modules imports
    3. third party modules imports
    4. types, config, lib, hooks modules imports
    5. component modules imports
    6. styling modules imports
    7. others modules imports

#### Component Structure

```tsx
// local types and interface here...

export default function CompName() {
  // states here...
  // hooks here...
  // functions here...

  return <div>Component here...</div>
}

// component specific static variables here...
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.
(variables will be added)

## Tech Stack

**Client:** `NextJs v14`, `Typescript`

**Backend:** `NextJs api & server action`

**UI:** `Shadcn-ui`, `tailwindcss`

**Animation:** `framer-motion`

**Lint:** `eslint`, `prettier`

**Validation:** `zod`

## Authors & Collaborator

- [@rabius-sunny](https://github.com/rabius-sunny)
- [@Feroz-samima](https://github.com/Feroz-samima)
