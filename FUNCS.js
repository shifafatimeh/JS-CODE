function myFunc(m, n) {
  return m.repeat(n);
}
console.log(myFunc("I LOVE JS!!!", 6));

let conMul = (a, b) => {
  return a * b; //THESE ARE CALLED ARROW FUNCTION !!!
};
console.log(conMul(3, 5));

let conSep = () => {
  return "I LOVE JAVASCRIPT"; //THESE ARE CALLED ARROW FUNCTION !!! WE CAN ACCESS THEM WITHOUT THE PARAMETERS TOO,,,
};
console.log(conSep()); //OR WE CAN DO IN A SINGLE LINE WITHOUT CURLY BRACET!!

let falseFlag = () => console.log("HAPPY CODING");
falseFlag();

function myCount(string_1) {
  let vow = ["a", "e", "i", "o", "u"];
  let count_1 = 0;
  for (let i of string_1) {
    for (let x of vow) {
      if (i.toLowerCase() == x) {
        count_1++;
      }
    }
  }
  return `THE TOTAL NO.s OF VOWELS IN ${string_1} are'${count_1}'`;
}
console.log(myCount("HELLO JAVASCRIPT , HAPPY CODING"));

let con = (string_2) => {
  //SAME THING BY USING ARROWFUNCTION
  let vow = ["a", "e", "i", "o", "u"];
  let count_1 = 0;
  for (let i of string_2) {
    for (let x of vow) {
      if (i.toLowerCase() == x) {
        count_1++;
      }
    }
  }
  return `THE TOTAL NO.s OF VOWELS IN ${string_2} are'${count_1}.'`;
};
console.log(con("HAPPY NEW YEAR"));

let myCities = ["GOA", "Delhi", "Mumbai", "Pune"]; //FOR EACH IS USED ONLY FOR ARRAYS
myCities.forEach((val, index, arr) => {
  console.log(val, index, arr);
});

let sq = [2, 4, 5, 6, 7, 8]; //
let y = sq.map((val) => {
  return val ** 2;
});
console.log(y);

let sqxe = [2, 4, 5, 6, 7, 8];
sqxe.forEach((val) => {
  return val ** 2; //IT IS CALLBACKING WHOLE FUNCTION
});
console.log(sqxe);

let sqxex = [2, 4, 5, 6, 7, 8];
let r = sqxex;
console.log(r);

sqxex.forEach((val, index, arr) => {
  arr[index] = val ** 2;
});

console.log(sqxex);

let sqxexc = [2, 4, 5, 6, 7, 8];
sqxexc.forEach((val) => {
  console.log(val ** 2);
});

let sqrt = (val) => {
  return val ** 2;
};
let sqS = [2, 4, 5, 6, 7, 8];
sqS.forEach(sqrt);
console.log(sqS);

let sqxexz = [2, 4, 5, 6, 7, 8];
sqxexz.map((val, index, arr) => {
  arr[index] = val ** 2;
});
console.log(sqxexz);

let sqrtqqq = (val) => {
  return val ** 2;
};

let sqSq = [2, 4, 5, 6, 7, 8];
let squaredValues = [];

sqSq.forEach((val) => {
  squaredValues.push(sqrtqqq(val));
});

console.log(squaredValues);
console.log(sqSq);

function htigherOrderFunction(callback) {
  let values = [1, 2, 3, 4, 5];
  let result = [];

  values.forEach((val) => {
    result.push(callback(val));
  });
  return result;
}

let squaredsValues = htigherOrderFunction((val) => val ** 2);
console.log(squaredsValues);

function hx(a, b) {
  return a.map((val, index, arr) => {
    return (arr[index] = b(val));
  });
}
let tw = (val) => val ** 2;
let valuesw = [1, 2, 3, 4, 5];
let h = hx(valuesw, tw);
console.log(h);
console.log(valuesw);

function higherOrderFunction(a, b) {
  a.forEach((val, index, arr) => {
    arr[index] = b(val);
  });
}

let t = (val) => val ** 2;
let values = [1, 2, 3, 4, 5];
console.log(values);
higherOrderFunction(values, t);
console.log(values); // Modified array is logged here

let array_1 = [2, 3, 4, 5, 6, 6, 4, 5, 35, 42, 65, 34, 54, 63, 46];
let ar = array_1.filter((val) => {
  return val % 2 !== 0;
});
console.log(ar);

/*let array_1 = [2, 3, 4, 5, 6, 6, 4, 5, 35, 42, 65, 34, 54, 63, 46];
array_1.filter((val) => {
  val % 2 !== 0;
});
console.log(array_1);        this is wrong version we  cant use the filter like this as it creates a new array!*/

let arrzex = [234, 435, 453, 678, 543, 745, 354, 675];
arecx = arrzex.reduce((prev, curr) => {
  return prev < curr ? prev : curr; //this is to find smallest
});
console.log(arecx);

function harvard_cal(a, b) {
  // no. of students got above 90+ or 90.
  count = 0;
  a.filter((val) => {
    if (b(val)) {
      count++;
    }
  });
  return count;
}
function greatest(a) {
  //func for greatest marks
  return a.reduce((prex, currx) => {
    return prex > currx ? prex : currx;
  });
}
function least(a) {
  //func for least marks
  return a.reduce((pres, currs) => {
    return pres < currs ? pres : currs;
  });
}
function repeated_c(inp) {
  console.log(inp);
}
let student_marks = [23, 45, 90, 95, 65, 97, 59, 96, 95, 94, 100];
let fill = (val) => val >= 90;
let marks = harvard_cal(student_marks, fill);
repeated_c(marks);
let greatest_mrk = greatest(student_marks);
repeated_c(greatest_mrk);
let least_mrk = least(student_marks);
repeated_c(least_mrk);

let student_marks_10 = [2, 4, 9, 9, 6, 5, 1, 3, 6, 4, 5, 6, 4, 1, 0, 0];
let fill_10 = (val) => val >= 5;
let ten = harvard_cal(student_marks_10, fill_10);
repeated_c(ten);
let txx = greatest(student_marks_10);
repeated_c(txx);

let person_inp = prompt("ENTER THE No.");
let empy_arr = [];
for (i = 1; i <= person_inp; i++) {
  empy_arr[i - 1] = i;
}
console.log(empy_arr);
let away_Add = empy_arr.reduce((per, uop) => {
  return per + uop;
});
console.log(away_Add);

let away_Mul = empy_arr.reduce((perz, uopz) => {
  //THESE ARE ARROW FUNCTIONS
  return perz * uopz;
});
console.log(away_Mul);

function greatest(a) {
  return a.reduce(
    (acc, current, index) => {
      if (current > acc.mark) {
        return { mark: current, index: index };
      } else {
        return acc;
      }
    },
    { mark: -1, index: -1 }
  );
}

let studentMarks = [23, 45, 90, 95, 65, 97, 59, 96, 95, 94, 100];
let highestMark = greatest(studentMarks);

console.log(highestMark);
console.log(`Highest mark: ${highestMark.mark}, Index: ${highestMark.index}`);
const xarr = [3, 4, 5, 7, 4, 3, 6, 4];
const doun = (val) => {
  return val.toString(2);
};
m = xarr.map(doun);
console.log(m);
const users = [
  { firstName: "akshay", lastName: "saini", age: 28 },
  { firstName: "donald", lastName: "trump", age: 5 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 50 },
];

acc = { 28: 1, 75: 1, 50: 1 };
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);

const output2 = users.filter((val) => val.age < 30).map((x) => x.firstName);
console.log(output2);

const webnest = users.reduce(function (accx, currx) {
  if (currx.age < 30) {
    accx.push(currx.firstName);
  }
  return accx;
}, []); //this must be an array in output
console.log(webnest);
const webxnest = users.reduce(function (accxx, currxx) {
  if (currxx.age < 30) {
    accxx[currxx.age] = currxx.firstName;
  }
  return accxx;
}, {}); //this must be as object in output
console.log(webxnest);
