import {Button, Container, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";

import {getIp, IpModel} from "../Services/Ip.service";

const Ips = () => {
    const [ip, setIp] = useState<string>("")
    const [ipData, setIpData] = useState<IpModel>()
    const [m8, setM8] = useState<string>("")
    const [m16, setM16] = useState<string>("")
    const [m24, setM24] = useState<string>("")
    const [m32, setM32] = useState<string>("")
    const [display, setDisplay] = useState<boolean>(false)
    const nullData: IpModel = {
        id: 0,
        ip: "Doesn't Belong to Infomaniak",
        isAuth: false,
        network: {
            id: "",
            network: "",
            mask: "",
            isAuth: false,
        }


    }
    const handleClick = () => {
        try {

            setIp(m8 + "." + m16 + "." + m24 + "." + m32)
            getIp(ip).then((res: IpModel) => {
                res !== null ? setIpData(res) : setIpData(nullData)
            })

        } catch (error) {
            console.log("error")

        }
    }

    useEffect(() => {
        handleClick()
    }, [ip])

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };


    return (
        <Container>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12} sx={{m: 1}}>
                    <Grid container={true} spacing={2} sx={{display: "flex"}}>
                        <Grid item={true} xs={3}>
                            <TextField id="Domain-search" margin={"none"} size={"small"}
                                       onChange={event => {
                                           setM8(event.target.value)
                                       }} fullWidth={true}
                                       label="IPv4 /8"
                                       variant="outlined"
                                       inputProps={{maxLength: 3}}
                                       type={"number"}

                                       autoFocus={true}/>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <TextField id="Domain-search" margin={"none"} size={"small"}
                                       onChange={event => {
                                           setM16(event.target.value)
                                       }}
                                       fullWidth={true}
                                       label="IPv4 /16"
                                       variant="outlined"
                                       inputProps={{maxLength: 3}}
                                       type={"number"}/>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <TextField id="Domain-search" margin={"none"} size={"small"}
                                       onChange={event => setM24(event.target.value)} fullWidth={true}
                                       label="IPv4 /24"
                                       variant="outlined"
                                       inputProps={{maxLength: 3}}
                                       type={"number"}
                            />
                        </Grid>
                        <Grid item={true} xs={3}>
                            <TextField id="Domain-search" margin={"none"} size={"small"}
                                       onChange={event => setM32(event.target.value)} fullWidth={true}
                                       onKeyDown={e => handleKeyDown(e)}
                                       label="IPv4 /32"
                                       variant="outlined"
                                       inputProps={{maxLength: 3}}
                                       type={"number"}

                            />
                        </Grid>
                    </Grid>

                    <Button variant="contained" fullWidth={true} onKeyDown={e => handleKeyDown(e)} onClick={() => {
                        handleClick()
                        setDisplay(true)
                    }}
                            color={"primary"}
                            disabled={m8 === "" || m16 === "" || m24 === "" || m32 === "" ? true : false}
                            sx={{mt: 1, mb: 1}}>Search</Button>
                </Grid>
                {display ?
                    <Grid item={true} xs={12} sx={{m: 1}}>
                        <Paper sx={{p: 2}}>
                            <Typography variant={"h5"}>Ip:</Typography>
                            <Typography sx={{ml: 13}}
                                        variant={"h6"}>{ipData?.ip ? ipData.ip : "not Infomaniak Ip"}</Typography>

                            <Divider sx={{m: 3}}/>
                            <Typography sx={{fontSize: 17}} color="text.secondary" gutterBottom>Is Auth:</Typography>
                            <Typography sx={{fontSize: 17, ml: 13, mb: 5}} gutterBottom
                                        variant={"h6"}>{ipData?.isAuth ? "auth" : "non-auth"}</Typography>
                            <Divider sx={{m: 3}}/>
                            <Typography sx={{fontSize: 17}} color="text.secondary" gutterBottom
                                        variant={"h4"}>Network:</Typography>
                            <Typography sx={{fontSize: 17, ml: 13, mb: 5}} gutterBottom aria-disabled={display}
                                        variant={"h6"}>{ipData?.network.network}/{ipData?.network.mask}</Typography>


                        </Paper>
                    </Grid> : <Grid item={true} xs={12} sx={{m: 1}}>
                        <Paper sx={{p: 2}}><Typography sx={{textAlign:"center"}}>You need to enter an IP :{m8+"."+m16+"."+m24+"."+m32}</Typography></Paper></Grid>}
            </Grid>
        </Container>
    )
}
export default Ips;