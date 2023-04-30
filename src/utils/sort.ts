/**
 * Sorts a list of objects by some property within the object.
 * @param values Object list
 * @param orderType Property for which to order 
 * @returns Ordered list of objects
 */
export function OrderArrayBy<T, K extends keyof T>(values: T[], orderType: K): T[] {
	return values.sort((a, b): 1 | -1 | 0 => {
		if (a[orderType] < b[orderType]) return 1;
		if (a[orderType] > b[orderType]) return -1;
		return 0;
	});
}
