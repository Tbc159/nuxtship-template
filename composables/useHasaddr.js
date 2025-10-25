const k = [
	'city','city:de','city:fr','city:it',
	'country', 'direction', 'district', 'floor', 'full', 'hamlet', 'hamlet:de', 'hamlet:it', 'housename', 'housenumber', 'housenumber_1', 'milestone', 'place', 'postcode', 'province', 'state',
	'street', 'street_1', 'street:de', 'street:fr', 'street:it',
	'suburb', 'town', 'unit'
];

export function useHasaddr(tags) {
	for (const t of k) {
		if (tags['addr:'+t]) {
			return true;
		}
	}
	return false;
}
