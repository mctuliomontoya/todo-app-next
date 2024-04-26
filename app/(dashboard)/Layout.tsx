import React from "react";
import Container from "../components/Container";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div>{children}</div>
    </React.Fragment>
  );
}

export default React.memo(Layout);
