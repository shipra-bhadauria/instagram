import React, {Component} from 'react';
import './Instagram.css';
import data from './data/data.json';
import Save from './Save';
import { findIndex, without } from 'lodash';

 class Insta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addComment: [
        {
        user_id:"abh_17",
        comment_text:"nice"
    },{
        user_id:"123adt",
        comment_text:"wow"
    },{
        user_id: "af_r900",
        comment_text:"great !"
    }],
      isToggleOn: true,
      lastIndex : 0,
      value : '',
      save : true,
      newComment: { 
        user_id: "shipra",
        comment_text : ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.toggleSave = this.toggleSave.bind(this);
  }

  handleClick(id) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleAdd(e) {
    e.preventDefault();
    const {addComment} = this.state;
    const newComment = this.state.newComment;

    this.setState({
      addComment: [...addComment, newComment],
      newComment: {
        user_id: "shipra",
        comment_text : ''
      }
    })
    
  }

  addNewComment(e){
    this.setState({
      newComment: {
        user_id: "shipra",
        comment_text : e.target.value
      }
    })
  }

  toggleSave() {
    this.setState({
      save: !this.state.save
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  openSave() {
    document.getElementById("mySave").style.width="25%";
  }

  closeSave() {
    document.getElementById("mySave").style.width="0%";
  }

     render(){
         return(
           <div>
             {data.map((item, index) => {
               let comments = [];
               for (let i = 0; i < item.length; i++){
                 comments.push(
                   <Insta key={item.id}
                    item={item.addComment[i]}/>
                 )
               }

               return(
            <div className="row">
            <div className="col s6" >
              <div className="card" key={item.id} data-key={item.id}>
             <td> <a className="btn-floating waves-effect waves-light "><i className="material-icons"></i></a></td>
               <td><span className="card-title">{item.name}</span></td>
                <div className="card-image">
                  <img src={item.image}/>
                  <div className="like">
                    <td key={item.id}>
                       {this.state.isToggleOn ? <i className="fa fa-heart-o fa-2x" aria-hidden="true"
                     onClick={this.handleClick}/>
                     : <img src="./images/like.png"  onClick={()=>this.handleClick(item.id)}/>}
                     </td>

                    <td><i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
                    </td>
                    <td><i className="fa fa-share fa-2x" aria-hidden="true" onClick={this.openSave}></i></td>
                   
                    {/* <td className="save">
                  <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"
                    onClick={(e) => {  (window.confirm('Post Saved !'))  } }></i></td> */}

                    <td className="save">
                      {this.state.save ? <i class="fa fa-bookmark-o fa-2x" aria-hidden="true" onClick={this.toggleSave}/> : <i class="fa fa-bookmark fa-2x" aria-hidden="true" onClick={this.toggleSave}
                      /> }
                    </td>

                    <Save  closeSave={this.closeSave}/>
                    <p className="likes">Liked by {this.state.isToggleOn ? <span>{item.Liked}</span> : <span>{item.like}</span> }

                     <span className="space">others</span> </p>

                     <div><td><h6>{item.name}</h6></td>
                  <td><p>:</p></td>
                  <td><p>{item.notes}</p></td>
                  </div>
                  </div>
                 </div>
                <div className="card-action">
                 {this.state.addComment.map((val,idx)=>{
                    return  <p>{val.user_id}<span className="spc"></span>{val.comment_text}</p>;
                  })}
                <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
              </label>
              <div className="col-md-4">
                <form className="form-inline" onSubmit={(e) => {this.handleAdd(e)}}>
                  <div className="form-group">
                    <textarea name="comment"  placeholder="Add a Comment..."  className="form-control" value={this.state.newComment.comment_text} id="comment" onChange={this.addNewComment}/>
                    <button
                    type="submit"
                    className="btn d-block ml-auto grey" onSubmit={(e) => {this.handleAdd(e)}}>Post</button>
                  </div>
                </form>
              </div>
            </div>
             </div>
            </div>
            </div>
           </div>
              ) })}
            </div>
        );
    }
}

export default Insta;
