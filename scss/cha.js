const mydb ={
    nm: "차은",
    mypet: ["돌돌","겨울","봄이"],
    hobby: "숫자맞추기"
}

console.log(mydb.mypet[2]) //봄이에게접근

const mydb2 ={
    nm: "차은",

    mypet:[ {
        이름:"돌돌",
        종류:"진돗개"
    },
    {
        이름:"겨울",
        종류:"길냥이"
    },
    {
        이름:"봄이",
        종류:"집냥이"
    }]
    ,
    hobby: "숫자맞추기"
}

console.log(mydb.mypet[2]) //봄이에게접근
console.log(mydb2.mypet[2].이름) //봄이 이름에 접근