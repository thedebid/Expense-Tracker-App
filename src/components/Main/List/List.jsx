import React from "react";
import {
  List as MUList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";

function List() {
  const classes = useStyles();
  const transctions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 30,
      date: "Sat Jan 02 2021",
    },
    {
      id: 2,
      type: "Expense",
      category: "Salary",
      amount: 30,
      date: "Sat Jan 02 2021",
    },
    {
      id: 3,
      type: "Income",
      category: "Salary",
      amount: 30,
      date: "Sat Jan 02 2021",
    },
    {
      id: 4,
      type: "Income",
      category: "Salary",
      amount: 30,
      date: "Sat Jan 02 2021",
    },
  ];
  return (
    <MUList dense={false} className={classes.list}>
      {transctions.map((transction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transction.category}
              secondary={`$${transction.amount} - ${transction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUList>
  );
}

export default List;
