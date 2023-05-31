jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// const base = '9134e286-6f71-427a-bf00-';
// let current = 100000000000;
//
// const v4 = jest.fn(() => {
//   const uuid = base + current.toString();
//   current++;
//
//   return uuid;
// });
//
// export { v4 };

jest.mock('uuid', () => {
  
})
