<script setup>
const props = defineProps(["tags"]);
</script>
<template>
    <div class="bg-base-200">
		<h2 class="font-bold">Indirizzo</h2>
		<div class="p-2" v-if="tags">
			<p v-if="tags['addr:housename']">{{tags['addr:housename']}}</p>
			<span v-if="tags['addr:place']" class="pr-2">{{tags['addr:place']}}</span>
			<span v-if="tags['addr:district']">{{tags['addr:district']}}</span>
			
			<span v-if="tags['addr:street:it']">{{tags['addr:street:it']}}</span>
			<span v-else-if="tags['addr:street']">{{tags['addr:street']}}</span>
			<span v-else-if="tags['addr:street:fr']">{{tags['addr:street:fr']}}</span>
			<span v-else-if="tags['addr:street:de']">{{tags['addr:street:de']}}</span>
			<span v-else-if="tags['addr:street_1']">{{tags['addr:street_1']}}</span>
			
			<span v-if="tags['addr:housenumber']"><span class="text-info">,</span> {{tags['addr:housenumber']}}</span>
			<!-- <p v-if="tags['addr:housenumber_1']">addr:housenumber_1: {{tags['addr:housenumber_1']}}</p> -->
			<span v-if="tags['addr:unit']"> <span class="text-info">/</span> {{tags['addr:unit']}}</span>
			<p v-if="tags['addr:floor']"><span class="text-info">Piano</span> {{tags['addr:floor']}}</p>
			<p v-if="tags['addr:direction']">{{tags['addr:direction']}}</p>
			<p v-if="tags['addr:milestone']"><span class="text-info">km</span> {{tags['addr:milestone']}}</p>
			<p v-if="tags['addr:suburb']"> <span class="text-info">(</span>{{tags['addr:suburb']}}<span class="text-info">) </span></p>
			

			<p v-if="tags['addr:hamlet:it']"><span class="text-info">borgo</span> {{tags['addr:hamlet:it']}}</p>
			<p v-else-if="tags['addr:hamlet']"><span class="text-info">borgo</span> {{tags['addr:hamlet']}}</p>
			<p v-else-if="tags['addr:hamlet:de']"><span class="text-info">borgo</span> {{tags['addr:hamlet:de']}}</p>

			<p v-if="tags['addr:postcode']"><span class="text-info">CAP</span> {{tags['addr:postcode']}}</p>
			<p v-if="tags['addr:town']">addr:town: {{tags['addr:town']}}</p>

			<div class="font-bold">
				<p v-if="tags['addr:city:it']">{{tags['addr:city:it']}}</p>
				<p v-else-if="tags['addr:city']">{{tags['addr:city']}}</p>
				<p v-else-if="tags['addr:city:de']">{{tags['addr:city:de']}}</p>
				<p v-else-if="tags['addr:city:fr']">{{tags['addr:city:fr']}}</p>
			</div>

			<p v-if="tags['addr:province']"><span class="text-info">(</span>{{tags['addr:province']}}<span class="text-info">)</span></p>
			<p v-if="tags['addr:country']">{{tags['addr:country']}}</p>
			<p v-if="tags['addr:state']">{{tags['addr:state']}}</p>

			<p v-if="tags['addr:full']">{{tags['addr:full']}}</p>
	   </div>
    </div>
</template>