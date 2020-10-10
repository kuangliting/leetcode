// 从数组arr中选出n个元素组合在一起，，打印出所有
var combination  = function (arr, n) {
    // console.log(arr);
    if (n == 1) {
      return { sum: arr.length, list: arr };
    } else {
      let len = arr.length;
      let sum = 0;
      let list = [];
      for (let i = 0; i < len; i++) {
        let local = combination ((arr.slice(i + 1)),
          n - 1
        );
        sum = sum + local.sum;
        list = list.concat(local.list.map((item) => arr[i] + ":" + item));
      }
      return { sum, list: list };
    }
  };
  
  let result = combination ([1, 2, 3, 4, 5, 6], 2);
  console.log(result);
  