import React, { Component } from 'react'
import { connect } from 'react-redux'

class UploadImage extends Component{
    
    onchange = (event) =>{
        let image = event.target.files;
        let reader = new FileReader();
    
        reader.readAsDataURL(image[0]);
        reader.onload = (event) =>{
          const formData = {image: event.target.result}
          this.props.setPic(formData);
        }
      }
    render(){
        return(
            <div>
            <input type="file" name="image" onChange={(event) => this.onchange(event)}/>
            </div>
        )
    }
}
const mapStatetoProps = state =>({
    state,
});

export default connect(mapStatetoProps)(UploadImage);