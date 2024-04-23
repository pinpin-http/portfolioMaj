import React from "react";
import { Typography } from "@material-ui/core";

export const Today = () => {
    var date = new Date();
    var hour = date.getHours();
    var time = `${
      (hour < 4 && "nuit") ||
      (hour < 12 && "matinée") ||
      (hour < 18 && "journée") ||
      (hour < 22 && "soirée") ||
      "night"
    }`;
    var days = [
      "weekend",
      "Lundi",
      "Mardiy",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "weekend",
    ];
    var day = days[date.getDay()];

    return (
      <Typography variant="h5" component="h2" gutterBottom>
         Très cher lecteur, passez une bonne {day === "weekend" ? day : time}.
      </Typography>
    );
};