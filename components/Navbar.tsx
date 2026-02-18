"use client";

import { useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar content */}
      {/* <button onClick={() => setOpen(true)}>
        Login
      </button> */}

      {/* Modal can live here */}
      <AuthModal open={open} onOpenChange={setOpen} />
    </>
  );
}
