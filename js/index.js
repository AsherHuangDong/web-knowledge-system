// var b;
// void function(){
//     var env = {b:1};
//     b = 2;
//     console.log("In function b:", b);
//     with(env) {
//         var b = 3;
//         console.log("In with b:", b);
//         console.log("In env b:", env.b);
//     }
// }();
// console.log("Global b:", b);

function getPerformance() {
    const timing = performance.timing;
    const dom_ready = timing.domContentLoadedEventEnd - timing.fetchStart;
    const dom_parse = timing.domInteractive - timing.responseEnd;
    const loaded = timing.loadEventStart - timing.fetchStart;
    const recource_duration = timing.loadEventStart - timing.domContentLoadedEventEnd;
    return { dom_ready, dom_parse, loaded, recource_duration }
}
getPerformance();