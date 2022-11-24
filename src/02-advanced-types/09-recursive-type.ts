type NestedNumbers = number | NestedNumbers[];

const numb: NestedNumbers = [1, 2, [1, 3, [0, 20]]];
numb.push(1);
numb.push([1, [1, 3, 5]]);

//JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}
isJSON("hi");
isJSON(200);
isJSON({ a: "123", b: [1, 2], o: {} });
isJSON([1, { x: 20 }]);
