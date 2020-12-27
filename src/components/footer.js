import React from 'react';


class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot;</p>
        </footer>

    )

  }

}

export default Footer;
