/**
 * @param {number} x
 * @return {number}
 * 从新的角度思考这一题. 这里使用的是二分查找, 做算法有时候也不需要通过人脑思维去书写代码
 */
 var mySqrt = function(x) {
   let l = 0,
       r = x,
       ans = -1
   while (l <= r) {
       let mid = ~~(l + (r - l) / 2)
       if ( mid * mid <= x ) {
           ans = mid
           l = mid + 1
       } else {
           r = mid - 1
       }
   }
   return ans
};
mySqrt(5)