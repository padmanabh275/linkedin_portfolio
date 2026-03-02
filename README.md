# Padmanabh LinkedIn Portfolio

A modern, high-impact personal website built with Next.js, designed in an **enterprise meets edgy** style and powered by an AI **Digital Twin** assistant.

## Highlights

- Premium one-page portfolio experience
- Personalized profile content from LinkedIn export
- Career journey timeline and core skills section
- Future-ready portfolio/case-study placeholders
- AI chat assistant ("Digital Twin") backed by OpenRouter

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- OpenRouter Chat Completions API
- Model: `nvidia/nemotron-3-nano-30b-a3b:free`

## Repository Structure

- `linkedin-portfolio/` - main Next.js application
- `linkedin.pdf` - source profile document used for personalization
- `.env` - local secrets (not committed)

## Local Setup

1. Go to the app:
   - `cd linkedin-portfolio`
2. Install dependencies:
   - `npm install`
3. Ensure API key is available in `../.env`:
   - `OPENROUTER_API_KEY=your_key_here`
4. Run development server:
   - `npm run dev`
5. Open:
   - `http://localhost:3000`

## Digital Twin API

- Frontend chat UI calls: `POST /api/digital-twin`
- Server route file:
  - `linkedin-portfolio/src/app/api/digital-twin/route.ts`
- Chat component file:
  - `linkedin-portfolio/src/components/digital-twin-chat.tsx`

## Notes

- This project is set up for iterative portfolio expansion.
- Add project links in the portfolio section as case studies are published.
