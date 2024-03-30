import * as React from 'react'

interface Props{

}

const Footer = (props:Props) =>{
    return(
        <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>Copyright &copy; 2024-2025 <a href="https://kodecube.com" target='_blank'>Kodecube</a>.</strong> All rights
        reserved.
      </footer>
    )
}

export default Footer;