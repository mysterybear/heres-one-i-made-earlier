import React from 'react'
import GreetCard from "../../components/GreetCard"
import TestimonialCard from '../../components/TestimonialCard';
import { Grid, Box, Container } from '@material-ui/core';


const IndexPagePreview = ({ entry }) => {
  const { greet, testimonials } = entry.getIn(['data']).toJS();
  const spacing = 4;

  return (
    <Container maxWidth="lg" spacing={spacing / 2}>
      <GreetCard greet={greet} />
      <Box mt={spacing}>
        <Grid container spacing={spacing}>
          {testimonials.map((props) =>
            <Grid item xs={12} md={4} key={props.name}>
              <TestimonialCard {...props} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default IndexPagePreview;
