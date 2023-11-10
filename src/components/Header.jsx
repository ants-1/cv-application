function Header({
    headerClassName,
    headerName,
    iconSrc,
    menuIcon,
    handleHideSection,
  }) {
    return (
      <div className={headerClassName}>
        <img src={iconSrc} alt="" />
        <h2>{headerName}</h2>
        <img src={menuIcon} className="arrow-icon" onClick={handleHideSection} alt="" />
      </div>
    );
  }
  
export default Header;
