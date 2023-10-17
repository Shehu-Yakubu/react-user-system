import { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [response, setResponse] = useState(null)

    const requestAPI = async () => {
        try {
            const res = await axios.get('https://famous-quotes4.p.rapidapi.com/random', {
                headers: {
                    'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com/random',
                    'x-rapidapi-key': '003df80f9dmsh27d8387cd7926cdp180cfbjsnd409d8f1f2a4'
                },
                params: {
                    category: 'all',
                    count: '1'
                }
            })
            setResponse(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <button onClick={() => requestAPI()}>Get Random Quotes</button>
            {
                response && <span>{response.text}</span>
            }
        </div>
    )
}

export default Axios