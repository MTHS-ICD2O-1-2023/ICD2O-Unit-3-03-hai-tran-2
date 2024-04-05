

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of sphere
 */
function calculateVolume() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById('radius-of-sphere').value)
  // process
  const volumeOfSphere = (4 * Math.PI * radiusOfSphere * radiusOfSphere * radiusOfSphere) / 3

  // output
  document.getElementById('answer').innerHTML = "The volume is: " + volumeOfSphere.toFixed(2) + " mm³"
}
