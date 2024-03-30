import React, { Component } from 'react';
interface Props{

}
class Popup extends React.Component<Props> {
  constructor(props:Props){
    super(props);
    this.state={
        time:0
    }
  }
  render() {
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Popup Title</h4>
            </div>
            <div className="modal-body">
              <p>Popup Content Goes Here</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
