const express = require('express')
const app = express()
const PORT = 8000

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
        'age': 22,
        'totalScore': 22,
        'currentSeverity': `moderate-severe`
    },
    'sasha fierce': {
        'age': 40,
        'totalScore': 10,
        'currentSeverity': `mild`
    },
    'unknown': {
        'age': 0,
        'totalScore': 0,
        'currentSeverity': null,
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(users)
})


app.listen(PORT, () => {
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