import { withStyles } from '@material-ui/core/styles'
import React, { memo } from 'react'

import MySvg from "./logo_pap_2.png"

const styles = themes => ({
	logoDiv: {
		height: "25%",
		width: "100%",
		display: "flex",
		justifyContent: "center"	
	},
	imgLogo: {
		objectFit: "cover",
		width: "30%",
		height: "30%"
	}
})

function Logo({classes}) {
	return (
			<div className = {classes.logoDiv}>
					<img src={MySvg} className={classes.imgLogo} />
			</div>
	)
}

export default memo(withStyles(styles)(Logo))
