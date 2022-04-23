export default function GetArray(number) {
    let arr = []
    for (let i = number; i < number + 12; i++) {
        arr.push(i)
    }
    return arr
}