const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First Approach
// using normal function - this is not recommended
// we can use it for small data set
// it consume un necessary memory
function chunk(batchSize, items) {
  const chunks = [];
  for (let i = 0; i < items.length; i += batchSize) {
    chunks.push(items.slice(i, i + batchSize));
  }
  return chunks;
}

const batches = chunk(2, array);
console.log(batches);

// using Generator function - Recommended
// it works very well with huge data, it does not create un necessary data. just create data on batch size
// it can also work with infinite data, server lack nhi krega
function* chunk(batchSize, items) {
  for (let i = 0; i < items.length; i += batchSize) {
    yield items.slice(i, i + batchSize);
  }
}

for (const batch of chunk(2, array)) {
  console.log(batch);
}
