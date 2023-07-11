const mongoose = require('mongoose');
const mongoose = require('mongoose');
const User = require('../models/user.js');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create and save a new user successfully', async () => {
    expect.assertions(1);
    const userData = {
      name: 'Liz Ford',
      email: 'lizford@example.com',
      password: 'password243',
    };
    const user = new User(userData);
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
  });

  it('should require all fields to create a user', async () => {
    expect.assertions(1);
    const userData = {};
    const user = new User(userData);
    let error;
    try {
      await user.save();
    } catch (err) {
      error = err;
    }
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
  });
});

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create and save a new user successfully', async () => {
    expect.assertions(1);
    const userData = {
      name: 'Liz Ford',
      email: 'lizford@example.com',
      password: 'password243',
    };
    const user = new User(userData);
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
  });

  it('should require all fields to create a user', async () => {
    expect.assertions(1);
    const userData = {};
    const user = new User(userData);
    let error;
    try {
      await user.save();
    } catch (err) {
      error = err;
    }
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
  });
});