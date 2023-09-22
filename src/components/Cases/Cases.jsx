import { useState, useEffect } from  "react"
import {    Container,
    Typography
} from '@mui/material/';

//Initialize: Cases 

const Cases = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await fetch('api/data')
                //Cases API
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>

            <Typography
                variant="h6"
                id="brandTitle">
                <div id="rectAngular"></div>
                Cases



            </Typography>
            <Container>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.imageUrl}
                    </li>
                ))}
            </ul></Container>
        </div>
    );

}

export default Cases;