import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import moment from "moment";

import useStyles from "./styles";

const PackageItem = (props) => {
  const { data } = props;
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <CardContent className={styles.cover}>
        <img src={"/assets/images/package.png"} className={styles.img} />
      </CardContent>
      <div className={styles.details}>
        <CardContent className={styles.content}>
          <div className={styles.innerCard}>
            <Typography variant="caption" className={styles.title}>
              Added at
            </Typography>
            <Typography variant="caption" className={styles.mainTitle}>
              {moment(data.createdAt).fromNow()}
            </Typography>
          </div>
          <div className={styles.innerCard}>
            <Typography variant="caption" className={styles.title}>
              Status
            </Typography>
            <Typography variant="caption" className={styles.mainTitle}>
              {data.status}
            </Typography>
          </div>
          <div className={styles.innerCard}>
            <Typography variant="caption" className={styles.title}>
              Agent
            </Typography>
            <Typography variant="caption" className={styles.mainTitle}>
              {data.agent ? data.agent : "Pending"}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PackageItem;
