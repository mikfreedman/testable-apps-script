import { echo } from './echo';


/**
 * Example function to demonstrate JSDoc-style comments for autocomplete in Google Apps Script
 *
 * @param {string} name - **name** the example to log
 * @returns {boolean} always true
 */
const autoCompleteExample = (name: string): boolean => {
    console.log(name)
    return true
}

declare const global: any;

global.autoCompleteExample = autoCompleteExample;
global.echo = echo;