import bcrypt from 'bcryptjs'

const users = [{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'Inggar',
    email: 'inggar@example.com',
    password: bcrypt.hashSync('123456', 10)
},
]

export default users