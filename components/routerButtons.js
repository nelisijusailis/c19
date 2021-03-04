import { Tooltip, Button, Box } from "@material-ui/core";
import { Public as PublicIcon, Home as HomeIcon } from "@material-ui/icons";
import { useRouter } from "next/router";

const RouterButtons = ({ homeButton, countryButton }) => {
  const router = useRouter();
  return (
    <Box display="flex" flexWrap="wrap" gridGap=".25em">
      <Tooltip title="Go to home page" arrow placement="top">
        <Button
          onClick={() => router.push("/")}
          onMouseOver={() => router.prefetch("/")}
          startIcon={<HomeIcon />}
          variant="text"
          disabled={!homeButton}
        >
          Home
        </Button>
      </Tooltip>
      <Tooltip title="Latest statistics of every country" arrow placement="top">
        <Button
          onClick={() => router.push("/latest")}
          onMouseOver={() => router.prefetch("/latest")}
          startIcon={<PublicIcon />}
          variant="outlined"
          disabled={!countryButton}
        >
          Countries
        </Button>
      </Tooltip>
    </Box>
  );
};

export default RouterButtons;
