import React from 'react'
import {TextField, Typography, Grid, Button,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core"
import useStyle from "./styles"

function Form() {
 const classes = useStyle()
    return (
        <Grid container spacing={2} style={{marginTop:"20px"}}>
            <Grid Item xs={12}>
                <Typography variant="subtitle2" gutterBottom>

                </Typography>
            </Grid>
          <Grid Item xs={6} >
              <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Select>
                      <MenuItem value="Income">Income</MenuItem>
                      <MenuItem value="Expense">Expense</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid Item xs={6}>
              <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select>
                      <MenuItem value="Income">Income</MenuItem>
                      <MenuItem value="Expense">Expense</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid Item xs={6} style={{marginTop:'10px'}}>
             
                <TextField type="number" label="Amount" fullWidth/>
             
            </Grid>
            <Grid Item xs={6} style={{marginTop:'10px'}}>
             
                <TextField type="date" label="Date" fullWidth/>
             
            </Grid>
            <Button className={classes.Button} variant="outlined" color="primary" fullWidth style={{marginTop:'10px'}}>Create</Button>
        </Grid>
    )
}

export default Form
