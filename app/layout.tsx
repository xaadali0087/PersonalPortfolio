// import type { Metadata } from "next";
import "./globals.scss";
// import { persistor, store } from "@/store/store";
// import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClickScrollToTop from "@/components/_Common/scrollToTop";
import ProgressBar from "@/components/_Common/progressBar";
// import { PersistGate } from "redux-persist/integration/react";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ProgressBar />
      <ClickScrollToTop />
      <ToastContainer theme='dark' />
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <body>{children}</body>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </html>
  );
}
