import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function TestimonialCard({ name, role, comments }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="headshot">
            R
          </Avatar>
        }
        title={name}
        subheader={role}
      />
      <CardContent>
        <Typography variant="body2">
          {comments}
        </Typography>
      </CardContent>
    </Card>
  );
}
