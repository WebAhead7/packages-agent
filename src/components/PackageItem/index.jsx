import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import moment from "moment";

import useStyles from "./styles";

const PackageItem = (props) => {
  const history = useHistory();
  const { data } = props;
  const styles = useStyles();

  const navigateTo = () => {
    history.push(`/package/${data.businessId}/${data._id}`);
  };

  return (
    <Card className={styles.root} onClick={navigateTo}>
      <CardContent className={styles.cover}>
        <img src={"/assets/images/package.png"} className={styles.img} />
      </CardContent>
      <div className={styles.details}>
        <CardContent className={styles.content}>
          <div className={styles.innerCard}>
            <Typography variant="caption" className={styles.title}>
              Store
            </Typography>
            <Typography variant="caption" className={styles.mainTitle}>
              {data.address.name}
            </Typography>
          </div>
          <div className={styles.innerCard}>
            <Typography variant="caption" className={styles.title}>
              To
            </Typography>
            <Typography variant="caption" className={styles.mainTitle}>
              {data.address.address.city}
            </Typography>
          </div>
          <div className={styles.innerCard}>
            <Typography variant="caption" className={styles.title}>
              Pay
            </Typography>
            <Typography variant="caption" className={styles.mainTitle}>
              ₪{data.delivery_price}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PackageItem;

// location - to - pay ||| ["name", "mobile", "phone", "address"]
