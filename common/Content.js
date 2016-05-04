import $ from 'jquery';
import DomainPath from '../buildFiles/DomainPath.js';

export function get() {
  return $.getJSON(`..${DomainPath.origin}/content.json`);
}



