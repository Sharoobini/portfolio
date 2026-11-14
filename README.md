# Sharoobini — Portfolio

Personal portfolio of Raja Annadurai Sharoobini, built with React, TypeScript, Vite and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build into build/
```

## Edit the content

Almost everything shown on the site lives in two files:

- `src/data.ts` — profile, hero numbers, projects, case studies, publications, experience, education
- `src/tools.ts` — the logos in the toolbox

Photos are in `src/assets/` (`sharoobini-portrait.webp`, `thesis.webp`) and project screenshots in `src/assets/projects/`.
A project without a screenshot shows a lettered tile; add an `image` to its entry in `projectLibrary` to replace it.

## Deploy

Vercel: framework preset Vite, build command `npm run build`, output directory `build`.
