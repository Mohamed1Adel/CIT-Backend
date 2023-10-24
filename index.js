require("dotenv").config();

const express = require("express");
const cors = require("cors");
const compression = require("compression");
var bodyParser = require("body-parser");
const app = express();
const DayTour = require("./models/dayTour");
const Domestic = require("./models/domestic");
const HajjOmrah = require("./models/hajjOmrah");
const NileCruise = require("./models/nileCruise");
const Outbound = require("./models/outbound");

const Program = require("./models/program");
app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: "35mb" }));
const port = 5000;
const mongoose = require("mongoose");
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "35mb",
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   // res.send("Hello world!");
//   // res.sendFile("./views/home.html", { root: __dirname });
// });

// app.post("/", (req, res) => {
//   // res.send("Hello world!");
//   console.log(req.body);
//   res.redirect("/");
// });

{
  //day tour section

  app.post("/addDayTour", (req, res) => {
    const dayTour = new DayTour(req.body);
    dayTour.save();
    console.log(req.body);
    res.redirect("/");
  });
  app.get("/getAllDayTours", async (req, res) => {
    const dayTour = await DayTour.find();
    res.json(dayTour);
  });
  app.get("/getDayTourDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const dayTour = await DayTour.findById(id);
      res.json(dayTour);
      return;
    } catch (e) {
      console.log("error while reading dayTour of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateDayTourDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const dayTour = await DayTour.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json(dayTour);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading dayTour of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteDayTour/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const dayTour = await DayTour.deleteOne({ _id: id });
      res.json({ deletedCount: dayTour.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading dayTour of id ", id);
      return res.send("error");
    }
  });
}

// domestic
{
  app.post("/addDomestic", (req, res) => {
    const domestic = new Domestic(req.body);
    domestic.save();
    console.log(req.body);
    res.redirect("/");
  });
  app.get("/getAllDomestics", async (req, res) => {
    const domestics = await Domestic.find();
    console.log(domestics);
    res.json(domestics);
  });
  app.get("/getDomesticDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const domestic = await Domestic.findById(id);
      res.json(domestic);
      return;
    } catch (e) {
      console.log("error while reading dmoestic of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateDomesticDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const domestic = await Domestic.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json(domestic);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading dmoestic of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteDomestic/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const domestic = await Domestic.deleteOne({ _id: id });
      res.json({ deletedCount: domestic.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading dmoestic of id ", id);
      return res.send("error");
    }
  });
}

{
  // hajjOmrah section

  app.post("/addHajjOmrah", (req, res) => {
    const hajjOmrah = new HajjOmrah(req.body);
    hajjOmrah.save();
    console.log(req.body);
    res.redirect("/");
  });
  app.get("/getAllHajjOmrah", async (req, res) => {
    const hajjOmrah = await HajjOmrah.find();
    res.json(hajjOmrah);
  });
  app.get("/getHajjOmrahDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const hajjOmrah = await HajjOmrah.findById(id);
      res.json(hajjOmrah);
      return;
    } catch (e) {
      console.log("error while reading hajjOmrah of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateHajjOmrahDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const hajjOmrah = await HajjOmrah.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.json(hajjOmrah);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading hajjOmrah of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteHajjOmrah/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const hajjOmrah = await HajjOmrah.deleteOne({ _id: id });
      res.json({ deletedCount: hajjOmrah.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading hajjOmrah of id ", id);
      return res.send("error");
    }
  });
}

{
  // nileCruise section

  app.post("/addNileCruise", (req, res) => {
    const nileCruise = new NileCruise(req.body);
    nileCruise.save();
    console.log(req.body);
    res.redirect("/");
  });
  app.get("/getAllNileCruise", async (req, res) => {
    const nileCruise = await NileCruise.find();
    res.json(nileCruise);
  });
  app.get("/getNileCruiseDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const nileCruise = await NileCruise.findById(id);
      res.json(nileCruise);
      return;
    } catch (e) {
      console.log("error while reading hajjOmrah of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateNileCruiseDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const nileCruise = await NileCruise.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.json(nileCruise);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading nileCruise of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteNileCruise/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const nileCruise = await NileCruise.deleteOne({ _id: id });
      res.json({ deletedCount: nileCruise.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading nileCruise of id ", id);
      return res.send("error");
    }
  });
}

{
  // Outbound section

  app.post("/addOutbound", (req, res) => {
    const outbound = new Outbound(req.body);
    outbound.save();
    console.log(req.body);
    res.redirect("/");
  });
  app.get("/getAllOutbound", async (req, res) => {
    const outbound = await Outbound.find();
    res.json(outbound);
  });
  app.get("/getOutboundDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const outbound = await Outbound.findById(id);
      res.json(outbound);
      return;
    } catch (e) {
      console.log("error while reading hajjOmrah of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateOutboundDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const outbound = await Outbound.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json(outbound);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading Outbound of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteOutbound/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const outbound = await Outbound.deleteOne({ _id: id });
      res.json({ deletedCount: outbound.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading Outbound of id ", id);
      return res.send("error");
    }
  });
}

{
  // Program section

  app.post("/addProgram", (req, res) => {
    const program = new Program(req.body);
    program.save();
    console.log(req.body);
    res.redirect("/");
  });
  app.get("/getAllProgram", async (req, res) => {
    const program = await Program.find();
    res.json(program);
  });
  app.get("/getProgramDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const program = await Program.findById(id);
      res.json(program);
      return;
    } catch (e) {
      console.log("error while reading hajjOmrah of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateProgramDetails/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const program = await Program.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json(program);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading Program of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteProgram/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const program = await Program.deleteOne({ _id: id });
      res.json({ deletedCount: program.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading Program of id ", id);
      return res.send("error");
    }
  });
}

mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.DOMAIN_NAME} , ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
