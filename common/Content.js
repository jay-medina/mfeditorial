import $ from 'jquery';

export function get() {
  return $.getJSON('../content.json');
}



