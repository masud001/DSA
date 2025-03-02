// min and max distance between bus stops
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) {
    [start, destination] = [destination, start];
  }
  let forword = 0,
    total = 0;
  for (let i = 0; i < distance.length; i++) {
    total += distance[i];
    if (i >= start && i < destination) {
      forword += distance[i];
    }
  }
  let backword = total - forword;

  return forword < backword ? forword : backword;
};
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // 4
