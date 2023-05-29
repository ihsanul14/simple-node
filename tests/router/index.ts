import Controller from "../../application/controller/index.ts"
import {DataController} from '../../application/controller/data.ts'
import sinon from 'sinon'
import assert from 'assert';

describe('DataRouter', () => {
  it('Success', () => {
    const mockResult:any = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetData();
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    const mockResult:any = []
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result:any = controller.Data.GetData();
    assert.strictEqual(result.length, 0);
  });
});
