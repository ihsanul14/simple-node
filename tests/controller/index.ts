import Controller from "../../application/controller/index.ts"
import {DataController} from '../../application/controller/data.ts'
import sinon from 'sinon'
import assert from 'assert';

describe('DataController', () => {
  it('Success', () => {
    const mockResult:any = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetData();
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    var result:any
    const controller = new Controller(result);
    try{
      result = controller.Data.GetData();
    }catch(err){
      assert.equal(result, undefined)
      assert.notStrictEqual(err, undefined);
    }
  });
});
