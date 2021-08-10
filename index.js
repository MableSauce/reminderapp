const express = require('express');
const app = express();
const faker = require('faker');
const _ = require('lodash');
const port = 8000;
const fakerReminders = faker.lorem.text();


app.get('/',(req, res) => {
  const count = 1;
  if(!count) {
    console.log('in 400 error');
    return res.status(400).send({errorMsg:'count query parameter is missing'});
  }else if(fakerReminders) {
    console.log('in 200 status');
    const uuid = faker.datatype.uuid();
    const reminderObject = {
      id: uuid,
      reminder: fakerReminders,
    }
    console.log(reminderObject);
    res.status(200).json(reminderObject);
  }else {
    console.log('in 500 error');
    err => {
      console.log('error', err);
      res.status(500).json({message: "error, server has crashed running get all reminders"});
    }
  }
})
app.listen(port, () => {
  console.log(`====Example app listening at http://localhost:${port}=====`);
});