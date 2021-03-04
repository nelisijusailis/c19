import { Box, Typography, Paper } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useRouter } from "next/router";
import RouterButtons from "components/routerButtons";

const LatestData = ({ data, date }) => {
  const router = useRouter();
  const { rows, columns } = data;

  return (
    <>
      <RouterButtons homeButton />
      <hr />
      <DataHeader date={date} length={rows.length} />
      <Box component={Paper} width="100%" height="34em">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          density="compact"
          onRowClick={({ row: { country } }) => router.push(`/${country}`)}
          onRowHover={({ row: { country } }) => router.prefetch(`/${country}`)}
        />
      </Box>
    </>
  );
};

const DataHeader = ({ date, length }) => (
  <Box marginY="1em" display="flex" flexDirection="column" gridGap="1em">
    <Typography variant="h4" component="h1">
      Reported cases for <b>{new Date(date).toJSON().slice(0, 10)}</b> from{" "}
      <b>{length}</b> countries
    </Typography>
    <Typography variant="body2" component="span">
      Select a <b>country</b> to see its timeline
    </Typography>
    <Typography variant="body2" component="span">
      Note: You can sort the data by clicking on the column headers
    </Typography>
  </Box>
);
export default LatestData;
