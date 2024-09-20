const SignIn = async (req, res) => {
    return res.status(200).send({
        message: 'New user created successfully'
    })
}

module.exports = {
    SignIn
}