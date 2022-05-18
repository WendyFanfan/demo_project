require((['./config']), () => {
    require((['register']), (register) => {
        register.registerSend()
    })
})