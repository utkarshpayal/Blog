# Blog

A blogging web app built with React, Vite and [Appwrite](https://appwrite.io/). Users can sign up, log in, and create, edit and delete posts with a rich-text editor and a featured image. All app code lives in the [`blog/`](blog) directory.

## Features

- **Authentication** – sign up, log in and log out using Appwrite accounts; session state is kept in a Redux store.
- **Protected routes** – the All Posts, Add Post and Edit Post pages require login; Login and Signup are only shown to logged-out users.
- **Posts**
  - Create posts with a title, slug, rich-text content (TinyMCE editor), featured image and status (`active` / `inactive`).
  - Edit and delete posts – the Edit/Delete buttons are only shown to the post's author.
  - The home page and All Posts page list posts with status `active`.
  - Post content is rendered from HTML with `html-react-parser`.
- **Image uploads** – featured images are stored in an Appwrite Storage bucket and shown via file previews.

## Tech Stack

- React 18 + Vite 5
- Redux Toolkit + React Redux (auth state)
- React Router v6
- React Hook Form
- TinyMCE (`@tinymce/tinymce-react`) rich-text editor
- Appwrite Web SDK (Account, Databases, Storage)
- Tailwind CSS (with PostCSS + Autoprefixer)

## Project Structure

```
blog/
├── index.html
├── src/
│   ├── appwrite/      # auth.js (Appwrite Account) and config.js (posts DB + file storage)
│   ├── components/    # Header, Footer, PostForm, RTE editor, Login, Signup, inputs, etc.
│   ├── conf/conf.js   # Reads Appwrite settings from environment variables
│   ├── pages/         # Home, Login, Signup, AllPosts, AddPost, EditPost, Post
│   ├── store/         # Redux store and authSlice
│   ├── App.jsx
│   └── main.jsx       # Router setup
├── tailwind.config.js
└── vite.config.js
```

### Routes

| Path               | Page        | Requires login |
| ------------------ | ----------- | -------------- |
| `/`                | Home        | No             |
| `/login`           | Login       | Logged-out only |
| `/signup`          | Signup      | Logged-out only |
| `/all-posts`       | All Posts   | Yes            |
| `/add-post`        | Add Post    | Yes            |
| `/edit-post/:slug` | Edit Post   | Yes            |
| `/post/:slug`      | Single Post | Yes            |

## Prerequisites

- Node.js and npm
- An Appwrite project (Appwrite Cloud or self-hosted) with:
  - A database and a posts collection with the attributes `title`, `content`, `featuredImage`, `status` and `userId` (the post slug is used as the document ID)
  - A storage bucket for featured images
  - Permissions that allow logged-in users to create, read, update and delete documents/files (needs confirmation for exact permission setup)

## Setup

```bash
git clone https://github.com/utkarshpayal/Blog.git
cd Blog/blog
npm install
```

### Environment variables

Create a `.env` file in the `blog/` directory and set the following variables (read in `src/conf/conf.js`):

| Variable                      | Description                       |
| ----------------------------- | --------------------------------- |
| `VITE_APPWRITE_URL`           | Appwrite API endpoint             |
| `VITE_APPWRITE_PROJECT_ID`    | Appwrite project ID               |
| `VITE_APPWRITE_DATABASE_ID`   | Database ID                       |
| `VITE_APPWRITE_COLLECTION_ID` | Posts collection ID               |
| `VITE_APPWRITE_BUCKET_ID`     | Storage bucket ID for images      |

The TinyMCE editor is used without an API key in the code; TinyMCE Cloud may require one (needs confirmation).

## Scripts

Run these from the `blog/` directory:

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite development server        |
| `npm run build`   | Build for production into `dist/`        |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint (no ESLint config file is committed, so this may need one added first) |
