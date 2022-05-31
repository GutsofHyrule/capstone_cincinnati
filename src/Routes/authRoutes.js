import React, { Component } from "react";
const router = Router('../src/controllers/authControllers')
import {BrowserRouter, Route, Switch} from "react-router-dom"

router.get('/places', authControllers.places_get)
router.post('/places', authControllers.places_post)
router.get('/food', authControllers.food_get)
router.post('/foods', authControllers.food_post)

module.exports= router


