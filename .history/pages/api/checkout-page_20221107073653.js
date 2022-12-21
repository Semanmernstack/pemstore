const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async (req, res) => {
    const { items, email } = req.body;
    const proceedItems = items.map(item => ({
        quantity: 1,
        description: item.description,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
            name: item.name,
            images:item.image,
        }
        
      }  
      
      
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],

        line_items: proceedItems,
        mode: 'payment',
        success_url: 'https://localhost:3000/success',
        cancel_url: 'https://localhost:3000/cancel',
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
      });

      res.status(200).json({ id: session.id })
    
}