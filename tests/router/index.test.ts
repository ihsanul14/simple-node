import request from 'supertest';
import express from 'express';
import {IDataController} from "../../application/controller/index";
import { DataRoutes,controller } from '../../framework/router/data';
import Jwt from '../../application/middleware/jwt';
import bodyParser from 'body-parser'

const succesStatus = 'success'
const failedStatus = 'failed'

class MockDataController implements IDataController {
  async GetData(): Promise<any> {
    return [{ id: 1, name: 'Data 1' }, { id: 2, name: 'Data 2' }];
  }

  async GetDataById(id: number): Promise<any> {
    return { id: id, name: `Data ${id}` };
  }

  async CreateData(req: any): Promise<any> {
    return { id: 3, name: 'Data 3' };
  }

  async UpdateData(id: number, req: any): Promise<any> {
    return { id: id, name: `Updated Data ${id}` };
  }

  async DeleteData(id: number): Promise<any> {
    return { message: `Data ${id} deleted successfully` };
  }
}

describe('GET /api/data', () => {
  const url = '/api/data'
  let app: express.Application;
  let mockController: IDataController;

  beforeEach(() => {
    mockController = new MockDataController();
    controller.Data = mockController;
    app = DataRoutes(express());
  });

  it('should return status 200 and data on success', async () => {
    const response = await request(app).get(url);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(succesStatus);
  });

  it('should return status 500 and error message on failure', async () => {
    const errorMessage = 'Internal Server Error';
    jest.spyOn(mockController, 'GetData').mockRejectedValue(new Error(errorMessage));
    const response = await request(app).get(url);
    expect(response.status).toBe(500);
    expect(response.body.status).toBe(failedStatus);
  });
});

describe('GET /api/data/:id', () => {
  const url = '/api/data/1'
  let app: express.Application;
  let mockController: IDataController;

  beforeEach(() => {
    mockController = new MockDataController();
    controller.Data = mockController;
    app = DataRoutes(express());
  });

  it('should return status 200 and data on success', async () => {
    const response = await request(app).get(url);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(succesStatus);
  });

  it('should return status 500 and error message on failure', async () => {
    const errorMessage = 'Internal Server Error';
    jest.spyOn(mockController, 'GetDataById').mockRejectedValue(new Error(errorMessage));
    const response = await request(app).get(url);
    expect(response.status).toBe(500);
    expect(response.body.status).toBe(failedStatus);
  });
});


describe('POST /api/data', () => {
  const url = '/api/data'
  let app: express.Application;
  let mockController: IDataController;
  const token = new Jwt().generateToken()

  beforeEach(() => {
    mockController = new MockDataController();
    controller.Data = mockController;
    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app = DataRoutes(app)
  });

  it('should return status 401 and data on unauthorized', async () => {
    const response = await request(app).post(url);
    expect(response.status).toBe(401);
  });

  it('should return status 400 and data on badRequest', async () => {
    const response = await request(app).post(url).set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(400);
    expect(response.body.status).toBe(failedStatus);
  });

  it('should return status 200 and data on success', async () => {
    const payload = {nama: "test", nomor:12345}
    const response = await request(app).post(url).
                      set('Content-Type', 'application/json').
                      set('Authorization', `Bearer ${token}`). 
                      send(payload)
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(succesStatus);
  });

  it('should return status 500 and error message on failure', async () => {
    const payload = {nama: "test", nomor : 12345}
    const errorMessage = 'Internal Server Error';
    jest.spyOn(mockController, 'CreateData').mockRejectedValue(new Error(errorMessage));
    const response = await request(app).post(url).
                      set('Content-Type', 'application/json').
                      set('Authorization', `Bearer ${token}`).
                      send(payload);
    expect(response.status).toBe(500);
    expect(response.body.status).toBe(failedStatus);
  });
});
