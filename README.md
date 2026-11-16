# ionic-test1
Testing ionic framework by ego

## Live demo (GitHub Pages)

Both apps are deployed to a single GitHub Pages site:

| App | URL |
| --- | --- |
| Sidemenu (`ionic-angular-web-ios-android-sidemenu-test`) | https://ephie.github.io/ionic-test1/ |
| Tabs (`ionic-angular-web-tabs-test`) | https://ephie.github.io/ionic-test1/tabs/ |

- Open the link in any browser; no install needed.
- It redeploys automatically on every push to `main` via `.github/workflows/deploy-pages.yml`. You can also run it manually from the repo's **Actions** tab (**Deploy to GitHub Pages** > **Run workflow**).
- Pages must use **Settings > Pages > Source: GitHub Actions**.

## Native apps and test API

- Backend: `cd backend/TestApi && dotnet run` (listens on `http://0.0.0.0:5183`; endpoints `/api/items`, `/api/items/{id}`, `/api/contacts`). The Neal page lists them.
- Native projects (in the sidemenu app folder): `npm run build && npx cap sync`, then `npx cap open android` or `npx cap open ios` (iOS needs macOS + Xcode). The Android emulator reaches the backend at `10.0.2.2`.
