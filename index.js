'use-strict';
const SortingHat = require('./SortingHat');

const sorting = new SortingHat();

// แสดงผลจำนวนคนในบ้าน ก่อน
console.log('--- ก่อน ---');
sorting.show();

// TODO เพิ่มคนแล้วก็เลือกบ้านให้ด้วย
sorting.add('bas');
// sorting.add('joe');
// sorting.add('emmy');
// sorting.add('tua');
// sorting.add('tou');

// แสดงผลจำนวนคนในบ้าน ก่อน
console.log('---- หลัง ----');
sorting.show();

// Clear ข้อมูล
// sorting.clear();
// sorting.show();
