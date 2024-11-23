const mongoose = require('mongoose');

const connect = async () => {
    try {
        console.log('DB Connected!')
    } catch (err) {
        console.log('Connection failed, An error occured', err)
    }
}

module.exports = connect