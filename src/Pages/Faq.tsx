import {Container, Grid} from "@mui/material";
import {FaqModel, getFaq} from "../Services/Faq.services";
import FaqTable from "../Components/FaqTable";
import {useEffect, useState} from "react";

const Faq = () => {
    const [faq, setFaq] = useState<FaqModel[]>([]);

    useEffect(() => { getFaq().then((data) => setFaq(data)).then(data=>console.log(data))}, [])
return(
        <Container>
            <Grid container={true}>
                <Grid item={true} xs={12} >
                    <FaqTable data={faq}/>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Faq;