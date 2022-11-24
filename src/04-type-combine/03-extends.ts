type answer_1 = 64 extends number ? true : false;
// on the right side of EXTENDS we have available values on the left value witch we should to check!
// с права допустимый набор значений, а слева значение которое мы проверяем,
// как буд-то проверяем наличие значения СЛЕВА в (условии, наборе, массиве) СПРАВА
// value after EXTENDS, Include value before EXTENDS?

type answer_2 = number extends 64 ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = never extends any ? true : false;
type answer_6 = any extends any ? true : false;

type answer_7 = Date extends { new (...arg: any[]): any } ? true : false;
type answer_8 = typeof Date extends { new (...arg: any[]): any } ? true : false;

type T3 = { getDay(): number } extends Date ? true : false;
