import {
  fade,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { selectTopUsers } from "../redux/score/selectors";
import { TopUser } from "../redux/score/types";

import { COLORS } from "../const";
import { useEffect, useMemo } from "react";
import { fetchTopUsersRequest } from "../redux/score/actions";

const ScorePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const topUsers = useSelector(selectTopUsers);

  useEffect(() => {
    dispatch(fetchTopUsersRequest());
  }, [dispatch]);

  const renderedTopUsers = useMemo(
    () =>
      topUsers.map(({ username, tasksCount, id }: TopUser, index: number) => (
        <TableRow
          key={id}
          style={{
            backgroundColor: fade(COLORS.LIGHT_BLUE, (3 - index) * 0.33),
          }}
        >
          <TableCell>{username}</TableCell>
          <TableCell align="right">{tasksCount}</TableCell>
        </TableRow>
      )),
    [topUsers]
  );

  return (
    <div className={classes.container}>
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Tasks count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderedTopUsers}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    padding: "20px 0",
    width: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  table: {
    maxWidth: "400px",
  },
});

export default ScorePage;
