import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  DownloadOutlined,
} from "@mui/icons-material";

const KG = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const [data, setData] = React.useState();
  React.useEffect(() => {
    document.title = "KG";
    const APICalls = async () => {
      const res = await fetch("http://localhost:5000/apiGet");
      const data1 = await res.json();
      // remove first 2 characters from data1.image
      data1.image = data1.image.substring(2);
      // remove last 1 character from data1.image
      data1.image = data1.image.substring(0, data1.image.length - 1);
      console.log(data1.image);
      setData(data1.image);
    };
    APICalls();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Knowledge graph" subtitle="This is the knowledge  graph for the input data-file" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            <a href={`data:image/png;base64,${data}`} download="image.png">
              Download Knowledge Graph
            </a>
          </Button>
        </Box>
      </FlexBetween>
      <>
        <Box
          mt="40px"
          height="75vh">
          <div width="80vw" heigh="80vh">
            <img width="100%" height="auto" src={`data:image/png;base64,${data}`} alt="img" />
          </div>
        </Box>


      </>

    </Box>
  )
}

export default KG;