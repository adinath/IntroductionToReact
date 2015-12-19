jest.dontMock("../js/dashboard.jsx")
//jest.dontMock("../js/board.jsx")

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ShallowTestUtils = require('react-shallow-testutils');


var DashBoard = require('../js/dashboard.jsx');
var Board = require('../js/board.jsx')

describe("DashBoard", () => {

it('it should create a dash board', () => {

  var dashBoard = TestUtils.renderIntoDocument(
      <DashBoard/>
  );

  var inputNode = TestUtils.findRenderedDOMComponentWithClass(dashBoard, 'brdName')

  inputNode.value = 'some board'

  var btnNode = TestUtils.findRenderedDOMComponentWithClass(dashBoard, 'btn')

  TestUtils.Simulate.click(btnNode)

  var board = TestUtils.findRenderedComponentWithType(dashBoard,Board)

  expect(board).toBeTruthy()


})



})
