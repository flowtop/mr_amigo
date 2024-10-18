const getDogUrl = async () => {

    let ret = "";

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        return res.json();
    })
    .then(data => {
        ret = data.message;
    })
    .catch(err => {
        return 0;
    });

    return typeof ret;
}

export default getDogUrl;