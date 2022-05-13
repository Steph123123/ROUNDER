
import react, {useState} from "react";
import axios from "axios"

export default function Paymentform() {
    const [success, setsuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const submit = async(e) => {
        e.preventdefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getelement(CardElement)
        })

    }

    if(!error){
        try{
            const {id} = paymentMethod
            const response= await axios.post("URL",{
                amount:1000,
                id
            })
            if(response.data.success){
                console.log ("successful payment")
                setSuccess(true)
            }


        }
    }


    return(
        
        <div>

        </div>
    )
}