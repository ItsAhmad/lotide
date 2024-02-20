# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahmadameenab/lotide`

**Require it:**

`const _ = require('@ahmadameenab/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Provides the head of an array
* `tail`: Removes the head of an array
* `middle`: Provides the middle of an array
* `assertArraysEqual`: Asserts if arrays are equal
* `assertEqual`: asserts if two entries are equal
* `assertObjectsEqual`: asserts if two objects are equal
* `countLetters`: Counts the number of selected letters in a string 
* `countOnly`: Counts the number of selected strings 
* `eqArrays`: asserts if two arrays are equal in length
* `eqObjects`: asserts if two objects have the same values
* `findKey`: finds a given key in an object
* `findKeyByValue`: finds the key in an object based off the value provided
* `flatten`: takes arrays with multiple arrays within itself and outputs one single array
* `letterPositions`: counts the number of letters in a string 
* `takeUntil`: outputs values from an array until a specified condition
* `without`: removes selected values from an array