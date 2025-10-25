<script setup>
const props = defineProps(["tags"]);
</script>
<template>
    <div class="bg-base-200">
		<h2 class="font-bold">Contatto</h2>
		<div class="p-2" v-if="tags">
			<span v-if="tags['contact:street']">{{tags['contact:street']}}</span>
			<span v-if="tags['contact:housenumber']"><span class="text-info">,</span> {{tags['contact:housenumber']}}</span>

			<p v-if="tags['contact:postcode']"><span class="text-info">CAP</span> {{tags['contact:postcode']}}</p>
			<p v-if="tags['contact:city']">{{tags['contact:city']}}</p>

			<p v-if="tags['contact:province']"><span class="text-info">(</span>{{tags['contact:province']}}<span class="text-info">)</span></p>
			<p v-if="tags['contact:state']">{{tags['contact:state']}}</p>
			<p v-if="tags['contact:country']">{{tags['contact:country']}}</p>
			
			<!-- <p v-if="tags['contact:number']">contact:number: {{tags['contact:number']}}</p> -->
			
			<!-- <p v-if="tags['contact:fax']">contact:fax: {{tags['contact:fax']}}</p> -->
			<!-- <p v-if="tags['contact:pec']">contact:pec: {{tags['contact:pec']}}</p> -->
			<!-- <p v-if="tags['contact:email']">contact:email: {{tags['contact:email']}}</p> -->
			<!-- <p v-if="tags['contact:phone']">contact:phone: {{tags['contact:phone']}}</p> -->
			<!-- <p v-if="tags['contact:mobile']">contact:mobile: {{tags['contact:mobile']}}</p> -->
			<!-- <p v-if="tags['contact:phone:2']">contact:phone:2: {{tags['contact:phone:2']}}</p> -->
			<!-- <p v-if="tags['contact:website']">contact:website: {{tags['contact:website']}}</p> -->
			
			<!-- social -->
			<!-- <p v-if="tags['contact:instagram']">contact:instagram: {{tags['contact:instagram']}}</p> -->
			<!-- <p v-if="tags['contact:facebook']">contact:facebook: {{tags['contact:facebook']}}</p> -->
			<!-- <p v-if="tags['contact:twitter']">contact:twitter: {{tags['contact:twitter']}}</p> -->
			<!-- <p v-if="tags['contact:linkedin']">contact:linkedin: {{tags['contact:linkedin']}}</p> -->
			<!-- <p v-if="tags['contact:telegram']">contact:telegram: {{tags['contact:telegram']}}</p> -->
			<!-- <p v-if="tags['contact:pinterest']">contact:pinterest: {{tags['contact:pinterest']}}</p> -->
			<!-- <p v-if="tags['contact:youtube']">contact:youtube: {{tags['contact:youtube']}}</p> -->
			<!-- <p v-if="tags['contact:whatsapp']">contact:whatsapp: {{tags['contact:whatsapp']}}</p> -->
			<!-- <p v-if="tags['contact:tiktok']">contact:tiktok: {{tags['contact:tiktok']}}</p> -->
			<!-- <p v-if="tags['contact:skype']">contact:skype: {{tags['contact:skype']}}</p> -->
			<!-- <p v-if="tags['contact:foursquare']">contact:foursquare: {{tags['contact:foursquare']}}</p> -->
			<!-- <p v-if="tags['contact:yelp']">contact:yelp: {{tags['contact:yelp']}}</p> -->
			<!-- <p v-if="tags['contact:tripadvisor']">contact:tripadvisor: {{tags['contact:tripadvisor']}}</p> -->
	   </div>
    </div>
</template>