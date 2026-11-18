# PostHatch Studio

Public pre-launch website for an AI-assisted social media content service. This project is separate from Zelquiva.

## What's in this repository

- `website.tar.br` — compressed bundle containing all 16 public website files, including the homepage, styling, scripts, privacy template and eight original sample graphics.
- `scripts/unpack-website.cjs` — extracts the website bundle during Netlify builds.
- `netlify.toml` — tells Netlify how to build and publish the website.

The site bundle contains **no** private content-planning tool, contracts, credentials or customer information. The enquiry form is intentionally **disabled** and there is **no payment integration**.

## How to publish a preview

1. With a parent or guardian, open Netlify and choose **Add new project** → **Import an existing project** → **GitHub**.
2. Choose `hazzer584-art/Posthatch`.
3. Use the repository's `netlify.toml` build settings (build command: `node scripts/unpack-website.cjs`; publish directory: `website`).
4. Deploy and inspect the site. Do not enable the contact form or payments until the responsible adult/business operator has reviewed and completed the privacy information and business setup.

**Note:** Website files are bundled to make the first upload work through ChatGPT's GitHub connection. To edit individual HTML/CSS files in GitHub, extract them from the supplied public website ZIP and commit them under the `website/` directory, then remove the archive/build unpack step. Do not upload the `private-studio` folder into this public repository.
