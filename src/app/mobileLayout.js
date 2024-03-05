import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Moverlay from "./mOverlay";

export default function MobileLayout({ props: children }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <Moverlay />
          <div className="py-2 px-2">{children}</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
