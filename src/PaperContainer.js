import { Container, Paper, Grid, Divider } from "@mui/material";

export default function PaperContainer({ title, content }) {
  return (
    <Container>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Paper>{title}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>{content}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
