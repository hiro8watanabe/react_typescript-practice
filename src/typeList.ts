/*eslint-disable @typescript-eslint/no-unused-vars */

/**type scriptの基本の型 */

/**boolean */
let bool: boolean = true;

/**number 数値 */
let num: number = 123;

/**string 文字*/
let str: string = "ABC";

/**array 配列*/
let arr1: Array<number> = [0, 1, 2, 3, 4, 5];
let arr2: number[] = [0, 1, 2, 3, 4, 5];

/**tuple */
let tuple: [number, string] = [1, "A"];

/**any なんでも入るため、なるべく使用しない*/
let any1: any = false;

/**void */
const funcA = (): void => {
  const test = "TEST";
};

/**null */
let null1: null = null;

/**undefined */
let undefined1: undefined = undefined;

/**object */
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "ABC" };
