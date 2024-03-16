export default function iterateThroughObject(reportWithIterator) {
  let itemstring = '';
  let x = 0;
  for (const item of reportWithIterator) {
    if (reportWithIterator.length - 1 === x) itemstring += item;
    else {
      itemstring += `${item} | `;
    }
    x += 1;
  }

  return itemstring;
}

