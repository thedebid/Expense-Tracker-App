import React from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from "@material-ui/core"
import useStyles from "./styles.js"
import Form from './Form/Form.jsx'
function Main() {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader title="Expesne Tracker" subheader="dfvd"/>
            <CardContent>
                <Typography align ="center" variant="h5">Total Balance  </Typography>
                <Typography variant="subtitle1" style={{lineheight:'1.5em',marginTop:'20px'}}>Total Balance  </Typography>
                <Divider />
                <Form/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                   
                   </Grid>

                </Grid>
               
            </CardContent>
        </Card>
    )
}

export default Main
