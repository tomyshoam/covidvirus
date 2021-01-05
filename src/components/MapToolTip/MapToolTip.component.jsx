import React from 'react'
import { Tooltip } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
    },
    cardContent: {
        padding: 5,
    },
    media: {
        width: 200,
        height: 110,
    },
    margin: {
        marginTop: 10
    },
    chip: {
        backgroundColor: 'rgba(255, 65, 108, .2)'
    }
  });

function MapToolTip({data}) {
    const classes = useStyles();
    return (
        <Tooltip >
            <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data.countryInfo.flag}
          title={`${data.country}'s flag`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="subtitle2" component="h6" align="center">
            {data.country}
          </Typography>
          <Grid container alignItems="center" justify="center">
              <Grid item >
                <Chip variant="outlined" label={data.todayCases} color="secondary" icon={<AddIcon />} className={classes.chip}/>
              </Grid>
          </Grid>
          <Typography variant="subtitle2"  component="p" align="center" className={classes.margin}>
              {`${data.cases} Total cases`}
          </Typography>
          <Typography variant="subtitle2"  component="p" align="center">
              {`${data.recovered} Recoveries`}
          </Typography>
          <Typography variant="subtitle2"  component="p" align="center">
              {`${data.deaths} Deaths`}
          </Typography>
        </CardContent>
    </Card>  
        </Tooltip>
    )
}

export default MapToolTip
