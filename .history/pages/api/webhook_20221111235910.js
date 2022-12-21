
import { buffer } from "micro"
import * as admin from  "firebase-admin"

import { cert, getApp, initializeApp } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'


const serviceAccount = require('../../../permission.json')

const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const app= !admin.apps.length ? initializeApp({
    credential: cert(serviceAccount), 
}) : getApp();

const takeOrder = async (session) => {
    return getFirestore(app).collection("my_users").doc(session.metadata.email)
        .collection("orders").doc(session.id).set({
            amount: session.amount_total/100,
            images:JSON.parse(session.metadata.images), 
            
        })
        
}

export default async (req, res) => {
    if (req.method === "POST") {
        const requestBuffer = await buffer(req);
        const payload = req.data.toString()
        const sig = request.headers["stripe_signature"]   
        
        let event;

        try {
            event = stripe.webhooks.constructEvent(reg.data.toString(), sig, endpointSecret)
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