# IT Job Recruitment Platform - Frontend

A recruitment website for candidates to find IT jobs and submit CVs, and for employers to publish jobs and review applications. This repository contains the Next.js frontend; the Express API is maintained separately.

**[Live website](https://it-job-frontend.onrender.com)** · **[Backend repository](https://github.com/HungTrinh30106/it-job-backend)**

## Features

- Responsive home page, company directory, company profiles and job details.
- Job search by keyword, technology, city and company, with position and working-form filters.
- URL-based filters and server-side pagination through the backend API.
- Candidate and employer registration, login, logout and profile forms.
- Employer job creation, editing and deletion, including images and rich-text descriptions.
- CV submission with a PDF file, candidate application history and CV details.
- Employer application review with viewed indicators, approval/rejection actions and deletion.
- Reusable job/company cards, pagination, file upload and editor components.

## Technology

| Area | Implementation |
| --- | --- |
| Framework | Next.js 16.3.5, App Router |
| UI | React 19.2.8, TypeScript, Tailwind CSS v4 |
| Data access | Fetch API; most data is loaded in client-side effects |
| Forms | JustValidate |
| Upload UI | React FilePond, image preview and file-type plugins |
| Editor and notifications | TinyMCE, Sonner |
| Authentication | JWT cookie requests to the backend, custom `useAuth` hook |

## Run locally

### Requirements

- Node.js compatible with Next.js 16 (`>=20.9.0`).
- Yarn Classic 1.x. The repository includes a `yarn.lock`; use Yarn consistently for this setup.
- The [IT Job backend](https://github.com/HungTrinh30106/it-job-backend) running on `http://localhost:4000`.
- A TinyMCE API key for the rich-text editor.

```bash
git clone https://github.com/HungTrinh30106/it-job-frontend.git
cd it-job-frontend
yarn install --frozen-lockfile
```

Create `.env.local` in the repository root:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_TINYMCE=your-tinymce-api-key
```

Both variables are used in the browser. Do not put database credentials, JWT secrets or Cloudinary API secrets in `NEXT_PUBLIC_*` variables.

Start the backend first, then run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Use `localhost` for both applications in local development, and set the backend's `FRONTEND_ORIGIN` to `http://localhost:3000`.

### Scripts

| Command | Purpose |
| --- | --- |
| `yarn dev` | Development server |
| `yarn build` | Production build |
| `yarn start` | Serve an existing production build |
| `yarn lint` | Run ESLint |

To run a production build locally, run `yarn build` followed by `yarn start`.

## Structure

```text
src/
  app/
    layout.tsx                 Shared header, footer and toast container
    globals.css                Tailwind and shared styles
    (pages)/
      (home)/                  Home page
      search/                  Job search and filters
      company/                 Public company pages and employer login/register
      job/detail/[id]/         Job details and application form
      company-manage/          Employer profile, jobs and applications
      user/                    Candidate login/register
      user-manage/             Candidate profile and application history
      logout/
    components/                Cards, navigation, pagination, upload and editor
  hooks/useAuth.ts             Retrieve the current account from /auth/check
  config/variable.ts           Position, working-form and CV status labels
  proxy.ts                     Cookie-presence check for management page routes
```

Parenthesized folders are route groups and do not appear in URLs. Dynamic page wrappers await `params` and pass IDs to client components. Pages using `useSearchParams` wrap the relevant content in `Suspense` for production prerendering.

## How the frontend and API work together

1. Search filters and pagination are stored in the page URL.
2. Client components request matching records from `NEXT_PUBLIC_API_URL`.
3. The backend returns JSON containing data and pagination metadata.
4. Login and management requests use `credentials: "include"` for cookie authentication.
5. Forms send JSON or `FormData`; uploaded media is stored by the backend on Cloudinary.

CV submission is currently a public API operation. The application is associated with a candidate account by email, rather than an authenticated `userId`.

## Deployment

The frontend is deployed as a Render Web Service:

| Setting | Value |
| --- | --- |
| Build command | `yarn install --frozen-lockfile && yarn build` |
| Start command | `yarn start` |
| `NEXT_PUBLIC_API_URL` | `https://it-job-backend-wmk5.onrender.com` |

Set the TinyMCE public key in Render as well. `NEXT_PUBLIC_*` values are embedded at build time, so changing the API URL requires a rebuild.

## Demo scope and current limitations

- Render Free services can sleep when idle. Allow time for both frontend and backend to wake, then reload if the first API request fails.
- Public company data was checked after deployment. The complete signed-in workflow has not been verified on the separate Render hosts.
- `proxy.ts` checks for a cookie on the frontend host, while the API sets a host-only cookie on the backend host. Hosted management navigation needs a shared-origin/reverse-proxy or session-routing adjustment; use the local setup for reviewing the current authenticated workflows.
- Loading, empty/error states, API typing and form validation lifecycle still have room for improvement. `Suspense` does not itself track requests made inside `useEffect`.
- There is no automated test suite configured in this repository.

## Project context

An educational portfolio project maintained by [Trịnh Gia Hưng](https://github.com/HungTrinh30106). Frontend and backend form one product, with separate repositories for each application. The implementation is intended to demonstrate web development fundamentals and remains under improvement.
