import styles from "../../styles/page-layout.module.css";
import logo from "../../files/logo.png";
import { Typography,Row, } from "antd";

function Header() {

	return (
		<div className={styles.header}>
			<Row className={styles.logoTitle}>
					<img className={styles.logo} src={logo} alt="Logo" />
					<Typography.Title  style={{ margin: "0px",color:"#ba1a1b" }}>
						SIO AG
					</Typography.Title>
			</Row>
			<div>
				<Typography.Title style={{ margin: "0px" }}>
					Log Hours
				</Typography.Title>
			</div>
		</div>
	);
}

export default Header;
