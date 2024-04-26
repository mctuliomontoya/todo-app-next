import React from "react";
import Container from "../components/Container";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="bg-green-200 min-h-screen">{children}</div>
    </React.Fragment>
  );
}

export default React.memo(Layout);
