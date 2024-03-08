import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Moverlay from "./mOverlay";
import ToastProvider from "./toast";
import ToastComponent from "./toastComponent";

export default function MobileLayout({ props: children }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <ToastProvider>
            <Moverlay />
            <ToastComponent />
            <div className="py-2 px-2">{children}</div>
          </ToastProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
