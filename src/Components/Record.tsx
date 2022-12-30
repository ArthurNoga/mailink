import {Card, CardContent, Typography} from "@mui/material"

import {Dnslookup} from "../Services/Domain.services";

const Record = (props: any) => {
    const records: Dnslookup = props.data
    const type: string = props.type

    const getRecord = () => {
        switch (type) {
            case "A":
                return records?.A
            case "AAAA":
                return records?.AAAA
            case "cname":
                return records?.CNAME
            case "MX":
                return records?.MX
            case "NS":
                return records?.NS
            case "TXT":
                return records?.TXT
            case "DMARC":
                return records?.DMARC


        }
    }

    return (
        <Card sx={{minWidth: 300, p: 2}}>
            <CardContent>
                <Typography sx={{fontSize: 17}} color="text.secondary" gutterBottom>
                    <strong> {props.type}</strong> </Typography>
                <Typography variant="h3" ></Typography>

                <Typography >
                    {getRecord()?.split(",").map((text, index) => {
                        return (<span key={index}>{text}</span>)
                    })}
                </Typography>
            </CardContent>

        </Card>
    )
}
export default Record