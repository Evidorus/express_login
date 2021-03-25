const mongoose = require('mongoose')
const userModel = require('./models/user')

mongoose.connect('mongodb://localhost:27017/login', { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('DB connecté');
})

const createUsers = async () => {
    try {
        await userModel.deleteMany({}).exec();
        userModel.create(
            {
                firstName: 'Damir',
                surname: 'Sagadbekov',
                dateOfBirth: '03/05/1996',
                email: 'damir.sagadbekov@live.fr',
                password: 'jesuis',
                confirmPassword: 'jesuis'
            }
        )
    } catch (error) {
        console.log(error);
    }
}
createUsers();