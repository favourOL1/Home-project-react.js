 const Dropdown =(props) => {

    const { link, items } = props


    return(
        <a href="#"  className="dropdown">
            {link}

            { items &&
                <div className="dropdown-content">
                    <div>

                        {
                            items?.map((item, index) => {
                                return <a key={index} href={item.link}>{item.name}</a>
                            })
                        }
    
                    </div>
                </div>
            }
      </a> 
    )
 }

export default Dropdown