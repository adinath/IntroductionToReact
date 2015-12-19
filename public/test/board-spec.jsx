jest.dontMock("../js/board.jsx")

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');


var Board = require('../js/board.jsx');

describe("Board", () => {

it('it should create a board', () => {
  var board = TestUtils.renderIntoDocument(
      <Board/>
  );

  var board = TestUtils.findRenderedDOMComponentWithTag(board, 'div')

  expect(board).toBeTruthy()

})



})
