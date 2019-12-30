import React from 'react'
import { graphql } from 'gatsby'
import GreetCard from '../components/GreetCard';
import TestimonialCard from '../components/TestimonialCard';
import { Grid, Box, Container } from '@material-ui/core';

const IndexPage = ({ data }) => {
  const { greet, testimonials } = data.markdownRemark.frontmatter

  const spacing = 4

  return (
    <Container maxWidth="lg" spacing={spacing/2}>
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

export default IndexPage;

export const pageQuery = graphql`
  query HelloPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        greet
        testimonials {
          name
          role
          comments
        }
      }
    }
  }`;
