function SectionHeader({headerClassName, headerName, iconSrc, menuIcon }) {
    return (
        <div className={headerClassName}>
            <img src={iconSrc} alt="" />
            <h2>{headerName}</h2>
            <img src={menuIcon} alt="" />
        </div>
    )
}

export default SectionHeader;