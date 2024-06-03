<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/a06.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        <span class="bg-orange-500">₿</span
        ><span class="bg-red-600">itcoin&nbsp;</span
        >&nbsp;Italia&nbsp;<span class="bg-green-500">&nbsp;Network&nbsp;</span>
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Benvenuti su
        Bitcoin Italia Network,<wbr />
        la piattaforma che connette e valorizza tutte le realtà italiane legate a Bitcoin.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/comunita"
          target="_blank"
          rel="noopener"
          >Comunità</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="/dove"
          target="_blank"
          >Dove</LandingLink
        >
      </div>
    </div>
  </main>
</template>
