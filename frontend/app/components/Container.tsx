import React from "react";
export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="bg-red-100 "> {children} </div>;
}
