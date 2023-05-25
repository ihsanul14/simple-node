const Controller = require("../../application/controller");
const DataController = require('../../application/controller/data')

const sinon = require('sinon')
const assert = require('assert');

describe('DataController', () => {
  it('Success', () => {
    const mockResult = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetData();
    assert.strictEqual(result, mockResult);
  });
});
