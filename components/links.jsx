const Links = ({ items }) => {
    if (items) {
        return (
            <div className="m-card">
                <h3>Linki</h3>
                <ol>
                    {Object.entries(items).map((item, i) => (
                        <li key={i}><a href={item[1]}>{item[0]}</a></li>
                    ))}
                </ol>
            </div>
        )
    } else {
        return <div></div>
    }
};


export default Links