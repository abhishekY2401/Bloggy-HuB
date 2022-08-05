import React from "react";

function Topbar() {
  return (
    <div className="flex align-items-center justify-evenly bg-slate-800 p-5 border-b-2  ">
      <p className="font-bold text-white text-3xl">BloggY huB</p>

      <nav class="flex justify-center text-xl align-items-center space-x-4">
        <a
          href="/"
          class="font-600 px-3 py-1 text-gray-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
        <a
          href="/"
          class="font-600 px-3 py-1 text-gray-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Signup
        </a>
        <a
          href="/"
          class="font-600 px-3 py-1 text-gray-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Login
        </a>
      </nav>

      <div className="relative">
        <input
          type="search"
          placeholder="Search blogs.."
          className="block p-2 pl-6 w-full text-sm text-gray-90 rounded-3xl border outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />

        <div class="flex absolute inset-y-0 items-center left-40 rounded-lg pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-100 left-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
