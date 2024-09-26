const addProduct = async (req, res) => {
  const userId = req.user.id

  res.status(200).json({ message: `User id is ${userId}` })
}

module.exports = { addProduct }
