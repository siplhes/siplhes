<template>
  <nav class="navbar bg-base-100 shadow-sm mb-4">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Siplhes</a>
    </div>
    <!--  <ThemeChanger />-->
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          width="24px"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            width="24px"
            height="24px"
            stroke-linecap="round"
            fill="#fefffa"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="grid grid-flow-col mx-auto gap-2">
      <Icon name="uil:github" class="text-[#fefffa] text-4xl" />
      <Icon name="uil:linkedin" class="text-[#fefffa] text-4xl" />
    </div>
  </nav>
</template>
