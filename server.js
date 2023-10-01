const express = require('express')
const app = express()
const PORT = 8000

const patient = {
    'name': 'John Doe',
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
    'totalScore': 22,
    'currentSeverity': `moderate-severe`
}

app.get(`/ `, (request, response) => {
    response.sendFile(_dirname + '/index.html')
})

app.get(`/api `, (request, response) => {
    response.json(patient)
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