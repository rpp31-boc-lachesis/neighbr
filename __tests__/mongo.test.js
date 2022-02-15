import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Location from '../db/locations.js';
import Run from '../db/runs.js';
import Users from '../db/userModel.js';

let con;
let mongoServer;

describe('test mongodb models', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    con = await MongoClient.connect(mongoServer.getUri(), {});
  });

  afterAll(async () => {
    if (con) {
      await con.close();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  test('it creates a location', () => {
    const db = con.db(mongoServer.instanceInfo!.dbName);

    expect(db).toBeDefined();
    const col = db.collection('test');
    const result = await col.insertMany([{ a: 1 }, { b: 1 }]);
    expect(result.insertedCount).toStrictEqual(2);
    expect(await col.countDocuments({})).toBe(2);
  })
});
