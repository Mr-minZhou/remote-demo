export function getQuery() {

  const str = window.location.href.split('?')[1] || false;
  let obj = {};
  if (str) {
    const list = str.split('&');
    let arr = null;
    for (let i = 0; i < list.length; i++) {
      if (!list[i]) {
        continue
      }
      arr = list[i].split('=');
      obj[arr[0]] = arr[1];
    }
  }

  return obj;
}