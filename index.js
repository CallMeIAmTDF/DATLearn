function addOrUpdateURLParam(key, value) {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(key, value)
    const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()
    history.pushState(null, "", newRelativePathQuery)
}
function logout() {
    window.localStorage.clear();
    window.location.href = '/'
}
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
async function getAPI2(url) {
    response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
        },
    });
    return response.json()
}
if (window.localStorage.getItem('accessToken') !== null) {
    mail = parseJwt(window.localStorage.getItem('accessToken')).sub.split('@')[0];
    document.getElementById('infor').setAttribute('username', window.localStorage.getItem('username'))
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('infor').style.display = 'block';
} else {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('infor').style.display = 'none';
}
document.getElementById('infor').addEventListener('click', () => {
    console.log(123123)
    getAPI2('http://localhost:8080/api/coin/getCoin').then(data => {
        if (data.status === 'OK') {
            document.getElementById('token').innerText = `${data.data} DATs`
        }
        else if (data.status === 'BAD_REQUEST') {
            alert('Bạn cần đăng nhập');
            window.localStorage.clear();
            window.location.href = '/'
        }
    })
    el = document.getElementsByClassName('tw-shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]  tw-translate-y-[50%] tw-scale-0 tw-absolute tw-min-w-[12rem] tw-rounded-[10px] tw-bottom-0 tw-right-0 tw-opacity-0 tw-p-[0.3rem] tw-bg-white tw-ease-in-out tw-transition-all')[0].classList
    if (el.contains('lg:!tw-opacity-100')) {
        el.remove('lg:!tw-opacity-100');
        el.remove('!tw-translate-y-[110%]');
        el.remove('!tw-scale-100');
    } else {
        document.getElementsByClassName('tw-shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]  tw-translate-y-[50%] tw-scale-0 tw-absolute tw-min-w-[12rem] tw-rounded-[10px] tw-bottom-0 tw-right-0 tw-opacity-0 tw-p-[0.3rem] tw-bg-white tw-ease-in-out tw-transition-all')[0].classList.add('lg:!tw-opacity-100')
        document.getElementsByClassName('tw-shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]  tw-translate-y-[50%] tw-scale-0 tw-absolute tw-min-w-[12rem] tw-rounded-[10px] tw-bottom-0 tw-right-0 tw-opacity-0 tw-p-[0.3rem] tw-bg-white tw-ease-in-out tw-transition-all lg:!tw-opacity-100')[0].classList.add('!tw-translate-y-[110%]')
        document.getElementsByClassName('tw-shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]  tw-translate-y-[50%] tw-scale-0 tw-absolute tw-min-w-[12rem] tw-rounded-[10px] tw-bottom-0 tw-right-0 tw-opacity-0 tw-p-[0.3rem] tw-bg-white tw-ease-in-out tw-transition-all')[0].classList.add('!tw-scale-100')
    }
})
