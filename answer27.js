function findSingle(ar, ar_size)
    {
        
        let res = ar[0];
        for (let i = 1; i < ar_size; i++)
            res = res ^ ar[i];
 
        return res;
    }
 

        let ar = [10,6,5,8];
        let n = ar.length;
        console.log("Element occurring once is "
            + findSingle(ar, n));