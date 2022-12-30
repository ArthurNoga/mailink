import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {WhoisModel} from "../Services/Domain.services";

const Whois = (props: any) => {
    const data: WhoisModel = props.data
    return (
        <Grid container={true} spacing={2}>

            <Typography>{data.registrant_name}</Typography>

            {[[data.creation_date, "Création date"],
                [data.dnssec, "DNSSEC"],
                [data.domain_name, "Domain name"],
                [data.registrant_name, "Owner name"],
                [data.tech_c, "Technical contact"],
                [data.registrant_address, "Owner adress"],
                [data.registrant_name, "Owner name"]].map((text, index) => {

                return (<Card key={index} sx={{p: 2, m: 5,}}>

                    <CardHeader title={text[1]}/>
                    <CardContent>{text[0] === null || text[0] === undefined ? "Whois information hidden" : text[0]}</CardContent>
                </Card>)
            })}
        </Grid>)
}
export default Whois