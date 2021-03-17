// // 将下划线字符串--》驼峰字符串
//
// function f(str) {
//     let index = str.split('_')
//
//     let newArr = index.map((it,index)=>{
//         return index ? it.substring(0,1).toUpperCase() + it.substring(1) : it
//     })
//
//     return newArr.join('')
//
//
// }
// //toUpperCase
//
// console.log(f('qweqwe_qweqwe_qqq'))
//
// //写一个把字符串大小写切换的方法
//
// function f1(str) {
//     let a = str.split('')
//
//     let newA = a.map(it=>{
//         return checkUpperCase(it) ?  it.toLowerCase() : it.toUpperCase()
//     })
//
//     return newA.join('')
// }
//
// function checkUpperCase(str) {
//     let reg = /^[A-Z]+$/g
//     return reg.test(str)
// }
//
// console.log(f1('sdfgshQQjsdhfQWEUWQEY'))
/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function () {
        },
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

// Usage

getUserIP(function (ip) {
    console.log("Got IP! :" + ip);
});
