require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());

app.use(express.json());


const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        //collections 
        const servicesCollection = client.db("Assingment-5").collection("services");
        const eventsCollection = client.db("Assingment-5").collection("events");
        const recentsCollection = client.db("Assingment-5").collection("recents");

        // READ - Servcies
        app.get("/services", async (req, res) => {
            const result = await servicesCollection.find().toArray();
            res.send(result);
        });

        app.get("/service/:id", async (req, res) => {
            const id = req.params.id;
            const result = await servicesCollection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // READ - Events
        app.get("/events", async (req, res) => {
            const result = await eventsCollection.find().toArray();
            res.send(result);
        });

        app.get("/events/:id", async (req, res) => {
            const id = req.params.id;
            const result = await eventsCollection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });
        // READ - Recents
        app.get("/recent-events", async (req, res) => {
            const result = await recentsCollection.find().toArray();
            res.send(result);
        });
        app.get("/recent-events/:id", async (req, res) => {
            const id = req.params.id;
            const result = await recentsCollection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });



        app.post("/add-service", async (req, res) => {
            const serviceInfo = req.body;
            const result = await servicesCollection.insertOne(serviceInfo);
            res.send(result);
        });

        app.post("/add-event", async (req, res) => {
            const serviceInfo = req.body;

            const result = await eventsCollection.insertOne(serviceInfo);
            res.send(result);
        });




        app.post("/add-recent-event", async (req, res) => {
            const serviceInfo = req.body;
            const result = await recentsCollection.insertOne(serviceInfo);
            res.send(result);
        });




        app.put("/service/edit/:id", async (req, res) => {

            const id = req.params.id;

            const filter = { _id: new ObjectId(id) };
            const updateService = req.body;

            const serviceInfo = {
                $set: {
                    ...updateService
                }
            };

            const result = await servicesCollection.updateOne(filter, serviceInfo);
            res.send(result);
        });







        app.put("/event/edit/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updateService = req.body;

            const serviceInfo = {
                $set: {
                    ...updateService
                }
            };

            const result = await eventsCollection.updateOne(filter, serviceInfo);
            res.send(result);
        });




        app.put("/recent-event/edit/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updateRecent = req.body;
            const serviceInfo = {
                $set: {
                    ...updateRecent
                }
            };

            const result = await recentsCollection.updateOne(filter, serviceInfo);
            res.send(result);
        });

        app.delete('/recent-event/delete/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) };
            const result = await recentsCollection.deleteOne(query);
            res.send(result);
        });



        app.delete('/event/delete/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) };
            const result = await eventsCollection.deleteOne(query);
            res.send(result);
        });


        app.delete('/service/delete/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) };
            const result = await servicesCollection.deleteOne(query);
            res.send(result);
        });


    } finally {

    }
}
run();


app.get("/", (req, res) => {
    res.send("Event-360 is running");
});

app.listen(port, () => {
    console.log(`Event-360 is running on ${port}`);
});