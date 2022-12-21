
import { buffer } from "micro"
import * as admin from  "firebase-admin"

const serviceAccount = require('../../permission.json')
const db = admin.firestore()

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), 
}) : admin.app();

const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const takeOrder = async (session) => {
    return db.collection("my_users").doc(session.metadata.email)
        .collection("orders").doc(session.id).set({
            amount: session.amount_total/100,
            images:JSON.parse(session.metadata.images),
            
        })
}


export default async (req, res) => {
    if (req.body === "post") {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig_header = request.headers["stripe_signature"]   
        
        let event

        try {
            event = stripe.webhooks.constructEvent(payload, sig_header, endpointSecret)
        } catch (error) {
            return res.status(400).send(`webhook error: ${error.message}`)
        }

        if(event.type ==='checkout.session.completed') {
            const session = event.data.object;

            return takeOrder(session).then(() => res.status(200))
            .catch((error) => res.status(400).send(`webhook error: ${error.message}`))
        }
    }  
};


export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}