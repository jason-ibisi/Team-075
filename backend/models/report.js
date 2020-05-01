const report = {
  _id: String,
  userId: String,
  reporter: {
    phoneNo: String
  },
  location: {
    latitude: Number,
    longitude: Number
  },
  reponse: {
    status: String,
    responder: String,
    phoneNo: Number,
    recievedAt: Date,
    eta: Date,
    arrivedAt: Date
  },
  imageUrl: String,
  timeStamp: Number
};

module.exports = report;
