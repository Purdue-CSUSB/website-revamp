import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Help Room
        </Typography>
        <Typography variant="body2">
            CS 193, CS 180, CS 182, and CS 240 Help
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More information</Button>
      </CardActions>
    </Card>
  );
}