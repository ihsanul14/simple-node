import Controller from "../../application/controller/index.js"
import {DataController} from '../../application/controller/data.js'
import sinon from 'sinon'
import assert from 'assert';

describe('DataController', () => {
  it('Success', () => {
    const mockResult = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetData();
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    var result
    const controller = new Controller();
    try{
      result = controller.Data.GetData();
    }catch(err){
      assert.equal(result, undefined)
      assert.notStrictEqual(err, undefined);
    }
  });
});