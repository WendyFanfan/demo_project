require((['./config']), () => {
    require((['login']), (login) => {
        login.loginSend()
    })
})