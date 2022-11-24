"use strict";
// Оператор "as" позволяет сделать утверждение,
// что та или иная переменная является конкретным типом.
// Он позволяет делать сужение типа для any и unknown, а также для union типов.
function isAnInternetOrder(order) {
    return !!order && "email" in order;
}
function isATelephoneOrder(order) {
    //   return (order as TelephoneOrder).callerNumber !== undefined;
    return !!order && "callerNumber" in order;
    // order === undefined
    // !order === true
    // !!order === false
    // и когда false то переходим к следующему условию
    //где проверяем есть ли свойство  "callerNumber" in order
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
