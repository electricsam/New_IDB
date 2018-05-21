

const MenuItem = props => (
    <li className={Styles.container}>
      <Link to={props.address} className={Styles.link}>{props.linkText}</Link>
      {props.children}
    </li>
);


export default MenuItem;
