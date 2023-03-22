import { Box, Button, Card, Grid, styled } from "@mui/material";
import RecentProjects from "components/Dashboards/projectManagement/RecentProjects";
import TeamProgress from "components/Dashboards/projectManagement/TeamProgress";
import TodoList from "components/Dashboards/projectManagement/TodoList";
import TotalProject from "components/Dashboards/projectManagement/TotalProject";
import DashboardLayout from "components/Layouts/DashboardLayout";
import { H1, Paragraph } from "components/Typography";
import useTitle from "hooks/useTitle";
import { FC } from "react";

// styled components
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 3rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    padding: "2rem",
    "& img": {
      marginBottom: "1.5rem",
    },
  },
}));

const ProjectManagement: FC = () => {
  // change navbar title
  useTitle("Project Management");

  return (
    <DashboardLayout>
      <Box pt={2} pb={4}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={7} xs={12}>
            <RecentProjects />
            <Box mt={3} />
            <TeamProgress />
          </Grid>
          <Grid item lg={4} md={5} xs={12}>
            <TotalProject />
            <Box height={24} />
            <TodoList />
          </Grid>

          <Grid item xs={12}>
            <StyledCard>
              <Box>
                <H1 fontSize={24}>Buy Uko & Get 15% Off</H1>
                <Paragraph fontSize={13} color="secondary.400">
                  Well Designed Theme to make everything better
                </Paragraph>
                <Button variant="contained" size="small" sx={{ mt: "2rem" }}>
                  Buy Now
                </Button>
              </Box>

              <img
                src="/static/illustration/project-management-dashboard.svg"
                alt="saas-dasboard-footer"
              />
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default ProjectManagement;
