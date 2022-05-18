const express = require('express');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const eventBody = require('../models/events');
// const sendMail = require('./newsMailer');

const secret = `${process.env.SECRETE}`;

const getEvents = async (req, res) => {
  try {
    const events = await eventBody.find({}).sort({ _id: -1 })
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const getEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await eventBody.findById(id);

    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//Create an event
const createEvent = async (req, res) => {
  const event = req.body;

  //authentication for department
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      creatorRole = decodedData?.role;
      department = decodedData?.department;
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

  const newEventBody = new eventBody({
    ...event,
    creatorRole,
    department,
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  })

  try {
    await newEventBody.save();
    console.log("Created event successfully. ID: ", newEventBody.id);
    res.status(201).json(newEventBody);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

  //instantly send mail function
  /*
  try {
      req.newnewsBody = newnewsBody;
      console.log(newnewsBody);
      sendMail(req,res);
  } catch (error) {
      console.log("Send Mail Error: Error in controllers!", error);
  }
  */
}

//updateNews **updating news by hod
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const eventId = id;
  const { title, invocation, description, date, time, link, banner, contactPerson, contactEmail, contactNumber } = req.body;
  let loadEvent;
  try {
    loadEvent = await newsBody.findById(eventId);
  } catch (error) {
    console.log(error);
  }

  //authentication for department
  try {
    const token = req.headers.authorization.split(" ")[1];
    // const isCustomAuth = token.length < 500;
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, secret);
      if (decodedData?.department !== loadEvent.department) {
        console.log("Decoded dept: ", decodedData?.department);
        res.status(401)
        return res.send('Invalid departmental privileges!')
      }
    }
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

  var lastUpdated = new Date();

  const updatedNews = { title, invocation, description, date, time, link, banner, contactPerson, contactNumber, contactEmail, _id: id, lastUpdated };

  await newsBody.findByIdAndUpdate(id, updatedNews, { new: true });

  console.log("Event ", eventId, " Updated!");

  res.json(updatedNews);
}

//delete events
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  const eventId = id;
  let loadEvents;
  try {
    loadEvents = await eventBody.findById(eventId);
  } catch (error) {
    console.log(error);
  }

  /*
  //authentication for department
  try {
    const token = req.headers.authorization.split(" ")[1];
    // const isCustomAuth = token.length < 500;
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, secret);
      if (decodedData?.department !== eventBody.department) {
        // console.log("Decoded dept: ", decodedData?.department);
        res.status(401)
        return res.send('Invalid Departmental priviledges!')
      }
    }
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
  */
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

  await eventBody.findByIdAndRemove(id);

  res.json({ message: "Event deleted successfully." });
}

module.exports = { getEvents, getEvent, createEvent, updateEvent, deleteEvent };