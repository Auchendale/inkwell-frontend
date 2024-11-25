<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->

# InkWell

A web application that allows users to view, write, send letters to friends, users can sort and filter by categories. Built with Next and Axios, this project demonstrates dynamic content fetching from a backend API.

## Table of Contents

Project Overview
Requirements
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing

## Project Overview

This application displays a collection of articles, allowing users to sort and filter them by different criteria such as date, comment count, and votes. Users can also filter articles by categories, add comments, upvote articles, and delete their comments.

## Features

`View Letters`: Browse letters stored on the platform.
`Write Letters`: Compose personalized letters with ease.
`Send Letters`: Share your messages with friends directly through the application.
`Filter & Sort`: Organize letters by various categories to quickly find what you need.
`Dynamic Content Fetching`: Fetch data from the backend API in real-time for an interactive experience.

## Requirements

Before you install and run the project, make sure you have the following requirements met:

Node.js: v22.6.0 or higher
npm: v10.8.3 or higher
Backend API: A running backend API endpoint for fetching and managing article and comment data.
If you don't have Node.js and npm installed, you can download them from Node.js official website(`https://nodejs.org/en`).

## Technologies Used

`Frontend`: Next.js, tailwindCSS
`HTTP Client`: Axios
`Backend`: REST API (`backend link here`)

# Installation

## Clone the repository:

`git clone https://github.com/Auchendale/inkwell-frontend.git`
`cd inkwell-frontend`

## Install dependencies:

`npm install`

## Start the development server:

`npm run dev`
The app should now be running on `http://localhost:3000`.

## Usage

1. On the home page, select a login or signup to navigate to the following page.
2. you can choose to view user dashboard or write a new letter on bulletin page.
3. you can write and send a letter to your friends in `letter page`
4. In the article view, you can add a comment or delete your own comments.
5. Use the vote button to upvote the article.

## API Endpoints

Replace `BASE_URL` with the actual API base URL.

Fetch Users: `GET /api/users`
Fetch Single user: `GET /api/users/:username`
Fetch Single letter: `GET /api/letters/:letter_id`
Post/send a letter : `POST /api/letters`
Fetch posts: `GET /api/posts`
Fetch single post: `GET /api/posts/:post_id`

`add more`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit them.
4. Push to the branch: git push origin feature-name.
5. Submit a pull request.

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
