import React from 'react'
import {List as MUList , ListItem, ListItemAvatar, ListItemText ,Avatar , ListItemSecondaryAction,IconButton,Slide} from "@material-ui/core"
import {Delete, MoneyOff} from "@material-ui/icons"

import useStyles from './styles'

function List() {
    const classes = useStyles()
    const transctions =[{
        id:1
    }]
    return (
        <MUList dense={false} className={classes.list}>
            {
                transctions.map((transction)=>(
                    <Slide  direction="down" in mountOnEnter unmountOnExit key={transction.id}>

<ListItem>
    <ListItemAvatar>
        <Avatar className={transction.type==='Income'?classes.avatarIncome : classes.avatarExpense}>

        </Avatar>
    </ListItemAvatar>
</ListItem>
                    </Slide>
                ))
            }
        </MUList>
    )
}

export default List
