import React from "react";
import { Typography } from "@material-ui/core";

export const Today = () => {
    var date = new Date();
    var hour = date.getHours();
    var time = `${
      
      (hour < 12 && "matin") ||
      (hour < 18 && "après-midi") ||
      (hour < 22 && "soir") ||
      "night"
    }`;
    var days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    var day = days[date.getDay()];

    return (
      <Typography variant="h5" component="h2" gutterBottom>
         Très cher lecteur, passez un bon { day } {time}.
      </Typography>
    );
};