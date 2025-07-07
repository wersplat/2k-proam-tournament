# 2K ProAm Tournament

This is a React application built with RSbuild and deployed on Cloudflare Pages.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module replacement.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build locally for testing.

## Deployment to Cloudflare Pages

This project is configured to be deployed to Cloudflare Pages:

1. Push your code to a Git repository (GitHub/GitLab)
2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/)
3. Go to Pages > Create a project
4. Connect your Git provider and select your repository
5. Set the build settings:
   - Build command: `npm run build`
   - Build output directory: `build`
6. Click "Save and Deploy"

## Learn More

- [RSbuild Documentation](https://rsbuild.dev/)
- [React Documentation](https://reactjs.org/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
