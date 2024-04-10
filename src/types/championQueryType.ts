export type championQuery = {
	type?: 'ad' | 'ap' | 'tank';
	ranged?: 'true' | 'false';
	role?: 'top' | 'jg' | 'mid' | 'adc' | 'sup';
}