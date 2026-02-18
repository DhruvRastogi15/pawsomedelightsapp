"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function AuthModal({ open, onOpenChange }:{ open:any, onOpenChange:any }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />

        {/* Modal */}
        <Dialog.Content
          className="
            fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[90%] max-w-4xl
            bg-orange-500
            rounded-2xl shadow-2xl
            grid grid-cols-1 md:grid-cols-2
            overflow-hidden
            z-50
          "
        >
          {/* LEFT SECTION */}
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">PAWSOME</h2>
            <p className="text-lg mb-8">
              Login now to avail best offers!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Customer-first",
                  desc: "Putting you in the center",
                },
                {
                  title: "Transparent",
                  desc: "Honest from the inside out",
                },
                {
                  title: "Innovative",
                  desc: "Getting the best for you",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-orange-400/60 rounded-xl p-4 text-center"
                >
                  <div className="text-xl mb-2">⭐</div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Login / Signup <br />
              <span className="text-sm text-gray-500">
                to get exciting offers!
              </span>
            </h3>

            <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
              <span className="mr-2">🇮🇳 +91</span>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full outline-none"
              />
            </div>

            <label className="flex items-center text-sm mb-4">
              <input type="checkbox" className="mr-2" />
              Notify me with offers & updates
            </label>

            <button className="bg-orange-500 text-white py-2 rounded-lg font-semibold">
              Submit
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to our{" "}
              <span className="underline">Privacy Policy</span> &{" "}
              <span className="underline">T&Cs</span>
            </p>
          </div>

          {/* Close Button */}
          <Dialog.Close className="absolute top-4 right-4 text-white text-xl">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
