import Controller from "../../application/controller/index.js"
import {DataController} from '../../application/controller/data.js'
import sinon from 'sinon'
import assert from 'assert';

describe('DataRouter', () => {
  it('Success', () => {
    const mockResult = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetData();
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    const mockResult = []
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetData();
    assert.strictEqual(result.length, 0);
  });
});
