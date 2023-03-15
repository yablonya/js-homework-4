export function difference(obj) {
  return Object.keys(obj).length === Reflect.ownKeys(obj).length ;
}