<template>
  <!-- Bait invisibile per ad-block -->
  <div ref="adBait" class="ad-bait"></div>

  <div class="ad-banner-wrapper mx-auto my-1 max-w-[800px]">
    <template v-if="!adBlocked">
      <div class="ad-label text-xs uppercase text-neutral">
        Advertisement
      </div>

      <div class="ad-content border border-base-200 rounded-lg bg-base-100 p-4 flex flex-col items-center">
        <template v-if="ad.image_url && (ad.id || ad.link)">
          <a
            :href="clickHref"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full"
            :data-umami-event="'Ad: Click Banner'"
            :data-umami-event-id="ad?.id"
          >
            <img
              :src="adImageUrl"
              :alt="ad.alt || `Banner #${ad.id || ''}`"
              class="w-full object-contain rounded-md shadow-sm hover:opacity-90 transition-opacity"
            />
          </a>
        </template>
        <template v-else>
          <div class="text-center py-8 text-base-content">
            Banner pubblicitario
          </div>
        </template>
      </div>
    </template>

    <template v-else>
      <div class="ad-placeholder-neutral"></div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const API_ORIGIN = 'https://api.bitcoinbeer.events';

const ad = ref({
  id: null,
  image_url: null,
  link: null,
  alt: 'Banner pubblicitario'
});

const adBlocked = ref(false);
const adBait = ref(null);

const adImageUrl = computed(() => {
  if (!ad.value.image_url) return '';
  if (/^https?:\/\//.test(ad.value.image_url)) return ad.value.image_url;
  return new URL(ad.value.image_url, API_ORIGIN).href;
});

const clickHref = computed(() => {
  
  if (ad.value.id) {
    return `${API_ORIGIN}/api/track-click.php?banner_id=${ad.value.id}`;
  }
 
  return ad.value.link || '#';
});

async function fetchAd() {
  const API_URL = `${API_ORIGIN}/api/get-ad.php`;
  try {
    const res = await fetch(API_URL, { cache: 'no-store' });
    if (!res.ok) {
      console.error('Errore chiamata API ad:', res.status);
      return;
    }
    const data = await res.json();
    if (data && typeof data === 'object') {
      ad.value.id        = data.id        ?? null;
      ad.value.image_url = data.image_url ?? null;
      ad.value.link      = data.link      ?? null;
      ad.value.alt       = data.alt       ?? 'Banner pubblicitario';
    }
  } catch (err) {
    console.error('fetchAd error:', err);
  }
}

onMounted(() => {
  // 1) Check ad-block
  const baitEl = adBait.value;
  const style = getComputedStyle(baitEl);
  if (style.display === 'none' || style.visibility === 'hidden' || baitEl.offsetParent === null) {
    adBlocked.value = true;
  }
  // 2) Carico l’ad se non bloccato
  if (!adBlocked.value) fetchAd();
});
</script>

<style scoped>
.ad-bait { width:1px; height:1px; position:absolute; left:-9999px; }
.ad-banner-wrapper { position:relative; z-index:10; }
.ad-placeholder-neutral { height:200px; }
.ad-content img { max-height:200px; }
</style>
