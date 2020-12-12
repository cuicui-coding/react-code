/** 将某元素插入到数组中的某位置 */
export function insertBefore(list, from, to){
  const copy = [...list];
  const fromIndex = copy.indexOf(from);
  if (from === to) {
    return copy;
  }
  copy.splice(fromIndex, 1);
  const newToIndex = to ? copy.indexOf(to) : -1;
  if (to && newToIndex >= 0) {
    copy.splice(newToIndex, 0, from);
  } else {
    // 没有 To 或 To 不在序列里，将元素移动到末尾
    copy.push(from);
  }
  return copy;
}

/** 判断是否数组相等 */
export function isEqualBy(a, b, key) {
  const aList = a.map((item) => item[key]);
  const bList = b.map((item) => item[key]);
  
  let flag = true;
  aList.forEach((i, idx) => {
    if (i !== bList[idx]) {
      flag = false
    }
  })
  return flag;
}
