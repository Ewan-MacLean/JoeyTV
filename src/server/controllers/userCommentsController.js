const UserComments = require("../schema/userCommentsSchema")

const getUserComments = async (req, res) => {
    const userComments = await UserComments.find()
    console.log(userComments)
    res.json(userComments)
}


module.exports = getUserComments