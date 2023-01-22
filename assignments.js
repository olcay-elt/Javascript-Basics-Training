//?     ASSIGNMENTS **********************



// // !ÖDEVLER 1 *********
// //!Soru-1: Not - Harf Programi  **********
// const puan = +prompt("Sinav notunu giriniz")
// const harf = function (puan) {
//     let sonuc;
//     if (puan < 0 || puan > 100)
//         sonuc = ("Lütfen 0 ile 100 arasi bir puan giriniz")
//     else if (0 <= puan <= 25)
//         sonuc = ("FF")
//     else if (26 <= puan <= 45)
//         sonuc = ("DD")
//     else if (46 <= puan <= 65)
//         sonuc = ("CC")
//     else if (66 <= puan <= 75)
//         sonuc = ("BB")
//     else if (76 <= puan <= 90)
//         sonuc = ("BA")
//     else if (91 <= puan <= 100)
//         sonuc = ("AA")
//     return sonuc
// }
// console.log(harf(puan));
// //!Soru-2: Switch-case  **********
// const month = prompt("Enter the month");
// let monthNo;
// switch (month) {
//     case "January":
//         monthNo = 1;
//         break;
//     case "Ferruary":
//         monthNo = 2;
//         break;
//     case "March":
//         monthNo = 3;
//         break;
//     case "April":
//         monthNo = 4;
//         break;
//     case "May":
//         monthNo = 5;
//         break;
//     case "June":
//         monthNo = 6;
//         break;
//     case "July":
//         monthNo = 7;
//         break;
//     case "August":
//         monthNo = 8;
//         break;
//     case "September":
//         monthNo = 9;
//         break;
//     case "October":
//         monthNo = 10;
//         break;
//     case "November":
//         monthNo = 11;
//         break;
//     case "December":
//         monthNo = 12;
//         break;
//     default:
//         alert("Not defined");
//         break;
// }
// console.log(`${month} is ${monthNo}th month`);
// //!Soru-4: Tek-Cift ( Ternary)  **********
// const number = +prompt("Enter a Number")
// const oddEven = function (number) {
//     return number % 2 == 0 ? "Even" : "Odd"
// }
// console.log(oddEven(number))





// //! 1)  *****
// const prices3 = [100, 250, 50, 89];

// let newPrices3 = 0;
// prices3.forEach((p, i, dizi) => {
//     newPrices3 = (p * 1.1).toFixed(2);

//     console.log(`${i + 1}. new price ${newPrices3} `);
//     dizi[i] = (p * 1.1).toFixed(2);

// });
// console.log(prices3);



// //! 2)  *****

// const prices4 = [100, 250, 50, 89];


// prices4.forEach((p, i, dizi) => {
//     if (p > 90)
//         console.log(`${i + 1} ${p} `);
//     dizi[i] = p

// })


// //! 3) *****

// const prices5 = [100, 250, 50, 89];


// prices5.forEach((p, i, dizi) => {
//     if (p < 110)
//         console.log(` ${(p * 1.1).toFixed(2)} `);
//     dizi[i] = (p * 1.1).toFixed(2)

// })


// //! 4) *****

// const salary = [3000, 5000, 4000, 6000, 6500]
// const newSalary = salary.map((p) => {
//     const newSalary = 0;
//     if (p < 4000)
//         p = p * 1.5
//     return p
// })
// console.log(newSalary);


// //! 5) *****

// const salary1 = [3000, 5000, 4000, 6000, 6500]

// const newSalary1 = salary1.map((p) => (p > 4000) ? p * 1.25 : p)

// console.log(newSalary1);



// ***** Challenges *********


// * 1)  *****

function reverseText(text) {
    const reversed = text.split('').reverse().join('')
    console.log(reversed);

    return reversed;
}

reverseText("Clarusway Rocks!")
reverseText("Happy")



// * 2)  *****

function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ')
    console.log(reversed);

    return reversed;
}

reverseSentence("Clarusway")
reverseSentence("days. big make things Little")

// * 3)  *****

function mergeArrays(array1, array2) {
    const merged = array1.concat(array2)
    console.log('merged: ', merged);

    return merged;
}

mergeArrays([], [])
mergeArrays([], [7, 8, 9])
mergeArrays([12, 14, 16], [11, 13, 17])
mergeArrays([22, 24, 26, 28], [21, 27])


// * 4)  *****

function checkEmail(email) {
    const allowedLetters = "abcdefghijklmnopqrstuvwxyz0123456789_+.@"
    const emailArr = email.split('')

    /**
     *  check1: Valid characters in the email address will be 
     * 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.* *  S. : Capital letters are allowed.
     * */
    function check1(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!allowedLetters.includes(arr[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * Check2: An email should not start with '@' symbol
     */
    function check2(email) {
        return email[0] === '@' ? false : true;
    }

    /**
     * Check3: should not contain more than one '@' sign
     */
    function check3(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '@') {
                count++;
            }
        }
        return count > 1 ? false : true;
    }

    /**
     * Check4: There should be at least two characters after the '.' sign. (like .co or .com)
     */
    function check4(email) {
        return email.split('.')[-1].length > 1 ? true : false;
    }

    /**
     * Check5: There should be at least one . after the '@' sign.
     */
    function check5(email) {
        const last = email.split('@')[-1]

        for (let i = 0; i < last.length; i++) {
            let count = 0;
            if (last[i] === '.') {
                count++;
            }
        }
        return count > 1 ? false : true;
    }

    const allChecks = check1(emailArr) && check2(email) && check3(emailArr) && check4(email) && check5(email)
    return allChecks === true ? 'valid' : 'invalid';
}


















