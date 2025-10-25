const k = [
	'street',
	'housenumber',
	'postcode',
	'city',
	'province',
	'country',
	'state',
	// 'email',
	// 'facebook',
	// 'fax',
	// 'foursquare',
	// 'instagram',
	// 'linkedin',
	// 'mobile',
	// 'number',
	// 'pec',
	// 'phone',
	// 'phone:2',
	// 'pinterest',
	// 'skype',
	// 'telegram',
	// 'tiktok',
	// 'tripadvisor',
	// 'twitter',
	// 'website',
	// 'whatsapp',
	// 'yelp',
	// 'youtube'
];

export function useHascontact(tags) {
	for (const t of k) {
		if (tags['contact:'+t]) {
			return true;
		}
	}
	return false;
}
