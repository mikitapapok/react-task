import { styled } from "@mui/styles";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";

export const Container = styled(Box)({
  width: "100%",
  maxWidth: "500px",
  background: "whitesmoke",
  borderRadius: "5px",
});

export const NotesList = styled("div")({
  display: "flex",
  alignItems: "start",
});

export const StyledComponentInfo = styled("div")({
  marginLeft: "40px",
  width: "500px",
  background: "white",
  borderRadius: "5px",
  padding: "20px",
});

export const StyledListComponent = styled(ListItem)((props)=>({
    borderBottom: "1px solid black",
  cursor: "pointer",
  background: `${props.isActive?"darkgrey": "white"}`,
  color: `${props.isActive?"white":"black"}`

}))
export const StyledSpan = styled("span")({
  fontWeight: "Bold",
});
