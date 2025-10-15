import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 border-t">
      &copy; {new Date().getFullYear()} Akinwunmi Opemipo. All rights reserved.
    </footer>
  );
}
