export function usePoiLink(poi) {
	if (poi.type === 'node') {
		return '/osn/' + poi.id;
	} else if (poi.type === 'way') {
		return '/osw/' + poi.id;
	}
	return '';
}