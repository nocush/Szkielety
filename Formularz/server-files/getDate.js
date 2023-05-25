function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${day}.${month}.${year} ${hour}:${minute}:${second}`
}

module.exports = getDate;