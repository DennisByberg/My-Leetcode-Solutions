export default function missingNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) return i;
  }

  return nums.length;
}
