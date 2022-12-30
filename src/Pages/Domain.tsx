import {
    Box,
    Button,
    Container,
    Grid,
    Modal,
    TextField,
} from "@mui/material";
import Record from "../Components/Record";
import {useEffect, useState} from "react";
import {Dnslookup, getDomain, getWhois, WhoisModel} from "../Services/Domain.services";
import Whois from "../Components/Whois";

const Domain = () => {
    const [domain, setDomain] = useState<string>("");
    const [domainData, setDomainData] = useState<Dnslookup>();
    const [open, setOpen] = useState<boolean>(false);
    const [whoisData, setWhoisData] = useState<WhoisModel>()
    const [disable, setDisable] = useState<boolean>(true)

    const handleClick = () => {
        if (domain !== "") {
            getDomain(domain).then((res) => {
                setDomainData(res)
            })
            getWhois(domain).then((res) => {
                setWhoisData(res)
            })
        }
        if (domain !== "") {
            setDisable(false)
        }
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    useEffect(() => {
    }, [domainData])

    return (
        <Container>
            <Grid container={true} spacing={4}>
                <Grid item={true} xs={12} sx={{m: 1}}>
                    <TextField id="Domain-search" margin={"none"} size={"small"} fullWidth={true} label="Domain"
                               variant="outlined" autoFocus={true} onChange={event => setDomain(event.target.value)}/>
                    <Button variant="contained" fullWidth={true} color={"primary"}
                            onClick={handleClick} sx={{mt: 1, mb: 1}}>Search</Button>
                </Grid>
                {["A", "AAAA", "cname", "MX", "NS", "DMARC", "TXT"].map((text, index) => (
                    <Grid item={true} key={index} xs={12} lg={6} sx={{mb: 4, alignItems: "center"}}> <Record type={text}
                                                                                                             data={domainData}/></Grid>
                ))}
            </Grid>
            <Button variant={"contained"} disabled={disable} onClick={handleOpen}>Whois?</Button>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container={true} sx={{height: "100%", width: "100%"}}>
                    <Grid item={true} xs={12} sx={{height: "80%"}}>
                        <Box component="div" sx={{
                            mb: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            overflow: "hidden",
                            overflowY: "scroll",
                            bgcolor: "background.paper",
                        }}>
                            <Button variant={"contained"} color="primary" onClick={
                                handleOpen
                            }>Close</Button>
                            <Whois data={whoisData}/>
                        </Box>
                    </Grid>
                </Grid>
            </Modal>
        </Container>

    )
}
export default Domain;