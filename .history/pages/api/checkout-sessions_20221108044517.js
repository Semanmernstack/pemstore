const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async (req, res) => {
    const { items, email } = req.body
    const proceedItems = items?.map((item ) => ({

      quantity: 1,
      
      
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
            name: item.title,
            description: item.description,
            images:[item.image],
        },
        
      } , 
      
      
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode:'payment',
        lineItems: proceedItems,
        
        
        success_url: `${process.env.HOST}/succcess`,

        cancel_url: `${process.env.HOST}/succcess`,
        metadata: {
            email,
            images: JSON.stringify(items?.map((item) => item.image))
        }
      });

       res.status(200).json({ id: session.id })
    
}