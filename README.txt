# Render Blueprint (No AWS ECR)

## Steps
1. Create a new GitHub repo and add your project (ui/, api/, deploy/ ...). Commit & push.
2. Copy this `render.yaml` into the repo root and commit.
3. Go to https://dashboard.render.com -> New -> Blueprint -> connect your repo.
4. Press Deploy. It will build from the Dockerfiles (no ECR required).
5. After deploy, open the **API** service and copy its URL (e.g., https://kafaa-oe-api.onrender.com).
6. In the **UI** service -> Environment, set `NEXT_PUBLIC_API_BASE` to the API URL.
7. Optional: Add your custom domains. Ensure CSP frame-ancestors is okay (already set by nginx in UI Dockerfile).

Notes:
- The UI already serves CSP headers permitting TeamAssurance to embed through iframe.
- The API is reachable at NEXT_PUBLIC_API_BASE; no /api/ path routing is needed on Render.
