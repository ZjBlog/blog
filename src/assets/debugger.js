/* eslint-disable */
!function () {
    let timelimit = 50
    let open = false
    setInterval(function() {
        let starttime = new Date()
        debugger
        if (new Date() - starttime > timelimit) {
            open = true
            window.stop()
            window.alert('Hello World')
        } else {
            open = false
        }
    }, 500)
}();
