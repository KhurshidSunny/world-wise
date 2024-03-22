import style from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.copyright}>
        &copy; Copyright {new Date().getFullYear()} by worldwise Inc.
      </p>
    </footer>
  );
}

export default Footer;
