const kthSmallest = function (matrix, k) {
    const arr = [];
    const n = matrix.length;
    let x = 0;
    let y = 0;
  
    while (x < n && y < n) {
      arr.push(matrix[x][y]);
      y++;
  
      if (y >= n) {
        y = 0;
        x++;
      }
    }
    arr.sort((x, y) => x - y);
    return arr[k - 1];
  };
  

    let matrix = [

        [1,5,9],

        

        [10,11,13],

        [12,13,15],

    ];

    console.log("7th smallest element is " + 

    kthSmallest(matrix,  8));

