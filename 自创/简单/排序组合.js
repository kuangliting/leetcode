// 从数组arr中选出n个元素排序组合在一起，，打印出所有
var arrangeCombination  = function (arr, n) {
    if (n == 1) {
      return { sum: arr.length, list: arr };
    } else {
      let len = arr.length;
      let sum = 0;
      let list = [];
      for (let i = 0; i < len; i++) {
        let local = arrangeCombination (
          [].concat(arr.slice(0, i)).concat(arr.slice(i + 1)),
          n - 1
        );
        sum = sum + local.sum;
        list = list.concat(local.list.map((item) => arr[i] + ":" + item));
      }
      return { sum, list: list };
    }
  };
  
  let result = arrangeCombination ([1, 2, 3, 4, 5, 6], 4);
  console.log(result);