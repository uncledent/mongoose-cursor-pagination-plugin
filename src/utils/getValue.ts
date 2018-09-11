export function getValue(object: Object, path: string) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined;
    }, object);
}