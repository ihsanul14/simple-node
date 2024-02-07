import Controller from "../../application/controller/index"
import {DataController} from '../../application/controller/data'
import sinon from 'sinon'
import assert from 'assert';

describe('DataController GetData', () => {
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


describe('DataController GetDataById', () => {
  it('Success', () => {
    const mockResult:any = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.GetDataById.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.GetDataById(1);
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    var result:any
    const controller = new Controller(result);
    try{
      result = controller.Data.GetDataById(1);
    }catch(err){
      assert.equal(result, undefined)
      assert.notStrictEqual(err, undefined);
    }
  });
});


describe('DataController Create', () => {
  it('Success', () => {
    const mockResult:any = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.CreateData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.CreateData({});
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    var result:any
    const controller = new Controller(result);
    try{
      result = controller.Data.CreateData({});
    }catch(err){
      assert.equal(result, undefined)
      assert.notStrictEqual(err, undefined);
    }
  });
});

describe('DataController Update', () => {
  it('Success', () => {
    const mockResult:any = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.UpdateData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.UpdateData(1,{});
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    var result:any
    const controller = new Controller(result);
    try{
      result = controller.Data.UpdateData(1,{});
    }catch(err){
      assert.equal(result, undefined)
      assert.notStrictEqual(err, undefined);
    }
  });
});

describe('DataController Delete', () => {
  it('Success', () => {
    const mockResult:any = [{id: 1}]
    const mockDataController = sinon.createStubInstance(DataController)
    mockDataController.DeleteData.returns(mockResult)
    const controller = new Controller(mockDataController);
    const result = controller.Data.DeleteData(1);
    assert.strictEqual(result, mockResult);
  });

  it('Failed', () => {
    var result:any
    const controller = new Controller(result);
    try{
      result = controller.Data.DeleteData(1);
    }catch(err){
      assert.equal(result, undefined)
      assert.notStrictEqual(err, undefined);
    }
  });
});
