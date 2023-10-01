const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const users = {
    'john doe':
    // birthDate: `${new Date(`19900101`)}`,
    // currentDate: `${new Date()}`,
    // age: (currentDate, birthDate, age) => {
    //     currentDate.getFullYear() - birthDate.getFullYear()
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age;
    // },
    // dateOfEvent: `${new Date(`20231001`)}`,
    {
        'name': "John Doe",
        'age': 22,
        'totalScore': 22,
        'currentSeverity': 'moderate-severe'
    },
    'sasha fierce': {
        'name': "Sasha Fierce",
        'age': 40,
        'totalScore': 10,
        'currentSeverity': 'mild'
    },
    'unknown': {
        'name': "unknown",
        'age': 0,
        'totalScore': 0,
        'currentSeverity': null,
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const user = request.params.name.toLowerCase()
    if (users[user]) {
        response.json(users[user])
    } else {
        response.json(users['unknown'])
    }
})

app.get('/api', (request, response) => {
    response.json(users)
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}! Better go catch it!`)
})

// function getAge(dateString) {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }