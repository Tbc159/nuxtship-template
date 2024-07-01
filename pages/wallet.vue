<script setup>
const url_api = `/data/wallets.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "landing",
});

const mandroid = defineModel("android", { default: true });
const mios = defineModel("ios", { default: true });
const mwindows = defineModel("windows", { default: true });
const mmacos = defineModel("macos", { default: true });
const mlinux = defineModel("linux", { default: true });
const mwebbrowser = defineModel("webbrowser", { default: false });
const mselfcustodial = defineModel("selfcustodial", { default: false });
const mcustodial = defineModel("custodial", { default: false });
const mcoincontrol = defineModel("coincontrol", { default: false });
const mopensource = defineModel("opensource", { default: false });

const attributiWallet = [
  {
    campo: "lightning",
    icona: "ph:lightning-fill",
    colore: "orange",
    titolo: "Lightning network",
    descrizione: "Supporta transazioni su Lightning Network",
  },

  // {
  //   campo: "per iniziare",
  //   icona: "bi:emoji-smile-fill",
  //   colore: "#D9B600",
  //   titolo: "Per iniziare",
  //   descrizione: "Wallet adatto ai principanti",
  // },
];

const wo_android = {
  campo: "Android",
  icona: "material-symbols:android",
  colore: "#A4C639",
  titolo: "Android",
  descrizione: "Disponibile l'app per cellulari Android",
};

const wo_ios = {
  campo: "iOS",
  icona: "ic:baseline-apple",
  colore: "black",
  titolo: "iOS",
  descrizione: "Disponibile l'app per iPhone e iPad",
};

const wo_windows = {
  campo: "Windows",
  icona: "mdi:microsoft-windows",
  colore: "#0078D4",
  titolo: "Windows",
  descrizione: "Disponibile l'app per Windows",
};

const wo_macos = {
  campo: "MacOS",
  icona: "iconoir:apple-imac-2021",
  colore: "#00C6FF",
  titolo: "MacOS",
  descrizione: "Disponibile l'app per mac",
};

const wo_linux = {
  campo: "Linux",
  icona: "teenyicons:linux-alt-solid",
  colore: "black",
  titolo: "Linux",
  descrizione: "Disponibile l'app per Linux",
};

const wo_webbrowser = {
  campo: "Web browser",
  icona: "mdi:web",
  colore: "blue",
  titolo: "Browser extension",
  descrizione: "App disponibile come estensione del Web browser",
};

const wo_selfcustodial = {
  campo: "selfcustodial",
  icona: "material-symbols:key-rounded",
  colore: "green",
  titolo: "Self custodial",
  descrizione: "L'utente ha il controllo delle proprie chiavi private",
};

const wo_custodial = {
  campo: "custodial",
  icona: "material-symbols:vpn-key-off",
  colore: "red",
  titolo: "Custodial",
  descrizione:
    "Le chiavi private sono gestite dal fornitore, l'utente non ha controllo diretto dei propri fondi",
};

const wo_coincontrol = {
  campo: "Coin Control",
  icona: "ph:hand-coins-thin",
  colore: "#181717",
  titolo: "coin control",
  descrizione: "Consente il controllo degli input della transazione",
};

const wo_opensource = {
  campo: "open source",
  icona: "mdi:github",
  colore: "#181717",
  titolo: "open source",
  descrizione: "Sono disponibili i sorgenti del programma",
};

const attributiWalletOpz = [
  wo_android,
  wo_ios,
  wo_windows,
  wo_macos,
  wo_linux,
  wo_webbrowser,
  wo_selfcustodial,
  wo_custodial,
  wo_coincontrol,
  wo_opensource,
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Wallet</template>
      <template v-slot:desc>Le applicazioni per gestire i tuoi fondi.</template>
    </LandingSectionhead>

    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div class="pt-8">
        <div v-for="item of data">
          <div class="flex items-center gap-1">
            <img :src="'/img/wallet/' + item.id + '.png'" class="w-6 h-6" />
            <div class="w-48">
              <NuxtLink :to="'/w/' + item.id" class="text-blue-600">
                {{ item.nome }}
              </NuxtLink>
            </div>
            <div v-for="att of attributiWallet">
              <WalletIcona :campo="item[att.campo]" :att="att" />
            </div>

            <div>
              <WalletIcona
                v-if="mandroid"
                :campo="item['Android']"
                :att="wo_android"
              />
            </div>

            <div>
              <WalletIcona v-if="mios" :campo="item['iOS']" :att="wo_ios" />
            </div>

            <div>
              <WalletIcona
                v-if="mwindows"
                :campo="item['Windows']"
                :att="wo_windows"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mmacos"
                :campo="item['MacOS']"
                :att="wo_macos"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mlinux"
                :campo="item['Linux']"
                :att="wo_linux"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mwebbrowser"
                :campo="item['Web browser']"
                :att="wo_webbrowser"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mselfcustodial"
                :campo="item['selfcustodial']"
                :att="wo_selfcustodial"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mcustodial"
                :campo="item['custodial']"
                :att="wo_custodial"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mcoincontrol"
                :campo="item['Coin Control']"
                :att="wo_coincontrol"
              />
            </div>

            <div>
              <WalletIcona
                v-if="mopensource"
                :campo="item['Coin Control']"
                :att="wo_opensource"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          class="text-2xl font-bold leading-7 sm:text-3xl sm:tracking-tight py-4 pt-8"
        >
          Legenda
        </h2>
        <div class="divide-y divide-gray-300/50">
          <WalletAttrdesc v-for="att of attributiWallet" :att="att" />

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="android" v-model="mandroid" />
            </div>
            <WalletAttrdsub :att="wo_android" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="ios" v-model="mios" />
            </div>
            <WalletAttrdsub :att="wo_ios" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="windows" v-model="mwindows" />
            </div>
            <WalletAttrdsub :att="wo_windows" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="macos" v-model="mmacos" />
            </div>
            <WalletAttrdsub :att="wo_macos" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="linux" v-model="mlinux" />
            </div>
            <WalletAttrdsub :att="wo_linux" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="webbrowser" v-model="mwebbrowser" />
            </div>
            <WalletAttrdsub :att="wo_webbrowser" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input
                type="checkbox"
                id="selfcustodial"
                v-model="mselfcustodial"
              />
            </div>
            <WalletAttrdsub :att="wo_selfcustodial" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="custodial" v-model="mcustodial" />
            </div>
            <WalletAttrdsub :att="wo_custodial" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="coincontrol" v-model="mcoincontrol" />
            </div>
            <WalletAttrdsub :att="wo_coincontrol" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="opensource" v-model="mopensource" />
            </div>
            <WalletAttrdsub :att="wo_opensource" />
          </div>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
