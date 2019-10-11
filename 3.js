// 3. isPalindrome
const isPalindrome = (str) => {
  const rx = /[^А-Яа-яA-Ba-b]/;
  const newStr = str.toLowerCase();
  const halfLength = str.length / 2;

  let left = 0;
  let right = str.length - 1;

  while (left < halfLength) {
    if (rx.test(newStr[left])) {
      left += 1;
      continue;
    }
    
    if (rx.test(newStr[right])) {
      right -= 1;
      continue;
    }

    if (newStr[left] === newStr[right]) {
      left += 1;
      right -= 1;
      continue;
    }
    
    return false;
  }

  return true;
}
